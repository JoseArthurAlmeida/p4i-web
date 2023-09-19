import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import '../../../css/atividades-reu.css';
import botaomais from '../../../images/botaomais.png';
import conexaoApi from "../../../axios/config";

function formataData(dataEntrada) {
  const data = new Date(dataEntrada);

  // Extrair o dia, mês e ano da data
  const dia = data.getUTCDate();
  const mes = data.getUTCMonth() + 1; 
  const ano = data.getUTCFullYear();

  const dataFormatada = dia + '/' + mes + '/' + ano;
  const d = dia <= 9 ? '0'+dia : dia
  const m = mes <= 9 ? '0'+mes : mes
  const dataF = `${d}/${m}/${ano}`;
  return dataF;
}

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
    <>
    <div>
      {
        reunioes.map((reuniao) => (
          <div class='nav' key={reuniao.id}>
            <button class='btn-atv-reu'>
              <div id='titulo-status'>
                <h class='text-titulo'>{reuniao.attributes.titulo}</h>
              </div>
              <div id='conteudo-btn-reu'>
                <h class='text-data'>Realizada: {formataData(reuniao.attributes.data_realizacao)}</h>
              </div>
            </button>
          </div>
        ))
        }




      
      <NavLink to='/cadastroreunioes'><button id="botao-mais"><img src={botaomais}  alt='botaomais'/></button></NavLink>

      </div>
    </>

    
  );
};

export default Reunioes;