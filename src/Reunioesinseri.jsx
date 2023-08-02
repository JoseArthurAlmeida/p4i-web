import {Layout, Button} from 'antd';
import { useState } from 'react';
import Reunioes from './Reunioes';
import {RiAddCircleFill} from 'react-icons/ri';
import "./Css/Reunioesinseri.css";
import { NavLink } from 'react-router-dom';
const {Content} = Layout;


const Reunioesinseri = () => {
    const [temReunioes, setTemReunioes] = useState(false);
    return (
<>
    

        {temReunioes ? (

            <Reunioes/>

        ) : (
            <>
            <div id='conteudo-geral'>
                <div class="clique">
                    <h id='titulo-reu'>Até o momento você não cadastrou reuniões.</h><br></br>
                    <hr id='barra-verde'/>
                    
                </div>
                <div id='clique2'>
                    <h id='titulo-clique2'>Clique aqui e cadastre uma nova reunião</h>
                    <NavLink to='/cadastroreunioes'><Button type="text"  class='clique2' icon={<RiAddCircleFill/>}></Button></NavLink>
                </div>
            </div>
            </>
        )}
       </>    
    );
  };
  
  export default Reunioesinseri;