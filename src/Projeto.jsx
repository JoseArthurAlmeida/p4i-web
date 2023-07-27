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
          <div className='content'>
              <div className='conteudos'>
                <h>Cliente:</h><br></br>
                <p>Nome comleto do cliente</p>
              </div>
          
              <div> 
                <h>Integrantes:</h>
                  <ul>
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
                      <h>Descrição:</h>
                      <p>Descrição geral do projeto</p>
                </div> 
                <Grafico />
                <NavLink to="/andamento"><button className="btn-red">Andamento</button></NavLink>
                <link rel="stylesheet" href="home/button.andamento"></link>
           </div>
      </Content>           
     </Layout>
);

export default Projeto;