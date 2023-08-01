import {Layout} from 'antd';
import { NavLink } from 'react-router-dom';
import './Css/Home.css';
import './Css/Atividades.css';
const {Content} = Layout;


const Atividades = () => {
    return (
    <>
            <div id='conteudo'>
              <NavLink to='/atividadeex'>
                <button>
                  <div id='conteudo-btn'>
                  <div id='titulo-status'>
                    <h>"Título da atividade"</h>
                    <span>Status: 0</span>
                  </div>
                  <h>Prazo: 00/00/0000</h><br/>
                  <h>Disciplina: X</h>
                  </div>
                </button>
              </NavLink>
            
            
              <NavLink to='/atividadeex'>
                <button>
                  <div>
                    <h>"Título da atividade"</h>
                    <span>Status: 0</span>
                  </div>
                  <h>Prazo: 00/00/0000</h><br/>
                  <h>Disciplina: X</h>
                </button>
              </NavLink>
            
            
              <NavLink to='/atividadeex'>
                <button>
                  <div>
                    <h>"Título da atividade"</h>
                    <span>Status: 0</span>
                  </div>
                  <h>Prazo: 00/00/0000</h><br/>
                  <h>Disciplina: X</h>
                </button>
              </NavLink>
          </div>  
    </>       
    );
  };
  
  export default Atividades;