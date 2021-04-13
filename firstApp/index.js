
document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#create-task-form")
    const list = document.querySelector("#list")
    const tasks = document.querySelector("#tasks")
    const label = document.querySelector("#new-hobby-description")
    
    
    
    function handleSubmit(event) {
      event.preventDefault()
      console.log(label.value)
      const li = document.createElement('li')
      li.innerText = label.value 
      tasks.appendChild(li)
      event.target.reset()
      console.log(event.target)
      const button = document.createElement('button')
      button.innerText = "Delete"
      li.appendChild(button)
      button.addEventListener('click', deleteItem)
    }
    
    function deleteItem(event) {
      this.parentNode.remove()
    }
    
    form.addEventListener('submit', handleSubmit) 
    
      
      
    });