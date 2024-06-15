const checkbox = document.querySelector(".task-list ul")
checkbox.addEventListener("click", function(e) {
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle("check")
    } else if(e.target.tagName == 'SPAN' & e.target.classList.contains('material-symbols-outlined')){
        alert("DELETAR")
    }
})
function mostrar(){
    const container = document.querySelector(".task-list")
    const list = document.querySelector(".task-list ul")
    if (list.children.length == 0){
        container.style.display = 'none'
    }
}
mostrar()