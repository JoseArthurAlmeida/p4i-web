import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import '../../../css/atividades-reu.css';
import botaomais from '../../../images/botaomais.png';
import conexaoApi from "../../../axios/config";
import formataData from "../../../components/funcoes_compartilhadas/formatarData";
import { BiTrash } from "react-icons/bi";

const Reunioes = () => {

  const [reunioes, setReunioes] = useState([]);

  const getReunioes = async () => {
    try {
      const response = await conexaoApi.get("/reuniaos");
      const data = response.data.data;

      setReunioes(data);

    } catch (error) {
      console.log(error);
    }
  };

  // Função excluir reuniao
  const apagarReuniao = async (id) => {
    if (window.confirm('Tem certeza que deseja apagar?')) {
      console.log(id);
      await conexaoApi.delete(`/reuniaos/${id}`);
      getReunioes();
    }
  }

  useEffect(() => {
    getReunioes();
  }, []);


  return (

    <div className='conteudo'>
      {
        reunioes.map((reuniao) => (
          <div className='nav' key={reuniao.id}>

            <button className='btn-atv-reu'>

              <div id='titulo-status'>
                <h className='text-titulo'>{reuniao.attributes.titulo}</h>
              </div>


              <div>
                  <div >
                    <NavLink to={`/reunioes/${reuniao.id}`}>
                      <button>Acessar</button>
                    </NavLink>
                    <button onClick={() => apagarReuniao(reuniao.id)}><BiTrash size={30} /></button>
                  </div>
                </div>



              <div id='conteudo-btn-reu'>
                <h className='text-data'>Realizada: {formataData(reuniao.attributes.data_realizacao)}</h>
              </div>
            </button>

          </div>
        ))
      }
      <NavLink to='/cadastroreunioes'><button id="botao-mais"><img src={botaomais} alt='botaomais' /></button></NavLink>

    </div>



  );
};
export default Reunioes;