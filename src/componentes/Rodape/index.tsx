import './Rodape.css';

const Rodape = () =>{
    return(
        <div className='rodape'>
            <div>
                <img src= './tw.png' alt='Logo Twitter'/>
                <img src= './fb.png' alt='Logo Facebook'/>
                <img src= './ig.png' alt='Logo Instagram'/>
            </div>
            <img src='./logo.png' alt='Logo Organo'/>
            <p>
                Desenvolvido por Guilherme Barbosa
            </p>
        </div>
    )
}

export default Rodape;