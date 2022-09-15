import { useState,useEffect } from 'react'
import './App.css'
import ProductsForm from './Components/ProductsForm'
import ToDoForm from './Components/ToDoForm'
import ToDOList from './Components/ToDOList'
import axios from 'axios';



function App() {

  const initialTarea=[
    {
    id:1,
    title:"hacer la tarea",
    description:"hacer la app de react",
    isCompleted:true
    },
    {
      id:2,
    title:"hacer mis deberes",
    description:"hacer los deberes de la casa",
    isCompleted:false

    }

  ]

  const [tareas,setTareas]=useState([])
  const [tareaSelected,setTareaSelected]=useState(null)
  
//*Es importante que estos endpoints terminen con (/) si no va a marcar un error
useEffect(()=>{
  axios.get(`https://todo-app-academlo.herokuapp.com/todos/`)
  .then(res=>setTareas(res.data))
},[])

console.log(tareas);



const getTareas = () => {
  axios.get(`https://todo-app-academlo.herokuapp.com/todos/`)
    .then((res) => setTareas(res.data));
};





  //?A continuacion creare las funciones que le daran vida a mi CRUD para despues pasarlas por props a mis componentes hijos. Esto es asi debido a que no podemos enviar props entre componentes hijos, si no que debemos crearlas en nuestro componente padre  de ahi enviarlas a los hijos.


//*Funcion para agregar tareas
//*EL metodo post lleva siempre body: (es un objeto,array etc que nosotros queremos actualizar)
//*Como en el metodo post es muy probable que alla errores por eso debemos usar el catch
//*Con la sintaxis de abajo

  const addTarea=(newTarea)=>{
    axios.post(`https://todo-app-academlo.herokuapp.com/todos/`,newTarea)
    .then(()=>getTareas())
    .catch(err=>console.log(err.response))
  }


  //*Funcion para borrar una tarea
  const deleteTarea = (id) => {

    axios.delete(`https://todo-app-academlo.herokuapp.com/todos/${id}/`)
    .then(()=>getTareas())



    // *Foma de hacer delete de forma local
    // const filteredTarea = tareas.filter((tarea) => tarea.id !== id);
    // setTareas(filteredTarea);
  };




  //*Funcion para crear el update en donde estoy pasando por argumento el estado con mis tareas y ademas estoy creando un nuevo estado con valor null  para luego setearlo con el parametro tarea que es el argumento.

  const selectTarea=(tarea)=>{
   setTareaSelected(tarea)
  }


//*Funcion para actualizar una tarea 
  const updateTarea=(newTarea)=>{

    axios.put(`https://todo-app-academlo.herokuapp.com/todos/${tareaSelected.id}/`,newTarea)
    .then(()=> getTareas())
    






    //*logica para hacer el update de forma local
    // const index=tareas.findIndex(tarea=>tarea.id === newTarea.id)
    // tareas[index]=newTarea
    // setTareas([...tareas])

    
  }

  const deselectTarea = () => setTareaSelected(null);

  

  console.log(tareaSelected);

  return (
    <div className="App">
      {/* <h1>Products CRUD</h1>
      <ProductsForm/>  */}
       <ToDoForm addTarea={addTarea} tareaSelected={tareaSelected} updateTarea={updateTarea} deselectTarea={deselectTarea}/> 
       <ToDOList tareas={tareas} deleteTarea={deleteTarea} selectTarea={selectTarea}/>
       
    </div>
  )
}

export default App
