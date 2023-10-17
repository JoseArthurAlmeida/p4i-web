import {Button, Layout} from 'antd';
import { useState } from 'react';
import Reunioes from './Reunioes';
import {RiAddCircleFill} from 'react-icons/ri';
import "../../../css/reunioesinseri.css";
import { NavLink } from 'react-router-dom';
//const {Content} = Layout;

const Reunioesinseri = () => {
    const [temReunioes] = useState(true);
    return (
<>
    

        {temReunioes ? (

            <Reunioes/>

        ) : (
            <Layout>
                <>
            <div id='conteudo-geral'>
                <div className="clique">
                    <h id='titulo-reu'>Até o momento você não cadastrou reuniões.</h><br></br>
                    <hr id='barra-verde'/>
                    
                </div>
                <div id='clique2'>
                    <h id='titulo-clique2'>Clique aqui e cadastre uma nova reunião</h>
                    <NavLink to='/cadastroreunioes'><Button type="text"  className='clique2' icon={<RiAddCircleFill/>}></Button></NavLink>
                </div>
            </div>
            </>
            </Layout>
        )}
       </>    
    );
  };
  
  export default Reunioesinseri;