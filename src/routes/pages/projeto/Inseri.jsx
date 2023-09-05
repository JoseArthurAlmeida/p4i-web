import { useState } from 'react';
import Projeto from './Projeto';
import '../../../css/reunioesinseri.css';

const Inseri = () => {
  const [temProjeto] = useState(false);
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