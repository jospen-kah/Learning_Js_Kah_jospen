import React, {useState} from 'react'

function TodoList(){
     
    const [tasks, setTasks] = useState(['Sleep', 'Walk with Dog', 'Go for sport']);
    const [newTask, setNewTask] = useState()

    function handleInputEvent(event){
        setNewTask(event.target.value);

    }
    
    function addTask(){
        if(newTask.trim() !==""){

        
        setTasks(t => [...t, newTask]);
        setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTask = tasks.filter((_, i ) => i !== index);
        setTasks(updatedTask)
    }
    
    function moveEventUp(index){
        const updatedTasks = [...tasks];
        if(index > 0){
            [updatedTasks[index], updatedTasks[index-1]] =
            [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveEventDown(index){
        const updatedTasks = [...tasks];
        if(index < tasks.length-1){
            [updatedTasks[index], updatedTasks[index+1]] =
            [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    return(
    <div  className='to-do-list'>
        <h1>To Do List</h1>
        <div className="input-text">
            <input type="text" placeholder='Enter a task...' 
            value={newTask} onChange={handleInputEvent}/>
            <button className='add-button' onClick={addTask}>
                Add a Task
            </button>
        </div>
        <ol>
           {tasks.map((task, index) =>
            <li key={index}>
                <span className="text">{task}</span>
               <button className='delete-button' onClick={() => {deleteTask(index)}}>
                Detete
               </button>
               <button className='move-button' onClick={() => {moveEventUp(index)}}>
                    👆
               </button>
               <button className='move-button' onClick={() => {moveEventDown(index)}}>
                    👇
               </button>
            </li>
        )}
        </ol>
    </div>
    );
}

export default TodoList;