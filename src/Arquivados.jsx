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
        <div> 
        <button>
            <span>P1</span>
        </button>

        <button>
           <span>P2</span>     
        </button>

        <button>
            <span>P3</span>          
        </button>

         <button>
             <span>P4</span>
          </button>

        <button>
           <span>P5</span>      
        </button>

        <button>
            <span>P6</span>     
           </button>
           
        </div>
      </Content> 
    </Layout>
  );
};

export default ProjetosArquivados;