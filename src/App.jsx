import {
  MenuFoldOutlined,
  HomeOutlined,
  FolderOpenOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu} from 'antd'; 
import { Outlet, NavLink } from "react-router-dom";
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
          id="menu">
          <NavLink to="/projeto"><Menu.Item key="1" icon={<HomeOutlined />} className="custom-menu-item">Seu Projeto</Menu.Item></NavLink>
          <NavLink to="/projetosarquivados"><Menu.Item key="2" icon={<FolderOpenOutlined />} className="custom-menu-item">Projetos Arquivados</Menu.Item></NavLink>
        </Menu>
      </Sider>
          <Outlet />
      </Layout>
  );
};

export default App;