import {
  MenuFoldOutlined,
  HomeOutlined,
  FolderOpenOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu} from 'antd';
import { Outlet } from "react-router-dom";
import './home.css';



const { Header, Sider, Content } = Layout;

const App = () => {

  return (
    <Layout>
      <Sider collapsible >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[' ']}
          style={{ background: '#085C16', height: '100vh' }}>
          <Menu.Item key="1" icon={<HomeOutlined />} className="custom-menu-item">Seu Projeto</Menu.Item>
          <Menu.Item key="2" icon={<FolderOpenOutlined />} className="custom-menu-item">Projetos Arquivados</Menu.Item>
        </Menu>
      </Sider>
          <Outlet />
      </Layout>
  );
};

export default App;