import { useState } from 'react';
import Projeto from './Projeto';
import './Css/Reunioesinseri.css';

const Inseri = () => {
  const [temProjeto, setTemProjeto] = useState(false);
  return (
    
    <>
          {temProjeto ? (

            <Projeto/>

          ) : (
            <div id='conteudo-geral'>
                <div class="clique">
                    <h id='titulo-inseri'>No momento você não está inserido em um projeto.</h><br></br>
                    <hr id='barra-verde'/>
                </div>
            </div>
          )}
      </>
  );
};



export default Inseri;