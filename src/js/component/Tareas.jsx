import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export const ListaTareas = () => {
    const [inputValue, setInputValue] = useState('')
    const [tareasGuardadas, setTareasGuardadas] = useState([]);

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
          const nuevaTarea = {
            id: Date.now(), 
            tarea: inputValue,
          };
          setTareasGuardadas([...tareasGuardadas, nuevaTarea]);
          setInputValue('');
        }
        };

        
        const handleEliminarTarea = (id) => {
            const nuevasTareas = tareasGuardadas.filter((tarea) => tarea.id !== id);
            setTareasGuardadas(nuevasTareas);
          };


    return (
    <div className="container">
            <div className="header">
                <h1 className="text-muted" >Tareas</h1>
            </div>
            <div className="input-group input-group-lg">
                  <input type="text" onKeyDown={handleKeyDown} onChange={e=>setInputValue(e.target.value)} value={inputValue} className="form-control" placeholder="Añade una tarea"  aria-describedby="inputGroup-sizing-lg"/>
            </div>
            <ul className="list-group listaTarea">
                {tareasGuardadas.map((tarea) => (
                    <li className="list-group-item text-muted" key={tarea.id}>
                         {tarea.tarea}
                         <button className="eliminarTarea" onClick={() => handleEliminarTarea(tarea.id)}>x</button>
                    </li>
                   
                ))}
                <li className= "list-group text-muted contadorDeTareas">
                    <div className="contadorDeTareasContent">
                    {tareasGuardadas.length} tareas a realizar
                    </div>
                </li>
                    
          
            </ul>





    </div>

    );
};