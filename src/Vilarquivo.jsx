import {Layout} from 'antd';
import { NavLink } from 'react-router-dom';
import './css/home.css'
const {Content} = Layout;


const Vilarquivo = () => {
    return (
    <Layout>
        <Content>
            <div id='titulo-vilarquivo'><h1>P1</h1></div>

            <div id='conteudos-pj'>
          <div class='content'>
              <div class='conteudos'>
                <h class='titulos-pj'>Cliente:</h><br></br>
                <p class='conteudo-de-titulos'>Nome completo do cliente</p>
              </div>
          
              <div> 
                <h class='titulos-pj'>Integrantes:</h>
                  <ul id='ul-pj'>
                    <li>Participante 1</li>
                    <li>Participante 2</li>
                    <li>Participante 3</li>
                    <li>Participante 4</li>
                    <li>Participante 5</li>
                  </ul>  
              </div>
          </div>
          <div class='content'>
                <div class='conteudos'>
                      <h class='titulos-pj'>Descrição:</h>
                      <p class='conteudo-de-titulos'>Descrição geral do projeto</p>
                </div> 
                
           </div>
              
         </div>

          <div id='position-bntred'><NavLink to="/projetosarquivados"><button className="btn-red">Fechar</button></NavLink></div>
         
        </Content>
    </Layout>    
    );
  };
  
  export default Vilarquivo;