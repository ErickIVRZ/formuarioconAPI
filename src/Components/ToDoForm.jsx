import React, { useEffect, useState } from 'react';


const ToDoForm = ({addTarea,tareaSelected,updateTarea,deselectTarea}) => {

  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [isCompleted,setIsCompleted]=useState(false)

  


  useEffect(()=>{
    if(tareaSelected !== null){
      setTitle(tareaSelected.title)
      setDescription(tareaSelected.description)
      setIsCompleted(tareaSelected.isCompleted)
    }
  },[tareaSelected])



  


  const submit=(e)=>{
    e.preventDefault();
  
    const newTarea={
      
      title:title,
      description:description,
      isCompleted:isCompleted
    }
    console.log(newTarea);
    if(tareaSelected){
      updateTarea(newTarea)
    }else{
      addTarea(newTarea)
    }
    
  }

  const clear=()=>{
    setTitle("")
    setDescription("")
    setIsCompleted(false)
    deselectTarea()
  }
  
  



  return (
    <form onSubmit={submit}>

    <div>
    <label htmlFor="title">Text</label>
    <input type="text"
     id="title"
     value={title}
     onChange={e=>setTitle(e.target.value)}
     /> 
    </div>

    <div>
    <label htmlFor="description">Description</label>
      <textarea type='text'
      id="description"
      value={description}
      onChange={e=>setDescription(e.target.value)}
      />
    </div>

    <div className='input-container'>
    <label htmlFor="isCompleted">is Completed</label>
    <input type="checkbox"
     id="isCompleted"
     checked={isCompleted}
     onChange={(e) => setIsCompleted(e.target.checked)}
      />

    </div>


    <button>
      {tareaSelected?"Actualizar":"Crear"}Tarea
      </button>

      <button onClick={clear}>
        Clear
        </button>

    



    </form>

    
   
  );
};

export default ToDoForm;