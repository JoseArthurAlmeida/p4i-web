import {Layout} from 'antd';
import { NavLink } from 'react-router-dom';
const {Content} = Layout;


const Reuniaoex = () => {
    return (
    <Layout>
        <Content
        style={{
            margin: '24px 16px',
            minHeight: 510,
            background: 'white',
          }}>
            <div>
                <h>Reunião X</h>
                <span>Realizada: 00/00/0000</span>
            </div>
            <h>Participantes:</h>
            <ul>
                <li>Participante 1</li>
                <li>Participante 2</li>
                <li>Participante 3</li>
                <li>Participante 4</li>
                <li>Participante 5</li>
            </ul>
            <h>Objetivo: *************************</h><br/>
            <h>Ata: ************************</h><br/>  
            <NavLink to='/reunioes'><button>Fechar</button></NavLink>
        </Content>
    </Layout>    
    );
  };
  
  export default Reuniaoex;