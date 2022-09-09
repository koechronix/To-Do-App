import React from 'react'
import TaskList from './TaskList'

function Header({tasks, onTaskDelete}) {
  const renderTasksListAll = tasks.map(task => <TaskList task={task} key={task.id} 
    onTaskDelete={onTaskDelete}/>)

  return (
    <div>
        <h1 className="header"> Task List</h1>
        <div>
            <h2 className="all-tasks-title">All Tasks</h2>
            {renderTasksListAll}
        </div>
        </div>
  )
}

export default Header
