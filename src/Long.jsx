import { UserOutlined , KeyOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.png';

const Login = () => {
  return (
    <div style={{ backgroundColor: '#085C16', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',  width: '100%' }}>
      <div style={{ backgroundColor: '#e4e4e4', width: '60%',padding: '24px', borderRadius: '30px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
        <img src={logo} style={{height: 140}}/>
        <h1 style={{ color: 'black', fontFamily: 'Arial' }}>Bem vindo ao P4I</h1>
        <h3 style={{ color: 'black', fontFamily: 'Arial'  }}>Projeto Integrador do curso Integrado de Infomatica do IFPB </h3>
        
     <h4 style={{ color: 'black', textAlign: 'left',  fontFamily: 'Arial'}}>Usuário:</h4>
        
        <div style={{display: 'flex'}}>
        <UserOutlined style={{marginRight: 10}}/>
        <Input placeholder= "Email"  style={{ marginBottom: '20px', borderRadius: '50px' }} />
        </div>
        
        <h4 style={{ color: 'black', textAlign: ' left',  fontFamily: 'Arial'}}>Senha:</h4>  
        
     <div style={{ display: 'flex' }}>
        <KeyOutlined style={{marginRight: 10}}/>
        <Input.Password placeholder= "Senha"  style={{ marginBottom: '16px', borderRadius: '50px' }} />
        </div>

        
        <NavLink to="/inseri"><button class="btn-acessar">Acessar</button></NavLink>
        <style>
          {`
            .btn-red {
              background-color: red;
              color: white;
              border: none;
              padding: 10px 50px;
              border-radius: 50px;
              font-size: 16px;
              margin-top: 16px;
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default Login;