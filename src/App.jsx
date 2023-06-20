import {
  MenuFoldOutlined,
  HomeOutlined,
  FolderOpenOutlined,
  WhatsAppOutlined,
  GitlabFilled,
  FolderAddFilled,
} from '@ant-design/icons';
import { Button, Layout, Menu, Typography } from 'antd';
import { Outlet } from "react-router-dom";
import './home.css';



const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const App = () => {

  return (
    <Layout>
      <Sider collapsible >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ background: '#085C16', height: '100vh' }}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'Seu projeto'
            },
            {
              key: '3',
              icon: <FolderOpenOutlined />,
              label: 'projetos arquivados'
            }
          ]}
        />
      </Sider>
      <Layout>
        <Content

          style={{
        
            background: 'white'


          }}

        >
          <Outlet />
          </Content>
        

      </Layout>
    </Layout>
  );
};
//comentário qualquer

export default App;