const task_list = document.querySelector(".task-list ul")
const input = document.getElementById("input")
const container = document.querySelector(".task-list")
const form = document.querySelector("main form")

task_list.addEventListener("click", (e) => {
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle("check")
    } else if(e.target.tagName == 'SPAN' & e.target.classList.contains('material-symbols-outlined')){
        e.target.parentElement.remove()
        save()
        mostrar()
    }
    save()
})
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
        e.preventDefault()
        adicionar()
    }
})
function mostrar(){
    task_list.innerHTML = localStorage.getItem("list")
    if (task_list.children.length == 0){
        container.style.display = 'none'
    }else{
        container.style.display = "block"
    }
}
function adicionar(){
    let new_task = document.createElement("li")

    if (input.value == ""){return}
    new_task.innerHTML = `<span class="task">${input.value}</span><span class="material-symbols-outlined">close</span>`
    task_list.appendChild(new_task)
    input.value = ""
    save()
    mostrar()
}
function save(){
    localStorage.setItem("list", task_list.innerHTML)
}

mostrar()