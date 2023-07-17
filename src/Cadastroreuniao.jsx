import {Layout} from 'antd';
import './Css/Cadastroreu.css'
import { NavLink } from 'react-router-dom';
const {Content} = Layout;


const Cadastroreuniao = () => {
    return (
    <Layout>
        <Content>
            <div>
              <h>Título</h>
              <input className='inputcadastro' placeholder='Dê um título a sua reunião'/>
            </div>
            <div>
              <h>Data:</h>
              <input className='inputcadastro'/>
            </div>
            <div>
              <h>Participantes:</h>
              <input className='inputcadastro' placeholder='Informe os participantes'/>
            </div>
            <div>
              <h>Objetivo:</h>
              <input className='inputcadastro' placeholder='Descreva o objetivo da reunião realizada'/>
            </div>
            <div>
              <h>Ata:</h>
              <input className='inputcadastro'/>
            </div>

            <button class="btn-cadastrar">Cadastrar</button>

        </Content>
    </Layout>    
    );
  };
  
  export default Cadastroreuniao;