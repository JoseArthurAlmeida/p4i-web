import {Layout} from 'antd';
const {Content} = Layout;


const Atividadeex = () => {
    return (
    <Layout>
        <Content
        style={{
            margin: '24px 16px',
            minHeight: 510,
            background: 'white',
          }}>
            <div>
                <h>"Título da atividade"</h>
                <span>Status: 0</span>
                
                <span>Disciplina: X</span>
            </div>
            <span>Prazo: 00/00/0000</span><br/>
            <h>Descrição geral da atividade</h>
            <div>
                <span>Adicionar Link:</span>
                <input/>
            </div>
            <button> Entregar </button>
        </Content>
    </Layout>    
    );
  };
  
  export default Atividadeex;