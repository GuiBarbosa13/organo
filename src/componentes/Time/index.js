import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) =>{
    return(
        (props.colaboradores.length > 0) && 

        <section className='time'style={{backgroundColor : hexToRgba(props.cor, '0.5')}}>

            <input type='color' onChange={evento => props.mudarCor(evento.target.value, props.time)} className='input-color' value={props.cor}/>

            <h3 style={{borderColor: props.cor}}>{props.time}</h3>

            <div className='colaboradores'>
                {props.colaboradores.map(colab => {
                    return <Colaborador corDeFundo = {props.cor} key = {colab.nome + colab.time + colab.imagem} nome = {colab.nome} cargo = {colab.cargo} imagem = {colab.imagem} aoDeletar = {props.aoDeletar}/>
                    })
                }

            </div>

        </section>
    )

}

export default Time;