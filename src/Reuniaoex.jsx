import {Layout} from 'antd';
import { NavLink } from 'react-router-dom';
import "./Css/Atividade-reuex.css";
const {Content} = Layout;


const Reuniaoex = () => {
    return (
    <Layout>
        <Content>
            <div id='titulo-status-ex'>
                <h class='conteudo-head'>Reunião X</h>
                <h class='conteudo-head'>Realizada: 00/00/0000</h>
            </div>

            <div id='participantes-reu'>
            <h class='conteudo-titulos-reu'>Participantes:</h>
            <ul id='ul-reu'>
                <li>Participante 1</li>
                <li>Participante 2</li>
                <li>Participante 3</li>
                <li>Participante 4</li>
                <li>Participante 5</li>
            </ul>
            </div>

            <div id='objetivo-reu'>
                <h class='conteudo-titulos-reu'>Objetivo: *************************</h>
            </div>
            <div id='ata-reu'>
                <h class='conteudo-titulos-reu'>Ata: ************************</h>
            </div>  
            <NavLink to='/reunioes'><button class="btn-cadastrar">Fechar</button></NavLink>
        </Content>
    </Layout>    
    );
  };
  
  export default Reuniaoex;