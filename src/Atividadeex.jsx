import {Layout} from 'antd';
import "./Css/Atividadeex.css"
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
            <div class="ta">

                <h>"Título da atividade"</h>

                <span>Status: 0</span>
                

            <div>  
            <span>Prazo: 00/00/0000</span><br/>
                 </div>

                 <div class= "di">
                <span>Disciplina: X</span>
                </div>

                <div>
            <h>Descrição geral da atividade</h>
                </div>

                <div>
                <span>Adicionar Link:</span>
                <input/>
                 </div>
            </div>
            <button class= "bnt-entegra"> Entregar </button>
        </Content>
    </Layout>    
    );
  };
  
  export default Atividadeex;