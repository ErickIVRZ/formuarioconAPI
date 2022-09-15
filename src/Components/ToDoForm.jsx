import React, { useEffect, useState } from 'react';
import {useForm} from "react-hook-form"


const ToDoForm = ({addTarea,tareaSelected,updateTarea,deselectTarea}) => {

  
  const {register, handleSubmit,reset}=useForm()

  


  useEffect(()=>{
    if(tareaSelected){
      reset(tareaSelected)
    }
  },[tareaSelected])



  


  const submit=(data)=>{
    console.log(data);
    if(tareaSelected){
      updateTarea(data)
    }else{
      addTarea(data)
    }
  }

  const clear=()=>{
    reset({
      title:"",
      description:"",
      isCompleted:false
    })
    deselectTarea()
  }
  
  



  return (
    <form onSubmit={handleSubmit(submit)}>

    <div>
    <label htmlFor="title">Text</label>
    <input type="text"
     id="title"
     {...register("title")}
     /> 
    </div>

    <div>
    <label htmlFor="description">Description</label>
      <textarea type='text'
      id="description"
      {...register("description")}
      />
    </div>

    <div className='input-container'>
    <label htmlFor="isCompleted">is Completed</label>
    <input type="checkbox"
     id="isCompleted"
     {...register("isCompleted")}
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