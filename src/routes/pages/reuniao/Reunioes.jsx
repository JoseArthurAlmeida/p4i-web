import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import '../../../css/atividades-reu.css';
import botaomais from '../../../images/botaomais.png';
import conexaoApi from "../../../axios/config";
import formataData from "../../../components/funcoes_compartilhadas/formatarData";
import { BiTrash } from "react-icons/bi";
import Loader from "../../../components/Loader";
import Reunioesinseri from "./Reunioesinseri";
import Message from "../../../components/Message";
import { useLocation } from "react-router-dom";

const Reunioes = () => {

  const [reunioes, setReunioes] = useState([]);
  const [removerLoader, setRemoverLoader] = useState(false);
  const location = useLocation()
  let message = "";

  if (location.state) message = location.state.message

  const getReunioes = async () => {
    try {
      const response = await conexaoApi.get("/reuniaos");
      const data = response.data.data;

      setReunioes(data);
      setRemoverLoader(true)

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
    <main>
      {message && (<Message mensagem={message} />)}

      <div className='conteudo'>
        {reunioes.length > 0 && reunioes.map((reuniao) => (
          <div className='nav' key={reuniao.id}>
            <div className='btn-atv-reu'>
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
            </div>
          </div>
        ))}
        {!removerLoader && <Loader />}
        {removerLoader && reunioes.length === 0 && (
          <Reunioesinseri />
        )}

        <NavLink to='/cadastroreunioes'><button id="botao-mais"><img src={botaomais} alt='botaomais' /></button></NavLink>
      </div>
    </main>

  );
};
export default Reunioes;