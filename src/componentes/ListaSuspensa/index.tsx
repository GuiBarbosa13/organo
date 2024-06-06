import './listaSuspensa.css';

interface ListaSuspensaProps{
    label: string,
    aoAlterado: (evento:string) => void,
    required: boolean,
    valor: string,
    itens: string[],


}

const ListaSuspensa = ({ label,aoAlterado,required,valor,itens }:ListaSuspensaProps) => {
    return(
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select 
                onChange= {evento => aoAlterado(evento.target.value)} 
                required = {required} 
                value={valor}
            >
                <option value={''}></option>
                {itens.map((item) => <option key={item}>{item}</option>)} 
                {/* Para cada item em itens, imprime a tag option com esse item dentro do select (drop-list). */}
            </select>
        </div>
    )
}

export default ListaSuspensa