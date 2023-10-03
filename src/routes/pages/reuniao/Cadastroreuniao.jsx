import { useState} from "react";
import { Layout } from 'antd';
import '../../../css/cadastroreu.css'
//import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import conexaoApi from "../../../axios/config";

const { Content } = Layout;

/* requisao post

{
  "data": {
    "titulo": "requisicao post",
    "objetivo": "ver funcioinamento",
    "ata": "esta funcionando?",
    "participantes": "d, js, ja"
  }
}
*/
const Cadastroreuniao = () => {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [data_realizacao, setData] = useState("");
  const [participantes, setParticipantes] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [ata, setAta] = useState("");

  function mudaEstadoTitulo(event) {
    const novoTitulo = event.target.value;
    setTitulo(novoTitulo);
  }

  function mudaEstadoData(event) {
    const novoData = event.target.value;
    setData(novoData);
  }

  function mudaEstadoParticipantes(event) {
    const novoParticipantes = event.target.value;
    setParticipantes(novoParticipantes);
  }

  function mudaEstadoObjetivo(event) {
    const novoObjetivo = event.target.value;
    setObjetivo(novoObjetivo);
  }
  function mudaEstadoAta(event) {
    const novoAta = event.target.value;
    setAta(novoAta);
  }

  const cadastrarReuniao = async (event) => {
    event.preventDefault();

    const reuniao = { titulo, data_realizacao, participantes, objetivo, ata };
    console.log(reuniao);

    await conexaoApi.post("/reuniaos", { data: reuniao });
    navigate("/reunioesinseri")
  }



  return (
    <Layout>
      <Content>
        <form id='form' onSubmit={(e) => cadastrarReuniao(e)}>
          <div className='conteudo-form'><h className='titulos'>Título:</h>
            <input className='inputcadastro' value={titulo} onChange={mudaEstadoTitulo} id='titulo' placeholder='Dê um título a sua reunião' required/></div>

          <div className='conteudo-form'><h className='titulos'>Data:</h>
            <input className='inputcadastro' value={data_realizacao} onChange={mudaEstadoData} id='data' type='date' required/></div>

          <div className='conteudo-form'><h className='titulos'>Participantes:</h>
            <input className='inputcadastro' value={participantes} onChange={mudaEstadoParticipantes} id='participantes' placeholder='Informe os participantes' required/></div>

          <div className='conteudo-form'><h className='titulos'>Objetivo:</h>
            <textarea className='inputcadastro' value={objetivo} onChange={mudaEstadoObjetivo} id="objetivo" name="objetivo" placeholder='Descreva o objetivo da reunião realizada' style={{ width: '300px', height: '30px', font: 'Arial' }} required></textarea></div>

          <div className='conteudo-form'><h className='titulos'>Ata:</h>
            <input className='inputcadastro' value={ata} onChange={mudaEstadoAta} id='ata' required/></div>
          <div id='button-position'><button className="btn-cadastrar-reu">Cadastrar</button></div>
        </form>

      </Content>


    </Layout>
  );
};

export default Cadastroreuniao;