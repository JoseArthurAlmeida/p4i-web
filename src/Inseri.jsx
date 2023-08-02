import { useState } from 'react';
import Projeto from './Projeto';
import './Css/Home.css';

const Inseri = () => {
  const [temProjeto, setTemProjeto] = useState(false);
  return (
    
    <>
          {temProjeto ? (

            <Projeto/>

          ) : (
            <div id='inseri-pj'>
              <h2 style={{ color: 'black', textAlign: ' left',  fontFamily: 'Arial'}}>No momento você não está inserido em um projeto 
              </h2> 
              <hr style={{right: '5px', width: '200px', margin: '-1.5rem 0px', borderTop: '5px solid #085C16', marginRight: '1000px' }} />
            </div>
          )}
      </>
  );
};



export default Inseri;