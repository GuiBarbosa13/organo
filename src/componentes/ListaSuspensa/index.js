import './listaSuspensa.css';

const ListaSuspensa = (props) => {
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select 
                onChange= {evento => props.aoAlterado(evento.target.value)} 
                required = {props.required} 
                value={props.valor}
            >
                {props.itens.map((item) => <option key={item}>{item}</option>)} 
                {/* Para cada item em itens, imprime a tag option com esse item dentro do select (drop-list). */}
            </select>
        </div>
    )
}

export default ListaSuspensa