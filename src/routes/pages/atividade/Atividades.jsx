import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import '../../../css/home.css';
import '../../../css/atividades-reu.css';
import conexaoApi from "../../../axios/config";
import Loader from "../../../components/Loader";



const Atividades = () => {

  const [atividades, setAtividades] = useState([]);
  const [removerLoader, setRemoverLoader] = useState(false);

  const getAtividades = async () => {
    try {
      const response = await conexaoApi.get("/artefatos");
      const data = response.data.data;

      setAtividades(data);
      setRemoverLoader(true)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAtividades();
  }, []);

  return (
    <main className="main-transparent">
      <div className='conteudo'>
        {atividades.length > 0 && atividades.map((atividade) => (
          <div className='nav' key={atividade.id}>
            <button className='btn-atv-reu'>

              <div id='titulo-status'>
                <h className='text-btn'>{atividade.attributes.nome}</h>
                <h className='text-btn'>{atividade.attributes.status}</h>
              </div>
              <div id='conteudo-btn-atv'>
                <h className='text-btn'>{atividade.attributes.prazo}</h><br />
                {/*<h id='disciplina-pd' className='text-btn'>Disciplina: X</h>*/}
              </div>
              <div>
                <NavLink to={`/atividades/${atividade.id}`}>
                  <button>acessar</button>
                </NavLink>
              </div>
            </button>

          </div>
        ))
        }
         {!removerLoader && <Loader />}
        {removerLoader && atividades.length === 0 && (
          <>nao tem atividade</>
        )}
      </div>
    </main>
  );
};

export default Atividades;