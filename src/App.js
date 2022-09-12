import './App.css';
import React, { useEffect, useState} from 'react';
import NewTask from './components/NewTask';
import ItemList from './components/ItemList'
import Header from './components/Header';

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('https://amos-todo.herokuapp.com/tasks')
    .then(r => r.json())
    .then(tasks => setTasks(tasks))
  }, [])

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask])
  }

  const handleDeleteItem = (id) => {
    const finalTasks = tasks.filter(task => task.id !== id)
    setTasks(finalTasks)
  }

  function handleUpdateTask(updatedTaskObj) {
    const updatedTasks = tasks.map(task => {
      if (task.id === updatedTaskObj.id) {
        return updatedTaskObj;
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  }

  return (
   <div className="main">
     <Header tasks={tasks} onTaskDelete={handleDeleteItem}/>
     <ItemList onAddTask={handleAddTask} tasks={tasks} onTodoDelete={handleDeleteItem} onUpdateTask={handleUpdateTask}/>

     <br/><br/>
   </div>
  )
}

export default App;
