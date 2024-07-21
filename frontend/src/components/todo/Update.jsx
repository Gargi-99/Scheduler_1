import React from 'react'

const Update = ({ display, update }) => {
    return (
        <div className='p-5 d-flex justify-content-center align-items-start flex-column update'>
            <h3>Update Your Task</h3>
            <input className='todo-inputs my-4 w-100 p-3' type="text" />
            <textarea className='todo-inputs w-100 p-3' name="" id=""></textarea>
            <div className='d-flex justify-content-center w-100'>
                <button className='btn my-3 mr-3'>UPDATE</button>
                <button className='btn my-3' onClick={() => { display("none") }}>Cancel</button>
            </div>
        </div>
    )
}

export default Update;