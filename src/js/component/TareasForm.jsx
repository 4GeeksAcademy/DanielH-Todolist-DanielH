import React from "react";
import { useState } from "react";

// export const TareasForm = () => {

    // const  [inputTarea,setTarea]= useState('');

    // console.log(inputTarea);


    

    // const tareasSinCumplir = () => {
    //     setTareas([...tareas, inputTarea]);
    //     setTarea('');
    //   };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     tareasSinCumplir();
    //   };

    export const TareasForm = () => {
        const [inputTarea, setTarea] = useState('');
        const [inputTareas, setTareas] = useState([]);

      console.log(inputTareas)

        const handleSubmit = (event) => {
          event.preventDefault();
          if (inputTarea === "") {
            return alert ("Las tareas no puedes estar vacias!!!")
          }
          tareasSinCumplir();
        };
      
        const tareasSinCumplir = () => {
          setTareas([...inputTareas, inputTarea]);
          setTarea('');
        };

        const handleEliminacion = (tareaEliminar) => {
            const nuevasTareas = inputTareas.filter((tarea) => tarea !== tareaEliminar
            );
            setTareas(nuevasTareas);
          };
      
    return (

        <form onSubmit={handleSubmit} >
            <ul className="ulForm">
                <li>
                    <label for="name">Tarea:</label>
                    <input onChange={e => setTarea(e.target.value)} value={inputTarea} type="text" id="name" name="user_name" placeholder="Añade una tarea aqui"/>
                </li>

                {inputTareas.map((tarea, index) => (
                     <li key={tarea}>{tarea}</li>
                ))}

               <li className="button">
                    <button type="submit" className="btn btn-primary">Envíe su tarea</button>
                <div className="dropdown">
                        <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                             Tarea a borrar
                        </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                         {inputTareas.map((tarea, index) => (
                             <li key={tarea} onClick={() => handleEliminacion(tarea)} className='tarea-item'>{tarea}</li>
                           ))}
                           <hr></hr>
                           <li>{inputTareas.length === 0 ? ("No hay tareas por realizar") :(inputTareas.length +''+ ' tareas a realizar')                     
                    }  </li>
                    </ul>
                </div>
                </li>
            </ul>
    </form>

    )



}