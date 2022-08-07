document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("DOMContentLoaded", () => {
 const form = document.querySelector('#create-task-from')
 const newTaskPriority = document.getElementById("new-task-priority")
   

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const taskDesc = event.target["new-task-description"]

      const ul = document.querySelector("#tasks")
      

      li.textContent = taskDesc

      form.addEventListener('submit', createNewTask)

      const createNewTask = e => {
        e.preventDefault
        const li = document.createElement('li');
        li.innerText = taskDesc.value;

        appendLi(li)
        event.target.reset()

        const appendLi = task =>{
          document.getElementById(('tasks').appendChild(task))
        }

      }

      const button = document.createElement("button")
      button.textContent = "x"
      button.addEventListener('click', (event) => {
          event.target.parentElement.remove()
      })
      li.append(" ", button)

      ul.append(li)


    })
  })
});
