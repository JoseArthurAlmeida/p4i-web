import { Button, Layout} from 'antd';
import {
  WhatsAppOutlined,
  GitlabFilled,
  FolderAddFilled,
} from '@ant-design/icons';
import {FaGoogleDrive} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./Css/Home.css"
import Grafico from './components/Grafico';
const { Header, Content} = Layout;


const Projeto = () =>  (
  <Layout>
    <Content>
        
      <div id='header'>
        <div><h1>P.4.I</h1></div>
        <div style={{display:"flex", gap:"10px", justifyContent:"flex-end"}}>
              <a href='https://www.whatsapp.com/?lang=pt_br' target="_blank">
                <Button type="text" icon={<WhatsAppOutlined style={{ fontSize: '28px' }} />}></Button>
              </a>
              <a href='https://about.gitlab.com' target="_blank">
                <Button type="text" icon={<GitlabFilled style={{ fontSize: '30px'}} />}></Button>
              </a>
              <a href='https://drive.google.com/drive' target="_blank">
                <Button type="text" icon={<FaGoogleDrive style={{ fontSize: '28px' }} />}></Button>
              </a>
        </div>
      </div>
      <div id='conteudos-pj'>
          <div class='content'>
              <div class='conteudos'>
                <h class='titulos-pj'>Cliente:</h><br></br>
                <p class='conteudo-de-titulos'>Nome comleto do cliente</p>
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
                <Grafico/>
                
           </div>
              
         </div>  
           <NavLink to="/andamento"><button className="btn-red">Andamento</button></NavLink>
      </Content>
                 
     </Layout>
);

export default Projeto;