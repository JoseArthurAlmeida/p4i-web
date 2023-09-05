import './css/home.css';
import './css/andamento.css';
import {LuClipboardSignature} from 'react-icons/lu';
import {ImBubbles2} from 'react-icons/im';
import { NavLink } from 'react-router-dom';


const Andamento = () => {
    return (
         <>
            
            <NavLink to='/atividades'>
              <button id='btn-at'>
                <LuClipboardSignature /><br></br>
                <span>Atividades</span>
              </button>
            </NavLink>
                 
            <NavLink to='/reunioesinseri'>
              <button id='btn-rn'>
                <ImBubbles2 /><br></br>
                <span>Reunião</span>
              </button>
            </NavLink>
          </>          
    );
  };
  
  export default Andamento;