import {Layout} from 'antd';
import './Css/Cadastroreu.css'
//import { NavLink } from 'react-router-dom';
const {Content} = Layout;


const Cadastroreuniao = () => {
    return (
    <Layout>
        <Content>
            <form id='form'>
              <div class='conteudo-form'><h class='titulos'>Título:</h>
              <input class='inputcadastro' id='titulo' placeholder='Dê um título a sua reunião'/></div>

              <div class='conteudo-form'><h class='titulos'>Data:</h>
              <input class='inputcadastro' id='data' type='date'/></div>

              <div class='conteudo-form'><h  class='titulos'>Participantes:</h>
              <input class='inputcadastro' id='participantes' placeholder='Informe os participantes'/></div>

              <div class='conteudo-form'><h class='titulos'>Objetivo:</h>
              <textarea class='inputcadastro' id="objetivo" name="objetivo" placeholder='Informe os participantes' style={{width: '300px', height: '30px', font: 'Arial'}}></textarea></div>

              <div class='conteudo-form'><h class='titulos'>Ata:</h>
              <input class='inputcadastro' id='ata'/></div>
            </form>

            <div id='button-position'><button class="btn-cadastrar-reu">Cadastrar</button></div>

        </Content>
    </Layout>    
    );
  };
  
  export default Cadastroreuniao;