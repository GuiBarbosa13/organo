import './formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const times = props.times;

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');

    const [time, setTime] = useState(times[0]);

    

    const enviarForm = (evento) => {
        evento.preventDefault();
        console.log(props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            time: time,
            imagem: imagem,
        }));
    };

    return (
        
        <section className='formulario'>
            <form onSubmit={enviarForm}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto 
                    obrigatorio ={true}
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}
                />

                <CampoTexto 
                    obrigatorio ={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor = {cargo}
                    aoAlterado = {valor => setCargo(valor)}
                />

                <CampoTexto 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valor = {imagem}
                    aoAlterado = {valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    label ="Time" 
                    itens ={times}
                    valor = {time}
                    aoAlterado = {valor => setTime(valor)}
                />

                <Botao>Criar card</Botao> {/*É POSSÍVEL PASSAR PARA A TELA FINAL ITENS ANINHADOS USANDO O PROPS.CHILDREN*/}
            </form>

        </section>
    )
}

export default Formulario