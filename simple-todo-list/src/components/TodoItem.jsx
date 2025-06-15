import { useState } from 'react'
import { useTodo } from '../contexts'

const TodoItem = ({todo}) => {
    const [todoMsg, setTodo] = useState(todo.todoMsg)
    const [isEditable, setIseditable] = useState(false)
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()
    const editTodo = () => {
        updateTodo({...todo, todoMsg: todoMsg }, todo.id)
        setIseditable(false)
    }

    const deletingTodo = () => {
        deleteTodo(todo.id)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
        }
    console.log(todo.date)
    return(
        <>
            <div className='w-fit h-[10vh]  flex m-3 p-2 items-center bg-gray-800 '>
                <input type="checkbox" className='w-[3vw] h-[4vh] cursor-pointer' onChange={toggleCompleted} checked={todo.completed}/>
                <input type="text" className={`${todo.completed ? "line-through bg-gray-200" : ""} ${isEditable ? "" : "cursor-pointer"} w-[45vw] p-5 text-xl font-semibold `} readOnly={!isEditable} value={todoMsg} onChange={(e) => setTodo(e.target.value)} checked={todo.completed}/>
                <button className={`${todo.completed ? "bg-gray-800" : "bg-red-300"} h-[5vh] w-[3vw] font-bold m-3 text-2xl  p-2 rounded-3xl`} onClick={() => {
                    if(isEditable){
                        editTodo()
                    }else{
                        setIseditable(!isEditable)
                    }
                }}>
                    {isEditable ? "📁" : "✏️"}
                </button>
                <button className={`${todo.completed ? "bg-gray-800" : "bg-red-300"} h-[5vh] w-[3vw] m-3 font-bold text-3xl  p-2 rounded-3xl`} onClick={deletingTodo}>
                    ❌
                </button>
                {/* <p className='w-[20vw] text-white'>{todo.date}</p> */}
            </div>
        </>
    )
}

export default TodoItem