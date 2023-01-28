import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterAction';

const Counter = () => {
    const count = useSelector((state)=> state.counterR.count);
    const dispatch = useDispatch();

    const handleIncrement = ()=> {
        dispatch(incrementCounter())
    }
    const handleDecrement = ()=> {
        dispatch(decrementCounter())
    }
    const handleReset= ()=> {
        dispatch(resetCounter())
    }

    return (
        <div className=''>
            <div className="card w-96 mx-auto mt-4 bg-slate-300 text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">{count}</h2>
                    <p>We are using cookies for no reason.</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleIncrement} className="btn btn-primary">Increase</button>
                        <button onClick={handleDecrement} className="btn btn-secondary">Decrease</button>
                        <button onClick={handleReset} className="btn btn-warning">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;