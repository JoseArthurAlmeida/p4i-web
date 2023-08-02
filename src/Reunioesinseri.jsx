import {Layout, Button} from 'antd';
import { useState } from 'react';
import Reunioes from './Reunioes';
import {RiAddCircleFill} from 'react-icons/ri';
import "./Css/Reunnião.css"
import { NavLink } from 'react-router-dom';
const {Content} = Layout;


const Reunioesinseri = () => {
    const [temReunioes, setTemReunioes] = useState(false);
    return (
    <Layout>
        <Content>
    

        {temReunioes ? (

            <Reunioes/>

        ) : (
            <>
                <div class="clique">
                <h1>Até o momento você não cadastrou reuniões.</h1>
                </div>
                <div >
                    <span>Clique aqui e cadastre uma nova reunião</span>
                    <NavLink to='/cadastroreunioes'><Button class= "clique2" type="text"  icon={<RiAddCircleFill/>}></Button></NavLink>
                </div>
            </>
        )}
        </Content>
    </Layout>    
    );
  };
  
  export default Reunioesinseri;