import { TiUserDelete } from "react-icons/ti";
import { MdOutlineFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import './Colaborador.css';

interface ColaboradorProps{
    aoFavoritar: (id: string) => void,
    aoDeletar: (id: string) => void,
    corDeFundo: string,
    imagem: string,
    nome: string,
    cargo: string,
    favorito: boolean,
    id: string,
    time: string,
    data: string,
}

const Colaborador = ({ time,id,aoDeletar,aoFavoritar,cargo,corDeFundo,favorito,imagem,nome, data }:ColaboradorProps) => {

    function fav (){
        aoFavoritar(id);
    }

    return(
        <div className='colaborador'>
            <TiUserDelete size={28} cursor={'pointer'} className='deletar' onClick={() => aoDeletar(id)}/>
            <div className='cabecalho' style={{backgroundColor:corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <h5>{new Date(data).toLocaleDateString()}</h5>

                <div className="favoritar">
                    {favorito
                    ? <MdOutlineFavorite size={25} onClick={fav} cursor={'pointer'}  color="red"/>  
                    : <MdOutlineFavoriteBorder size={25} onClick={fav} cursor={'pointer'} />}
                </div>
            </div>
        </div>
    )
};

export default Colaborador;