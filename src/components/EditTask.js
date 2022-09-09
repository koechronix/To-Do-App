import React, { useEffect, useState} from 'react'

function EditTask({onUpdateTask, task}) {
  const [newTask, setTask] = useState(task.item)
  const [importance, setImportance] = useState(task.importance)
  const [level_id, setLevelId] = useState(task.level_id)

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: newTask,
        importance: importance,
        level_id: level_id
      }),
    })
    .then((r) => r.json())
    .then(updatedTask => {
        onUpdateTask(updatedTask)
    })
  }

  return (
    <form className='edit-forum' onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="item"
        autoComplete="off"
        value={newTask}
        placeholder="item"
        onChange={(e) => setTask(e.target.value)}
      />
      
      <select className='importance2'  onChange={(e) => 
        setImportance(e.target.value)}>
        <option value={importance}>Update Importance</option>
        <option value="1. high">High</option>
        <option value="2. low">Low</option>
      </select>
      <select className='level2' onChange={(e) => setLevelId(e.target.value)}>
        <option value={level_id}>Update Level</option>
        <option value="0">Not specified</option>
        <option value="1">Cattle grazing</option>
        <option value="2">Farm works</option>
        <option value="3">Gym</option>
        <option value="4">Coding</option>
        <option value="5">Music</option>
        <option value="6">Shopping</option>
      </select>
      <br></br>
      <button className='btn' type="submit">UPDATE</button>
    </form>
  )
}

export default EditTask