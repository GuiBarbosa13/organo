import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { IColaborador } from './shared/interface/IColaborador';
import { ITime } from './shared/interface/ITime';

function App() {

  const [times, setTimes] = useState<ITime[]>([
    {
      id: uuidv4(),
      nome: 'Front-end',
      cor: '#57C278',
      type: "text",
    }, {
      id: uuidv4(),
      nome: 'DevOps',
      cor: '#82CFFA',
      type: "text",
    }, {
      id: uuidv4(), //cria um id único para cada time
      nome: 'Back-end',
      cor: '#A6D157',
      type: "text",
    }, {
      id: uuidv4(),
      nome: 'Dados',
      cor: '#E06B69',
      type: "text",
    }
  ]);

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([
    {
      id: uuidv4(),
      nome: "Guilherme Barbosa",
      cargo: "Desenvolvedor",
      imagem: "http://github.com/GuiBarbosa13.png",
      time: times[0].nome,
      favorito: true,
      data: "Wed Jan 05 2022 16:31:34 GMT-0300"
    }
  ])

  const aoColaboradorAdicionado = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }



  let [estadoForms, setEstadoForms] = useState(false);

  function deletarColaborador(id:string){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudaCor(cor:string, id:string){
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor
      } 
      return time;
    }));
  }

  function cadastrarTime(novoTime: ITime){
      let listaTimes = times.map(time => time.nome);

      if (!listaTimes.includes(novoTime.nome)){
        setTimes([...times,{...novoTime, id: uuidv4()}])
      }      
  }

  function resolverFav(id: string){
    setColaboradores(colaboradores.map(colaborador =>{
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))   
  }

  function fecharForm(){
    setEstadoForms(!estadoForms)
}

  return (
    <div className="App">
      <Banner enderecoImagem="/banner.png" textoAlt='Banner principal da página da organo'/>

      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoColaboradorAdicionado(colaborador)}
        cadastrarTime = {cadastrarTime}
        estadoForms = {estadoForms}
        fecharForm = {fecharForm}
      />

      {times.map((time) => 
        <Time 
          key={time.nome} 
          time={time.nome}
          id={time.id}
          mudarCor = {mudaCor} 
          cor={time.cor} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar = {deletarColaborador}
          aoFavoritar = {resolverFav}
        />
      )}

      <Rodape/>

    </div>
  );
}

export default App;
