import { useState, useEffect } from "react";
import { Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import "../../../css/atividade-reuex.css";
import { useParams } from "react-router-dom";
import conexaoApi from "../../../axios/config";
import formataData from "../../../components/funcoes_compartilhadas/formatarData";

const { Content } = Layout;
//`/posts/${id}`
const Reuniaoex = () => {
    const { id } = useParams();
    const [reuniao, setReuniao] = useState([]);

    const getReuniao = async () => {
        try {
            const response = await conexaoApi.get(`/reuniaos/${id}`);
            const data = response.data.data;
            console.log(data)
            setReuniao(data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getReuniao();
        // eslint-disable-next-line
    }, []);
    return (

        <Layout>
            {reuniao.attributes ? (
                <Content>
                <div id='titulo-status-ex'>
                    <h class='conteudo-head'>{reuniao.attributes.titulo}</h>
                    <h class='conteudo-head'>{`Realizada: ${formataData(reuniao.attributes.data_realizacao)}`}</h>
                </div>

                <div id='participantes-reu'>
                    <h class='conteudo-titulos-reu'>Participantes:</h>
                    <ul id='ul-reu'>
                        <li>Participante 1</li>
                        <li>Participante 2</li>
                        <li>Participante 3</li>
                        <li>Participante 4</li>
                        <li>Participante 5</li>
                    </ul>
                </div>

                <div id='objetivo-reu'>
                    <h class='conteudo-titulos-reu'>{`Objetivo: ${reuniao.attributes.objetivo}`}</h>
                </div>
                <div id='ata-reu'>
                    <h class='conteudo-titulos-reu'>{`Ata: ${reuniao.attributes.ata}`}</h>
                </div>
                <NavLink to='/reunioes'><button class="btn-cadastrar">Fechar</button></NavLink>
            </Content>

            ) : (<><h>carregando</h></>)}
        </Layout>
    );
};

export default Reuniaoex;