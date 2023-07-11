import { Button, Layout, Col, Row, Space, Typography, Divider} from 'antd';
import {
  WhatsAppOutlined,
  GitlabFilled,
  FolderAddFilled,
} from '@ant-design/icons';
import PieChart from './grafico';
import "./home.css"
const { Header, Content, Footer } = Layout;
const {Text, Link} = Typography;


const Projeto = () =>  (
  <Layout style={{
        
    background: 'white'


  }}>
    <Header style={{background:"white", display:"flex", justifyContent: "space-between", paddingTop:"10px" }}>
      <div><h1>P.4.I</h1></div>
      <div style={{display:"flex", gap:"10px", justifyContent:"flex-end"}}>
            <a href='https://www.whatsapp.com/?lang=pt_br'>
              <Button type="text" icon={<WhatsAppOutlined style={{ fontSize: '28px' }} />}></Button>
            </a>
            <a href='https://about.gitlab.com'>
              <Button type="text" icon={<GitlabFilled style={{ fontSize: '30px'}} />}></Button>
            </a>
            <a href='https://drive.google.com/drive'>
              <Button type="text" icon={<FolderAddFilled style={{ fontSize: '30px' }} />}></Button>
            </a>
      </div>
    </Header>
      
      <Content style={{background:"white", display:"flex", justifyContent: "space-between", paddingTop:"10px" }}>
        
          <div className='content' style={{ marginRight: '10px' }}>
              <section className='conteudos'>
                <h>Cliente:</h>
                <p>Nome comleto do cliente</p>
              </section>
          
              <section> 
                <h>Integrantes:</h>
                  <ul>
                    <li>Participante 1</li>
                    <li>Participante 2</li>
                    <li>Participante 3</li>
                    <li>Participante 4</li>
                    <li>Participante 5</li>
                  </ul>  
              </section>
          </div>
          <div className='content'  style={{ marginLeft: '10px' }}>
                <section className='conteudos'>
                      <h>Descrição:</h>
                      <p>Descrição geral do projeto</p>
                </section> 
                <Button type="primary" className="btn-red">Andamento</Button>
                <link rel="stylesheet" href="home/button.andamento"></link>
           </div>
           <PieChart />     
      </Content>
      
      <Footer></Footer>
    </Layout>
);

export default Projeto;