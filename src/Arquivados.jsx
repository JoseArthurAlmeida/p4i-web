import {Layout} from 'antd';
import Barrafiltro from './components/Barrafiltro';

const {Content} = Layout;

const ProjetosArquivados = () => {
  
  return (
    <Layout>
      <Content 
      style={{
        margin: '24px 16px',
        minHeight: 510,
        background: 'white',
      }}>
        <div>
          <Barrafiltro />
        </div>
      </Content> 
    </Layout>
  );
};

export default ProjetosArquivados;