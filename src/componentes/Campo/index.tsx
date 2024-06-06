import './Campo.css';

interface CampoProps{
    aoAlterado: (valor: string) => void,
    obrigatorio?: boolean,
    label: string,
    placeholder: string,
    type?: string,
    valor: string,
}

const Campo = ({aoAlterado, obrigatorio, label, placeholder, type, valor}:CampoProps) =>{

    const aoDigitar = (evento:React.ChangeEvent<HTMLInputElement>) =>{
        aoAlterado(evento.target.value);
    };

    return(
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input value = {valor} onChange={aoDigitar} required = {obrigatorio}  placeholder = {placeholder}
            type={type}/>
        </div>
    )
}

export default Campo;