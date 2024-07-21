import React, { useState } from 'react';
import "./Todo.css";
import TodoCards from './TodoCards';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Update from "./Update";


const Todo = () => {
    const [Inputs, setInputs] = useState({ title: "", body: "" });
    const [Array, setArray] = useState([]);
    const show = () => {
        document.getElementById("textarea").style.display = "block";
    };

    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value });
    };

    const submit = () => {
        if (Inputs.title === "" || Inputs.body === "") {
            toast.error("Ttitle or Body is Empty!");
        } else {
            setArray([...Array, Inputs]);
            setInputs({ title: "", body: "" });
            toast.success("New Task Added!");
            toast.error("SignUp to add task!");

        }

    }
    const del = (id) => {
        Array.splice(id, "1");
        setArray([...Array]);
    }
    const dis = (value) => {
        document.getElementById("todo-update").style.display = value;
    }
    return (
        <>
            <div className="todo">
                <ToastContainer />
                <div className="todo-main container d-flex justify-content-center align-items-center">
                    <div className='d-flex flex-column todo-inputs-div w-50 p-1 my-5'>
                        <input
                            type="text"
                            placeholder="TITLE"
                            className='my-2 p-2 todo-inputs'
                            onClick={show}
                            name="title"
                            value={Inputs.title}
                            onChange={change}
                        />
                        <textarea
                            id='textarea'
                            type="text"
                            placeholder="BODY"
                            name="body"
                            className='p-2 todo-inputs'
                            value={Inputs.body}
                            onChange={change}
                        />
                        <button className='btn' onClick={submit}>Add</button>
                    </div>
                </div>
                <div className='todo-body'>
                    <div className="container-fluid">
                        <div className='row'>

                            {Array && Array.map((item, index) => (
                                <div key={index} className='col-lg-3 col-8 mx-5 my-2'>
                                    <TodoCards
                                        title={item.title}
                                        body={item.body}
                                        id={index}
                                        delid={del}
                                        display={dis} />
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </div >
            <div className='todo-update' id="todo-update">
                <div className="container" update>
                    <Update display={dis} />
                </div>
            </div>
        </>
    )
}


export default Todo;