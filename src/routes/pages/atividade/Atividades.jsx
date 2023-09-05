import { NavLink } from 'react-router-dom';
import '../../../css/home.css';
import '../../../css/atividades-reu.css';



const Atividades = () => {
    return (
    <>
      <div id='conteudo'>
              <div class='nav'>
              <NavLink to='/atividadeex'>
                <button class='btn-atv-reu'>
                  
                  <div id='titulo-status'>
                    <h class='text-btn'>"Título da atividade"</h>
                    <h class='text-btn'>Status: 0</h>
                  </div>
                  <div id='conteudo-btn-atv'>
                    <h class='text-btn'>Prazo: 00/00/0000</h><br/>
                    <h id='disciplina-pd' class='text-btn'>Disciplina: X</h>
                  </div>
                </button>
              </NavLink>
            </div>
            
            <div class='nav'>
              <NavLink to='/atividadeex'>
                <button class='btn-atv-reu'>
                  
                  <div id='titulo-status'>
                    <h class='text-btn'>"Título da atividade"</h>
                    <h class='text-btn'>Status: 0</h>
                  </div>
                  <div id='conteudo-btn-atv'>
                    <h class='text-btn'>Prazo: 00/00/0000</h><br/>
                    <h id='disciplina-pd' class='text-btn'>Disciplina: X</h>
                  </div>
                </button>
              </NavLink>
            </div>

            <div class='nav'>
              <NavLink to='/atividadeex'>
                <button class='btn-atv-reu'>
                  
                  <div id='titulo-status'>
                    <h class='text-btn'>"Título da atividade"</h>
                    <h class='text-btn'>Status: 0</h>
                  </div>
                  <div id='conteudo-btn-atv'>
                    <h class='text-btn'>Prazo: 00/00/0000</h><br/>
                    <h id='disciplina-pd' class='text-btn'>Disciplina: X</h>
                  </div>
                </button>
              </NavLink>
            </div>
            
              
        </div> 
    </>       
    );
  };
  
  export default Atividades;