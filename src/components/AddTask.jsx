import React, { useState } from 'react';

import Button from "./Button";

import "./AddTask.css";
import "./Button.css";

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState("");

    const handleInputData = (e) => {
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () =>{
        handleTaskAddition(inputData);
        setInputData("");
    }

    return ( 
        <div className='add-task-container'>
            <input
                onChange={handleInputData}
                value={inputData} 
                className='add-task-input' 
                type="text" 
            />
            <div className="add-task-button">
                <Button onClick={handleAddTaskClick}>Teste</Button>
            </div>
        </div>
     );
}
 
export default AddTask;