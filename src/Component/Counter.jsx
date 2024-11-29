import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrement, incrAmnt, increment, reset } from '../Redux/counterSlice';

function Counter() {

    const dispatch=useDispatch()
    const {count} = useSelector(state=>state.counterReducer)

    const [amnt,setAmnt]=useState(0)

    const handleIncAmnt=()=>{
        if(amnt)
        {
            dispatch(incrAmnt(Number(amnt)))
        }
        else
        {
            alert('ENTER AMOUNT')
        }
    }

  return (
    <>
    <div  style={{minHeight:'100vh',backgroundColor:'black'}} className='text-center'>

            <h1 className='text-center text-white my-5'>Counter App</h1>
            <div className='w-100 d-flex align-items-center justify-content-center'>
                <div className="border border-3 border-light rounded p-3 mt-5"  style={{minHeight:'400px',width:'800px'}}>

                <h1 className='my-5 text-white'>{count}</h1>

                    <div className='d-flex align-items-center justify-content-around mt-5'>
                        <button onClick={()=>dispatch(increment())} className='btn btn-warning'>Increment</button>
                        <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
                        <button onClick={()=>dispatch(decrement())} className='btn btn-success'>Decrement</button>
                    </div>
                        <div className=' d-flex align-items-center justify-content-around' >
                            <div className=' d-flex align-items-center justify-content-around mt-5 w-75'>
                                <input onChange={(e)=>setAmnt(e.target.value)} className='form-control' type="text" placeholder='Enter Increment Amount' />
                                <button onClick={handleIncAmnt} className='btn btn-primary ms-4'>SUBMIT</button>
                            </div>
                        </div>
                    

                </div>

            </div>
            
    </div>
    
    
    </>
  )
}

export default Counter