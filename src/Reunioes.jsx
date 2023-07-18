import {Layout, Button} from 'antd';
import {RiAddCircleFill} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
const {Content} = Layout;


const Reunioes = () => {
    return (
    <Layout>
        <Content>
            <div>
              <NavLink to='/reuniaoex'>
                <button>
                    <h>Reunião X</h><br></br>  
                    <h>Realizada: 00/00/0000</h>
                </button>
              </NavLink>
            </div>
            <NavLink to='/cadastroreunioes'><Button type="text" icon={<RiAddCircleFill/>}></Button></NavLink>
        </Content>
    </Layout>    
    );
  };
  
  export default Reunioes;