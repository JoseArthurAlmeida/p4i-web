import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import '../../../css/atividades-reu.css';
import botaomais from '../../../images/botaomais.png';
import conexaoApi from "../../../axios/config";
import formataData from "../../../components/funcoes_compartilhadas/formatarData";

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

  useEffect(() => {
    getReunioes();
  }, []);


  return (
    
    <div class='conteudo'>
      {
        reunioes.map((reuniao) => (
          <div class='nav' key={reuniao.id}>
            <NavLink to={`/reunioes/${reuniao.id}`}>
            <button class='btn-atv-reu'>
              <div id='titulo-status'>
                <h class='text-titulo'>{reuniao.attributes.titulo}</h>
              </div>
              <div id='conteudo-btn-reu'>
                <h class='text-data'>Realizada: {formataData(reuniao.attributes.data_realizacao)}</h>
              </div>
            </button>
            </NavLink>
          </div>
        ))
        }




      
      <NavLink to='/cadastroreunioes'><button id="botao-mais"><img src={botaomais}  alt='botaomais'/></button></NavLink>

      </div>
    

    
  );
};
 //to={`/posts/${post.id}`}
export default Reunioes;