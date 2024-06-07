import './formulario.css';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IColaborador } from '../../shared/interface/IColaborador';
import { ITime } from '../../shared/interface/ITime';

interface FormularioProps {
    times: string[],
    aoColaboradorCadastrado: (colaborador: IColaborador) => void,
    estadoForms: boolean,
    cadastrarTime: (time: ITime) => void,
    fecharForm: () => void,
}

const Formulario = ({ times, aoColaboradorCadastrado, estadoForms, cadastrarTime, fecharForm }: FormularioProps) => {

    // const times = times;

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');

    const [time, setTime] = useState('');

    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('#000000');

    const [data, setData] = useState('');

    const enviarForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        (aoColaboradorCadastrado({
            id: uuidv4(),
            nome: nome,
            cargo: cargo,
            time: time,
            imagem: imagem,
            favorito: false,
            data: data,
        }));
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
        setData('');
    };

    let display = estadoForms ? "show" : "hide"

    return (
        <>
            <section className={`formulario-${display}`}>
                <form onSubmit={enviarForm}>
                    <h2>Preencha os dados para criar o card do colaborador.</h2>
                    <Campo
                        required={true}
                        label="Nome"
                        placeholder="Digite seu nome"
                        valor={nome}
                        type="text"
                        aoAlterado={valor => setNome(valor)}
                    />

                    <Campo
                        required={true}
                        label="Cargo"
                        placeholder="Digite seu cargo"
                        valor={cargo}
                        type="text"
                        aoAlterado={valor => setCargo(valor)}
                    />

                    <Campo
                        required
                        label="Imagem"
                        placeholder="Informe o endereço da imagem"
                        valor={imagem}
                        type="text"
                        aoAlterado={valor => setImagem(valor)}
                    />

                    <Campo
                        required
                        label="Data de entrada no time"
                        placeholder=""
                        valor={data}
                        type="date"
                        aoAlterado={valor => setData(valor)}
                    />

                    <ListaSuspensa
                        label="Time"
                        required={true}
                        itens={times}
                        valor={time}
                        aoAlterado={valor => setTime(valor)}
                    />

                    <Botao><>Criar card</></Botao> {/*É POSSÍVEL PASSAR PARA A TELA FINAL ITENS ANINHADOS USANDO O PROPS.CHILDREN*/}
                </form>

                <form className='form-time'
                    onSubmit={(evento) => {
                        evento.preventDefault();
                        cadastrarTime({ id: uuidv4(), nome: nomeTime, cor: corTime, type: "text" });
                        setNomeTime('')
                        setCorTime('#32a852')
                    }}>
                    <h2>Preencha os dados para criar um novo time.</h2>
                    <Campo
                        required={true}
                        label="Nome"
                        placeholder="Digite o nome do time"
                        valor={nomeTime}
                        aoAlterado={valor => setNomeTime(valor)}
                    />

                    <Campo
                        required
                        label="Cor"
                        placeholder="Escolha a cor do time"
                        valor={corTime}
                        aoAlterado={valor => setCorTime(valor)}
                        type="color"
                    />

                    <Botao><>Criar um novo time</></Botao> {/*É POSSÍVEL PASSAR PARA A TELA FINAL ITENS ANINHADOS USANDO O PROPS.CHILDREN*/}
                </form>

            </section>

            <div className='controles'>

                <div><button onClick={fecharForm}><img src='/button.svg' alt='Botão para expandir formulários' /></button></div>

                <h4>Minha organização:</h4>

            </div>
        </>
    )
}

export default Formulario