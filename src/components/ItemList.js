import React,{ useEffect, useState} from 'react'
import Item from './Item'
import TaskList from './TaskList'
import NewTask from './NewTask'
import SearchBar from './SearchBar'


function ItemList({tasks, onTaskDelete, onUpdateTask, onAddTask}) {
    const [search, setSearch] = useState("")
    const [filterBy, setFilterBy] = useState('')

    const filteredTasks = tasks.filter(task => task.level.level === filterBy) 
    const renderTasksList = filteredTasks.map(task => <TaskList task={task} key={task.id} onTaskDelete={onTaskDelete}/>)
    
    const onFilterChange = (e) => {
        setFilterBy(e.target.value)
      }

    const displayedTasks = tasks.filter(task =>
    task.item.toLowerCase().includes(search.toLowerCase())
    )

    const renderTasks = displayedTasks.map(task => <Item task={task} key={task.id} onTaskDelete={onTaskDelete} onUpdateTask={onUpdateTask} />)

    return (
        <div className='flexer'>
            <div className='flex'>
                <div className='dropdown'>
                    
                <div className='info'>Make a New Task</div>

                    <div className='task'>
                        <NewTask onAddTask={onAddTask}/>
                    </div>

                    <div className='info'>Search for Tasks</div>             
                    <div className='task'>
                        <br/>
                        <SearchBar onSearch={setSearch}/>
                        <br/>
                    </div>

                    <div className='info'>Filter by Level</div>
                   
                    <select className='select' onChange={onFilterChange} value={filterBy}>
                        <option value="">Choose Level</option>
                        <option value="cattle grazing">Cattle grazing</option>
                        <option value="farm works">Farm works</option>
                        <option value="gym">Gym</option>
                        <option value="coding">Coding</option>
                        <option value="music">Music</option>
                        <option value="shopping">Shopping</option>
                    </select>

                    <div id='tasks-cat'>
                    {renderTasksList}
                </div>
                </div>
                
            </div>

            <div className='flex'>
                
            <div id='edit' className='info'>Edit Tasks</div>

                <div className='the-list'>
                    {renderTasks}
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default ItemList
