import {Layout, Button} from 'antd';
import {RiAddCircleFill} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
const {Content} = Layout;


const Reunioesinseri = () => {
    return (
    <Layout>
        <Content>
            <div>
              <h1>Até o momento você não cadastrou reuniões.</h1>
            </div>
            <div>
                <span>Clique aqui e cadastre uma nova reunião</span>
                <NavLink to='/cadastroreunioes'><Button type="text" icon={<RiAddCircleFill/>}></Button></NavLink>
            </div>
        </Content>
    </Layout>    
    );
  };
  
  export default Reunioesinseri;