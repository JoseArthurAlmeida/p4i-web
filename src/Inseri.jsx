import {
  MenuFoldOutlined,
  HomeOutlined,
  FolderOpenOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { useState } from 'react';

const { Header, Sider, Content } = Layout;
const Inseri = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ background: '#085C16',  height: '100vh'}} 
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'Seu projeto',
  
            },
            {
              key: '3',
              icon: <FolderOpenOutlined />,
              label: 'projetos arquivados',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
         
          style={{
            padding: 0,
            background: 'white',
          }}
          
        >
          <Button
            type="text"
            icon={collapsed ? <MenuFoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              background: 'white',
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
            
          />

        </Header>
        <Content
          
          style={{
            margin: '24px 16px',
            padding: 240,
            minHeight: 510,
            background: 'white',
          }}
        >
   <h2 style={{ color: 'black', textAlign: ' left',  fontFamily: 'Arial'}}>No momento você não está inserido em um projeto 
   </h2> 
<hr style={{ borderTop: '5px solid #085C16', marginRight: '1000px' }} />
        </Content>
      </Layout>
    </Layout>
  );
};



export default Inseri;