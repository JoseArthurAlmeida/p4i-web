import { Button, Layout} from 'antd';
import {
  WhatsAppOutlined,
  GitlabFilled,
  FolderAddFilled,
} from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
import "./home.css"

const Projeto = () =>  (
  <Layout>
    <Header style={{background:"white", display:"flex", justifyContent: "space-between", paddingTop:"10px" }}>
      <div><h1>P.4.I</h1></div>
      <div style={{display:"flex", gap:"10px", justifyContent:"flex-end"}}>
            <a href='https://www.whatsapp.com/?lang=pt_br'>
              <Button type="text" icon={<WhatsAppOutlined style={{ fontSize: '28px' }} />}></Button>
            </a>
            <a href='https://about.gitlab.com'>
              <Button type="text" icon={<GitlabFilled style={{ fontSize: '30px'}} />}></Button>
            </a>
            <a href='https://drive.google.com/drive'>
              <Button type="text" icon={<FolderAddFilled style={{ fontSize: '30px' }} />}></Button>
            </a>
      </div>
    </Header>
      
      <Content>
        <div className='conteudo'>         
            OI
        </div>
      </Content>
      
    <Footer></Footer>
    </Layout>
);

export default Projeto;