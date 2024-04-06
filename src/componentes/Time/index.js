import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) =>{

    return(
        (props.colaboradores.length > 0) && <section className='time'style={{backgroundColor : props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.time}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colab => <Colaborador corDeFundo = {props.corPrimaria} key = {colab.nome + colab.time + colab.imagem} nome = {colab.nome} cargo = {colab.cargo} imagem = {colab.imagem}/>)}
            </div>
        </section>
    )

}

export default Time;