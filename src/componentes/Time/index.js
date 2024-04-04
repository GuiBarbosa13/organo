import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) =>{

    return(
        <section className='time'style={{backgroundColor : props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.time}</h3>
            {props.colaboradores.map(colab => <Colaborador nome = {colab.nome} cargo = {colab.cargo} imagem = {colab.imagem}/>)}
        </section>
    )

}

export default Time;