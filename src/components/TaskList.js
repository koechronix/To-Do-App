import React from 'react'

function TaskList({task, onTaskDelete}) {

  function handleDeleteClick() {
      fetch(`https://amos-todo.herokuapp.com/tasks/${task.id}`, {
        method: "DELETE",
      })
      onTaskDelete(task.id)
  }
  
  return (
      <div className='all-tasks'>
          {task.importance === "1. high" ? (
              <li className="red"><button className='trash' onClick={handleDeleteClick}>X</button>{task.item.toLowerCase()} </li>
          ) : task.importance === "2. low" ? (
              <li className="green" ><button className='trash' onClick={handleDeleteClick}>X</button>{task.item.toLowerCase()} </li> 
          ) : (
              <li>{task.item.toLowerCase()}</li> 
          )}
          
      </div>
  )
}

export default TaskList