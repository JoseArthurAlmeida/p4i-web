import {Layout} from 'antd';
import './Css/Home.css';
import {LuClipboardSignature} from 'react-icons/lu';
import {ImBubbles2} from 'react-icons/im';
import { NavLink } from 'react-router-dom';
const {Content} = Layout;


const Andamento = () => {
    return (
    <Layout>
        <Content
        style={{
          margin: '24px 16px',
          minHeight: 510,
          background: 'white',
        }}>
            <div> 
              <NavLink to='/atividades'>
                <button className="btn-at">
                  <LuClipboardSignature />
                  <span>Atividades</span>
                </button>
              </NavLink>
    
              <NavLink to='/reunioesinseri'>
                <button className="btn-rn">
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