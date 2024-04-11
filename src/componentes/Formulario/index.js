import './formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {

    const times = props.times;

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    
    const [time, setTime] = useState('');

    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    

    const enviarForm = (evento) => {
        evento.preventDefault();
        (props.aoColaboradorCadastrado({
            id: uuidv4(),
            nome: nome,
            cargo: cargo,
            time: time,
            imagem: imagem,
        }));
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
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

            <form className='form-time'
                onSubmit={(evento) =>{
                evento.preventDefault();
                props.cadastrarTime({nome: nomeTime, cor: corTime});
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <CampoTexto 
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite o nome do time"
                    valor = {nomeTime}
                    aoAlterado = {valor => setNomeTime(valor)}
                />

                <CampoTexto 
                    obrigatorio
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor = {corTime}
                    aoAlterado = {valor => setCorTime(valor)}
                />

                <Botao>Criar um novo time</Botao> {/*É POSSÍVEL PASSAR PARA A TELA FINAL ITENS ANINHADOS USANDO O PROPS.CHILDREN*/}
            </form>

        </section>
    )
}

export default Formulario