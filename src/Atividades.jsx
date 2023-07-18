import {Layout} from 'antd';
import { NavLink } from 'react-router-dom';
const {Content} = Layout;


const Atividades = () => {
    return (
    <Layout>
        <Content>
            <div>
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
            <div>
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
            <div>
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
        </Content>
    </Layout>    
    );
  };
  
  export default Atividades;