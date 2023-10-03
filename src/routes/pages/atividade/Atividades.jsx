import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import '../../../css/home.css';
import '../../../css/atividades-reu.css';
import conexaoApi from "../../../axios/config";


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
    <>
      <div class='conteudo'>
        {
          atividades.map((atividade) => (
          <div class='nav' key={atividade.id}>
            
            <NavLink to={`/atividadeex/${atividade.id}`}>
              <button class='btn-atv-reu'>

                <div id='titulo-status'>
                  <h class='text-btn'>"Título da atividade"</h>
                  <h class='text-btn'>Status: 0</h>
                </div>
                <div id='conteudo-btn-atv'>
                  <h class='text-btn'>Prazo: 00/00/0000</h><br />
                  <h id='disciplina-pd' class='text-btn'>Disciplina: X</h>
                </div>
              </button>
              </NavLink>
          </div>
          ))
        }


      </div>
    </>
  );
};

export default Atividades;