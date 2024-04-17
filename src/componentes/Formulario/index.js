import './formulario.css';
import Campo from '../Campo';
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
            favorito: false
        }));
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    };

    let display = props.estadoForms ? "show": "hide"

    return (

        

        <>

            <section className={`formulario-${display}`}>
                <form onSubmit={enviarForm}>
                    <h2>Preencha os dados para criar o card do colaborador.</h2>
                    <Campo
                        obrigatorio={true}
                        label="Nome"
                        placeholder="Digite seu nome"
                        valor={nome}
                        type="text"
                        aoAlterado={valor => setNome(valor)}
                    />

                    <Campo
                        obrigatorio={true}
                        label="Cargo"
                        placeholder="Digite seu cargo"
                        valor={cargo}
                        type="text"
                        aoAlterado={valor => setCargo(valor)}
                    />

                    <Campo
                        label="Imagem"
                        placeholder="Informe o endereço da imagem"
                        valor={imagem}
                        type="text"
                        aoAlterado={valor => setImagem(valor)}
                    />

                    <ListaSuspensa
                        label="Time"
                        itens={times}
                        valor={time}
                        aoAlterado={valor => setTime(valor)}
                    />

                    <Botao>Criar card</Botao> {/*É POSSÍVEL PASSAR PARA A TELA FINAL ITENS ANINHADOS USANDO O PROPS.CHILDREN*/}
                </form>

                <form className='form-time'
                    onSubmit={(evento) => {
                        evento.preventDefault();
                        props.cadastrarTime({ id: uuidv4(), nome: nomeTime, cor: corTime, type: "text" });
                        setNomeTime('')
                        setCorTime('#32a852')
                    }}>
                    <h2>Preencha os dados para criar um novo time.</h2>
                    <Campo
                        obrigatorio
                        label="Nome"
                        placeholder="Digite o nome do time"
                        valor={nomeTime}
                        aoAlterado={valor => setNomeTime(valor)}
                    />

                    <Campo
                        obrigatorio
                        label="Cor"
                        placeholder="Digite a cor do time"
                        valor={corTime}
                        aoAlterado={valor => setCorTime(valor)}
                        type="color"
                    />

                    <Botao>Criar um novo time</Botao> {/*É POSSÍVEL PASSAR PARA A TELA FINAL ITENS ANINHADOS USANDO O PROPS.CHILDREN*/}
                </form>

            </section>

            <div className='controles'>
                
                <div><button onClick={props.fecharForm}><img src='/button.svg' alt='Botão para expandir formulários' /></button></div>

                <h4>Minha organização:</h4>           

            </div>
        </>
    )
}

export default Formulario