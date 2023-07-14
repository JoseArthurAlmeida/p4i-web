import {Layout} from 'antd';
import Barrafiltro from './components/Barrafiltro';

const {Content} = Layout;

const ProjetosArquivados = () => {
  
  return (
    <Layout>
      <Content>
        <div>
          <Barrafiltro />
        </div>
      </Content> 
    </Layout>
  );
};

export default ProjetosArquivados;