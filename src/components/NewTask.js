import React, { useState} from 'react'

function NewTask({onAddTask}) {
  const [task, setTask] = useState("")
  const [importance, setImportance] = useState("1. high")
  const [level_id, setLevelId] = useState("0")

  function handleSubmit(e) {
    e.preventDefault()

    fetch("http://localhost:9292/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: task,
        importance: importance,
        level_id: level_id
      }),
    })
    .then((r) => r.json())
    .then(newTask => {
      onAddTask(newTask)
      setTask("")
      setImportance(importance)
      setLevelId(level_id)
    })
  }

  return (
    <div>
      {/* <h3 className='all-tasks'>Add New Task</h3> */}
      <form className='add-forum' onSubmit={handleSubmit}>
        <input
          type="text"
          name="item"
          autoComplete="off"
          value={task}
          placeholder="Add Task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <br></br>
        <select className='importance' onChange={(e) => setImportance(e.target.value)}>
          <option value={importance}>Choose Importance</option>
          <option value="1. high">High</option>
          <option value="2. low">Low</option>
        </select>
        <select className='level' onChange={(e) => setLevelId(e.target.value)}>
          <option value={level_id}>Choose Level</option>
          <option value="0">Not specified</option>
          <option value="1">Cattle grazing</option>
          <option value="2">Farm works</option>
          <option value="3">Gym</option>
          <option value="4">Coding</option>
          <option value="5">Music</option>
          <option value="6">Shopping</option>
        </select>
        <br></br>
        <button className='btn' id='add' type="submit">Add Task</button>
      </form>
      <br/>
    </div>
    
  )
}

export default NewTask
