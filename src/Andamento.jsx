import {Layout} from 'antd';
import './home.css'
const {Content} = Layout;

const Andamento = () => {
    return (
    <Layout>
        <Content>
            <div>
            <button>
                <span>Atividades</span>
            </button>
            <button>
                <span>Reuniões</span>
            </button>
            </div>
        </Content>
    </Layout>    
    );
  };
  
  export default Andamento;