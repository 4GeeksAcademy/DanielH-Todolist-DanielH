import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export const ListaTareas = () => {
    const [inputValue, setInputValue] = useState('')
    const [tareasGuardadas, setTareasGuardadas] = useState([]);

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
          setTareasGuardadas([...tareasGuardadas, inputValue]);
          setInputValue('');
        }
      };


    return (
    <div className="container">
            <div className="header">
                <h1 className="text-muted" >Tareas</h1>
            </div>
            <div className="input-group input-group-lg">
                  <input type="text" onKeyDown={handleKeyDown} onChange={e=>setInputValue(e.target.value)} value={inputValue} className="form-control" placeholder="Añade una tarea"  aria-describedby="inputGroup-sizing-lg"/>
            </div>
            <ul className="list-group">
                {tareasGuardadas.map((tarea, index) => (
                    <li className="list-group-item text-muted" key={index}>
                         {tarea}
                    </li>
                ))}
            </ul>





    </div>

    );
};