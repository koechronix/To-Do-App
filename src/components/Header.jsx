import React from 'react'

function Header({todos}) {
  return (
    <div>
        <h1 className="header"> To Do List</h1>
        <div>
            <h2 className="all-todos-title">All Todos</h2>
            {/* {renderTodosListAll} */}
        </div>
        </div>
  )
}

export default Header