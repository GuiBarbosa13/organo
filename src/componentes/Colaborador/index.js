import { TiUserDelete } from "react-icons/ti";
import './Colaborador.css';

const Colaborador = (props) => {
    return(
        <div className='colaborador'>
            <TiUserDelete size={28} cursor={'pointer'} className='deletar' onClick={() => props.aoDeletar(props.id)}/>
            <div className='cabecalho' style={{backgroundColor:props.corDeFundo}}>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
};

export default Colaborador;