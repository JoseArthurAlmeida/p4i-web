import { Button } from 'antd';
import { useState } from 'react';
import Reunioes from './Reunioes';
import { RiAddCircleFill } from 'react-icons/ri';
import "../../../css/reunioesinseri.css";
import "../../../css/home.css";
import { NavLink } from 'react-router-dom';

const Reunioesinseri = () => {
    const [temReunioes] = useState(false);
    return (
        <main className='main-transparent'>


            {temReunioes ? (

                <Reunioes />

            ) : (
                <main className='main-transparent'>

                    <div id='conteudo-geral'>
                        <div className="clique">
                            <h id='titulo-reu'>Até o momento você não cadastrou reuniões.</h><br></br>
                            <hr id='barra-verde' />

                        </div>
                        <div id='clique2'>
                            <h id='titulo-clique2'>Clique aqui e cadastre uma nova reunião</h>
                            <NavLink to='/cadastroreunioes'><Button type="text" className='clique2' icon={<RiAddCircleFill />}></Button></NavLink>
                        </div>
                    </div>

                </main>
            )}
        </main>
    );
};

export default Reunioesinseri;