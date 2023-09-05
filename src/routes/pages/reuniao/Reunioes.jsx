import {Button} from 'antd';
import {RiAddCircleFill} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import './css/atividades-reu.css';



const Reunioes = () => {
    return (
        <>

      <div id='conteudo'>

            <div class='nav'>
              <NavLink to='/reuniaoex'>
                <button class='btn-atv-reu'>
                  
                  <div id='titulo-status'>
                    <h class='text-btn'>"Reunião X"</h>
                  </div>
                  <div id='conteudo-btn-reu'>
                    <h class='text-btn'>Realizada: 00/00/0000</h><br/>
                  </div>
                </button>
              </NavLink>
            </div>

            <div class='nav'>
              <NavLink to='/reuniaoex'>
                <button class='btn-atv-reu'>
                  
                  <div id='titulo-status'>
                    <h class='text-btn'>"Reunião X"</h>
                  </div>
                  <div id='conteudo-btn-reu'>
                    <h class='text-btn'>Realizada: 00/00/0000</h><br/>
                  </div>
                </button>
              </NavLink>
            </div>

            <div class='nav'>
              <NavLink to='/reuniaoex'>
                <button class='btn-atv-reu'>
                  
                  <div id='titulo-status'>
                    <h class='text-btn'>"Reunião X"</h>
                  </div>
                  <div id='conteudo-btn-reu'>
                    <h class='text-btn'>Realizada: 00/00/0000</h><br/>
                  </div>
                </button>
              </NavLink>
            </div>

        </div>
            <NavLink to='/cadastroreunioes'><Button type="text" icon={<RiAddCircleFill/>}></Button></NavLink>
        </>    
    );
  };
  
  export default Reunioes;