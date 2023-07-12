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
  );
};



export default Inseri;