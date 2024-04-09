import { useState } from 'react';
import Banner from './componentes/Banner/';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Front-end',
      cor: '#57C278',
    }, {
      nome: 'DevOps',
      cor: '#82CFFA',
    }, {
      nome: 'Back-end',
      cor: '#A6D157',
    }, {
      nome: 'Dados',
      cor: '#E06B69',
    }
  ]);

  const [colaboradores, setColaboradores] = useState([])

  const aoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(){
    console.log('colaborador deletado')
  }

  function mudaCor(cor, nome){
    setTimes(times.map(time => {
      if(time.nome === nome){
        time.cor = cor
      } 
      return time;
    }));
  }

  return (
    <div className="App">
      <Banner />

      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoColaboradorAdicionado(colaborador)}
      />

      {times.map((time) => 
        <Time 
          key={time.nome} 
          time={time.nome}
          mudarCor = {mudaCor} 
          cor={time.cor} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar = {deletarColaborador}
        />
      )}

      <Rodape/>

    </div>
  );
}

export default App;
