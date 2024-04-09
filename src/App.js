import { useState } from 'react';
import Banner from './componentes/Banner/';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Front-end',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    }, {
      nome: 'DevOps',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    }, {
      nome: 'Back-end',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    }, {
      nome: 'Dados',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    }
  ];

  const [colaboradores, setColaboradores] = useState([])

  const aoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(){
    console.log('colaborador deletado')
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
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar = {deletarColaborador}
        />
      )}

      <Rodape/>

    </div>
  );
}

export default App;
