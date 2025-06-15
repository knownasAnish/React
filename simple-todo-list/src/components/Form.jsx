import React, {useState} from 'react'
import { useTodo } from '../contexts'

const Form = () => {
    const [todo, setTodo] = useState('')
    const {addTodo} = useTodo()
    const submitForm = (e) => {
        e.preventDefault();
        addTodo({completed: false, todoMsg: todo, date:new Date})
        console.log(todo)
        setTodo('')
    }
    return(
        <>
            <form onSubmit={submitForm}>
                <div className='w-[70vw]  rounded-2xl h-[10vh]  mt-[10vh] flex justify-center items-center gap-[2vw]'>
                    <input onChange={(e) => setTodo(e.target.value)} value={todo}  type="text"  className='w-[50vw] h-[6vh] rounded-2xl pl-3 text-xl font-semibold'/>
                    <button className='w-[7vw] h-[6vh] bg-red-900 text-white rounded-2xl text-2xl font-bold ' type='submit'>Add</button>
                </div>    
            </form>
        </>
    )
}

export default Form