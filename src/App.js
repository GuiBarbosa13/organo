import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './componentes/Banner/';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const [times, setTimes] = useState([
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

  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      nome: "Guilherme Barbosa",
      cargo: "Desenvolvedor",
      imagem: "http://github.com/GuiBarbosa13.png",
      time: times[0].nome,
      favorito: true,
    }
  ])

  const aoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  let [estadoForms, setEstadoForms] = useState(false);

  function deletarColaborador(id){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudaCor(cor, id){
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor
      } 
      return time;
    }));
  }

  function cadastrarTime(novoTime){
      let listaTimes = times.map(time => time.nome);

      if (!listaTimes.includes(novoTime.nome)){
        setTimes([...times,{...novoTime, id: uuidv4()}])
      }      
  }

  function resolverFav(id){
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
      <Banner />

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
