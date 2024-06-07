import hexToRgba from 'hex-to-rgba';

import './Time.css';
import { IColaborador } from '../../shared/interface/IColaborador';
import Colaborador from '../Colaborador';

interface TimeProps{
    colaboradores: IColaborador[],
    cor: string,
    time: string,
    mudarCor: (evento:string, id:string) => void,
    id: string,
    aoDeletar: (id:string) => void,
    aoFavoritar: (id:string) => void,
}

const Time = ({ aoFavoritar,aoDeletar,mudarCor, colaboradores,cor,time, id }:TimeProps) =>{
    return(
        (colaboradores.length > 0) ?

        <section className='time'style={{backgroundColor : hexToRgba(cor, '0.5')}}>

            <input type='color' onChange={evento => mudarCor(evento.target.value, id)} className='input-color' value={cor}/>

            <h3 style={{borderColor: cor}}>{time}</h3>

            <div className='colaboradores'>
                {colaboradores.map(colab => {
                    return (
                    <Colaborador 
                        corDeFundo = {cor} 
                        key = {colab.nome + colab.time + colab.imagem} 
                        nome = {colab.nome} 
                        cargo = {colab.cargo} 
                        imagem = {colab.imagem} 
                        aoDeletar = {aoDeletar} 
                        id = {colab.id}
                        time = {time}
                        favorito = {colab.favorito}
                        aoFavoritar = {aoFavoritar}
                        data= {colab.data}
                    />)
                    })
                }

            </div>

        </section>
        : <></>
    )

}

export default Time;