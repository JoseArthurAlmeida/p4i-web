import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import '../../../css/home.css';
import '../../../css/atividades-reu.css';
import conexaoApi from "../../../axios/config";
import { Layout } from "antd";


const Atividades = () => {

  const [atividades, setAtividades] = useState([]);

  const getReunioes = async () => {
    try {
      const response = await conexaoApi.get("/artefatos");
      const data = response.data.data;

      setAtividades(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReunioes();
  }, []);

  return (
    <Layout>
      <div className='conteudo'>
        {
          atividades.map((atividade) => (
          <div className='nav' key={atividade.id}>
            
            <NavLink to={`/atividadeex/${atividade.id}`}>
              <button className='btn-atv-reu'>

                <div id='titulo-status'>
                  <h className='text-btn'>"Título da atividade"</h>
                  <h className='text-btn'>Status: 0</h>
                </div>
                <div id='conteudo-btn-atv'>
                  <h className='text-btn'>Prazo: 00/00/0000</h><br />
                  <h id='disciplina-pd' className='text-btn'>Disciplina: X</h>
                </div>
              </button>
              </NavLink>
          </div>
          ))
        }


      </div>
    </Layout>
  );
};

export default Atividades;