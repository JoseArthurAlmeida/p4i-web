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
  return dataFormatada
}

const Reunioes = () => {

  const [reunioes, setReunioes] = useState([]);

  const getReunioes = async () => {
    try {
      const response = await conexaoApi.get("/reuniaos");
      const data = response.data.data;

      setReunioes(data);
      console.log(data)

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
        reunioes.map((r) => (
          <div class='nav' key={r.id}>
            <button class='btn-atv-reu'>
              <div id='titulo-status'>
                <h class='text-titulo'>{r.attributes.titulo}</h>
              </div>
              <div id='conteudo-btn-reu'>
                <h class='text-data'>Realizada: {formataData(r.attributes.data_realizacao)}</h>
              </div>
            </button>
          </div>
        ))
        }


        
      <NavLink to='/cadastroreunioes'><button><img src={botaomais}  alt='botaomais'/></button></NavLink>
      </div>
    </>

    
  );
};

export default Reunioes;