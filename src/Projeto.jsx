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
         <Button type="text" icon={<WhatsAppOutlined style={{ fontSize: '28px' }} />}>
              </Button>
              <Button type="text" icon={<GitlabFilled style={{ fontSize: '30px'}} />}>
              </Button>
              <Button type="text" icon={<FolderAddFilled style={{ fontSize: '30px' }} />}>
              </Button>
      </div></Header>
    <Content style={{background:"white"}}>OI P4I</Content>
    <Footer></Footer>
    </Layout>
);

export default Projeto;