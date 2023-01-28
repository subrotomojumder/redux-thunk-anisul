import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../services/actions/todosAction';

const Todos = () => {
    const {isLoading, todos, error} = useSelector((state)=> state.todosR);
    // console.log(isLoading, todos, error)
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getAllTodos())
    }, [])
    return (
        <div>
            <h2 className='text-2xl mt-4'>Todos App</h2>
            {isLoading && <p className='mt-20'>Loading.....</p>}
            {error && <p className='mt-20'>{error}</p>}
            {todos && todos.map(todo => {
                return <div key={todo.id} className='border m-10 p-10'>
                    <h4 className='text-xl'>{todo.title}</h4>
                    <p>{todo.id}</p>
                </div>
            })}
        </div>
    );
};

export default Todos;