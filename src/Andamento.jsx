import {Layout} from 'antd';
import './Css/Home.css';
import {
    TeamOutlined,
    FormOutlined,
  } from '@ant-design/icons';
const {Content} = Layout;


const Andamento = () => {
    return (
    <Layout>
        <Content>
            <div>
            <button>
            <FormOutlined />
            </button>
    
            <button>
            <TeamOutlined />
            </button>
            </div>
        </Content>
    </Layout>    
    );
  };
  
  export default Andamento;