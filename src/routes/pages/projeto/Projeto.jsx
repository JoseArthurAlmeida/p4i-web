import { Button, Layout} from 'antd';
import {WhatsAppOutlined, GitlabFilled,} from '@ant-design/icons';
import {FaGoogleDrive} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "../../../css/home.css"
import Grafico from '../../../components/Grafico';
const {Content} = Layout;


const Projeto = () =>  (
  <Layout>
    <Content>
        
      <div id='header'>
        <div><h1>P.4.I</h1></div>
        <div style={{display:"flex", gap:"10px", justifyContent:"flex-end"}}>
              <a href='https://www.whatsapp.com/?lang=pt_br' target="blank">
                <Button type="text" icon={<WhatsAppOutlined style={{ fontSize: '28px' }} />}></Button>
              </a>
              <a href='https://about.gitlab.com' target="blank">
                <Button type="text" icon={<GitlabFilled style={{ fontSize: '30px'}} />}></Button>
              </a>
              <a href='https://drive.google.com/drive' target="blank">
                <Button type="text" icon={<FaGoogleDrive style={{ fontSize: '28px' }} />}></Button>
              </a>
        </div>
      </div>
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
                
                  <Grafico/>
                
           </div>
              
         </div>  
           <div id='position-bntred'><NavLink to="/andamento"><button className="btn-red">Andamento</button></NavLink></div>
      </Content>
                 
     </Layout>
);

export default Projeto;