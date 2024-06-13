import React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../context/TodoContext'


function TodoPage() {
    const { todos, setTodos } = useContext(TodoContext)
    const [title, setTitle] = useState('')

    const elements = []

    const updateTotos = (todo, check) => {
        todos.map(
            (element) => {
                if (element.title === todo.title) {
                    element.isDone = check
                }
            }
        )
    }

    todos.forEach(element => {
        elements.push(<div key={element.title} className='bg-white m-2 p-2 rounded-xl flex justify-between'>
            <h1 className=' text-blue-500 text-[14px] md:text-[16px] lg:text-[18px] w-[90%] text-start '>{element.title}</h1>
            <div className='w-[10%] grid items-center'>
                <input className=' ' type='checkbox' onChange={() => updateTotos(element, !element.isDone)} value={element.isDone} />
            </div>
        </div>)


    })






    const onAdd = () => {
        todos.push({ title: title, isDone: false })
        setTitle('')
    }
    return (

        <div className='bg-white  w-full '>
            <div className='w-full flex flex-col items-center '>
                <h1 className='h-[20%] text-blue-500 text-xl md:text-xl lg:text-2xl text-start  font-bold p-2 md:p-4 lg:p-4 '>Todo Page</h1>

                <div className='w-[90%] p-2 bg-gray-300 m-2 rounded-md flex flex-col md:flex-row lg:flex-row items-center'>
                    <input type="text" className='w-full p-2 text-sm bg-white rounded-l-2xl rounded-r-2xl md:rounded-r-[0] lg:rounded-r-[0] md:rounded-l-2xl lg:rounded-l-2xl' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <button onClick={onAdd} className='w-[20%] md:w-[10%] lg:w-[10%] p-2 m-2 md:m-0 lg:m-0 text-sm font-bold text-white bg-blue-500 rounded-r-2xl rounded-l-2xl md:rounded-l-[0] lg:rounded-l-[0]'>Add</button>
                </div>

                <div className='w-[90%] p-2 bg-gray-300 m-2 rounded-md flex flex-col'>
                    <h2>All Todo's</h2>

                    <div className=''>
                        {elements}
                    </div>




                </div>
            </div>



        </div>
    )

}

export default TodoPage