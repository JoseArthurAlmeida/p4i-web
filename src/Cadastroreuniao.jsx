import {Layout} from 'antd';
import './Css/Cadastroreu.css'
import { NavLink } from 'react-router-dom';
const {Content} = Layout;


const Cadastroreuniao = () => {
    return (
    <Layout>
        <Content>
            <form>
              <h>Título</h>
              <input className='inputcadastro' placeholder='Dê um título a sua reunião'/><br></br>
              <h>Data:</h>
              <input className='inputcadastro'/><br></br>
              <h>Participantes:</h>
              <input className='inputcadastro' placeholder='Informe os participantes'/><br></br>
              <h>Objetivo:</h>
              <input className='inputcadastro' placeholder='Descreva o objetivo da reunião realizada'/><br></br>
              <h>Ata:</h>
              <input className='inputcadastro'/><br></br>
            </form>

            <button class="btn-cadastrar">Cadastrar</button>

        </Content>
    </Layout>    
    );
  };
  
  export default Cadastroreuniao;