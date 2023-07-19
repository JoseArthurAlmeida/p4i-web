import {Layout} from 'antd';
import { NavLink } from 'react-router-dom';
import './Css/Home.css'
const {Content} = Layout;


const Vilarquivo = () => {
    return (
    <Layout>
        <Content
        style={{
            margin: '24px 16px',
            minHeight: 510,
            background: 'white',
          }}>
            <div><h1>P1</h1></div>

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
                <button className="btn-red">Visualizar</button>
           </div>
        </Content>
    </Layout>    
    );
  };
  
  export default Vilarquivo;