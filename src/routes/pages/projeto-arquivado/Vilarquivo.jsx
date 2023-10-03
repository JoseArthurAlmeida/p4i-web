import {Layout} from 'antd';
import { NavLink } from 'react-router-dom';
import '../../../css/home.css'
const {Content} = Layout;


const Vilarquivo = () => {
    return (
    <Layout>
        <Content>
            <div id='titulo-vilarquivo'><h1>P1</h1></div>

            <div id='conteudos-pj'>
          <div className='content'>
              <div className='conteudos'>
                <h className='titulos-pj'>Cliente:</h><br></br>
                <p className='conteudo-de-titulos'>Nome completo do cliente</p>
              </div>
          
              <div> 
                <h className='titulos-pj'>Integrantes:</h>
                  <ul id='ul-pj'>
                    <li>Participante 1</li>
                    <li>Participante 2</li>
                    <li>Participante 3</li>
                    <li>Participante 4</li>
                    <li>Participante 5</li>
                  </ul>  
              </div>
          </div>
          <div className='content'>
                <div className='conteudos'>
                      <h className='titulos-pj'>Descrição:</h>
                      <p className='conteudo-de-titulos'>Descrição geral do projeto</p>
                </div> 
                
           </div>
              
         </div>

          <div id='position-bntred'><NavLink to="/projetosarquivados"><button className="btn-red">Fechar</button></NavLink></div>
         
        </Content>
    </Layout>    
    );
  };
  
  export default Vilarquivo;