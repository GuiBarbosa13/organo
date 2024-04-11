import { useState } from 'react';
import './Campo.css';

const Campo = (props) =>{

    const aoDigitar = (evento) =>{
        props.aoAlterado(evento.target.value);
    };

    return(
        <div className={`campo campo-${props.type}`}>
            <label>{props.label}</label>
            <input value = {props.valor} onChange={aoDigitar} required = {props.obrigatorio}  placeholder = {props.placeholder}
            type={props.type}/>
        </div>
    )
}

export default Campo;