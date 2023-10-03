import {Layout} from 'antd';
import { NavLink } from 'react-router-dom';
import '../../../css/arquivados.css'
import Barrafiltro from '../../../components/Barrafiltro';


const ProjetosArquivados = () => {
  
  return (
    <Layout>
      
        <div>
          <Barrafiltro />
        </div>
        
        <div className='tres-divs'>
          <div className='nav-arqv'> 
            <NavLink to='/vilarquivo'>
              <button className='btn-arquivados'>
                <h>P1</h>
              </button>
            </NavLink>
          </div>

          <div className='nav-arqv'> 
            <NavLink to='/vilarquivo'>
              <button className='btn-arquivados'>
                <h>P2</h>
              </button>
            </NavLink>
          </div>

          <div className='nav-arqv'> 
            <NavLink to='/vilarquivo'>
              <button className='btn-arquivados'>
                <h>P3</h>
              </button>
            </NavLink>
          </div>
        </div>

          <div className='nav-arqv'> 
            <NavLink to='/vilarquivo'>
              <button className='btn-arquivados'>
                <h>P4</h>
              </button>
            </NavLink>
          </div>

          <div className='nav-arqv'> 
            <NavLink to='/vilarquivo'>
              <button className='btn-arquivados'>
                <h>P5</h>
              </button>
            </NavLink>
          </div>

          <div className='nav-arqv'> 
            <NavLink to='/vilarquivo'>
              <button className='btn-arquivados'>
                <h>P6</h>
              </button>
            </NavLink>
          </div>
       
    </Layout>
  );
};

export default ProjetosArquivados;