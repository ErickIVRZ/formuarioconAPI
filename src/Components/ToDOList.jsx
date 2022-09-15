import React from 'react';

//*Recibo por props mis tareas iniciales con tareas y las funciones de deleteTarea y selectTarea

const ToDOList = ({tareas,deleteTarea,selectTarea}) => {
  
    return (

      <div>
        <h1>Este es mi ToDO List</h1>
        <ul>
          {tareas.map((tarea) => (
            <li key={tarea.id}>
              <h3>{tarea.title}</h3>
              <div>
                <b>Description </b>
                {tarea.description}
              </div>             
              <div>
                <b>is Completed: </b>
                {tarea.isCompleted?.toString()}
              </div>
              <button onClick={()=>deleteTarea(tarea.id)}>Delete Tarea</button>
              <button onClick={()=>selectTarea(tarea)}>
                Actualizar
              </button>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default ToDOList;