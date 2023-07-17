import {Layout} from 'antd';
import './Css/Home.css';
import {LuClipboardSignature} from 'react-icons/lu';
import {ImBubbles2} from 'react-icons/im';
import { NavLink } from 'react-router-dom';
const {Content} = Layout;


const Andamento = () => {
    return (
    <Layout>
        <Content>
            <div>
              <NavLink to='/atividades'>
                <button>
                  <LuClipboardSignature />
                  <span>Atividades</span>
                </button>
              </NavLink>
    
              <NavLink to='/reunioes'>
                <button>
                  <ImBubbles2 />
                  <span>Reunião</span>
                </button>
              </NavLink>
            </div>
        </Content>
    </Layout>    
    );
  };
  
  export default Andamento;