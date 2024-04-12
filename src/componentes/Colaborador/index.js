import { TiUserDelete } from "react-icons/ti";
import { MdOutlineFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import './Colaborador.css';

const Colaborador = (props) => {

    function fav (){
        props.aoFavoritar(props.id);
    }

    return(
        <div className='colaborador'>
            <TiUserDelete size={28} cursor={'pointer'} className='deletar' onClick={() => props.aoDeletar(props.id)}/>
            <div className='cabecalho' style={{backgroundColor:props.corDeFundo}}>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>

                <div className="favoritar">
                    {props.favorito
                    ? <MdOutlineFavorite size={25} onClick={fav} cursor={'pointer'}  color="red"/>  
                    : <MdOutlineFavoriteBorder size={25} onClick={fav} cursor={'pointer'} />}
                </div>
            </div>
        </div>
    )
};

export default Colaborador;