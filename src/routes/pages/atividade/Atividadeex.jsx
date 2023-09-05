import {Layout} from 'antd';
import { NavLink } from 'react-router-dom';
import "../../../css/atividade-reuex.css";
const {Content} = Layout;


const Atividadeex = () => {
    return (
    <Layout>
        <Content>
            <div id='titulo-status-ex'>

                <h class='conteudo-head'>"Título da atividade"</h>

                <h class='conteudo-head'>Status: 0</h>
                
            </div>
            <div id='prazo-atv'>  
                <h class='conteudo-prazo'>Prazo: 00/00/0000</h><br></br>
                <h class='conteudo-prazo'>Disciplina: X</h>
            </div>

            <div id='descricao'>
                <h class='text-descricao-link'>Descrição geral da atividade</h>
            </div>

            <div id='add-link'>
                <h class='text-descricao-link'>Adicionar Link:</h>
                <input type='url' id='input-atv'/>
            </div>
            
            <div id='button-position'>
                <NavLink to='/atividades'>
                    <button class="btn-cadastrar">Entregar</button>
                </NavLink>    
            </div>
        </Content>
    </Layout>    
    );
  };
  
  export default Atividadeex;