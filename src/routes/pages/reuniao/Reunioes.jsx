import { useState, useEffect } from "react";
import { Button } from 'antd';
import { RiAddCircleFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import '../../../css/atividades-reu.css';
import botaomais from '../../../images/botaomais.png';
import conexaoApi from "../../../axios/config";

/*
 posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link className="btn" to={`/posts/${post.id}`}>
              Ler mais
            </Link>
          </div>
*/
const Reunioes = () => {

  const [reunioes, setReunioes] = useState([]);

  const getReunioes = async () => {
    try {
      const response = await conexaoApi.get("/reuniaos");

      const data = response.data;

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

      <div id='conteudo'>

        { reunioes.map((reuniao) => (
          <div>

            <div id='titulo-status'>
              <h class='text-btn'>{reuniao.id}</h>
            </div>
            <div id='conteudo-btn-reu'>
                <h class='text-btn'>{reuniao.objetivo}</h><br />
              </div>
          </div>
        ))
        }



      </div>
      <NavLink to='/cadastroreunioes'><button><img src={botaomais}  alt='botaomais'/></button></NavLink>
    </>
  );
};

export default Reunioes;