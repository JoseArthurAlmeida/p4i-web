import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../App"
import Login from "./pages/login/Long"
import Inseri from "./pages/projeto/Inseri" 
import Projeto from "./pages/projeto/Projeto"
import ProjetosArquivados from "./pages/projeto-arquivado/Arquivados"
import Andamento from "./pages/projeto/Andamento";
import Atividades from "./pages/atividade/Atividades";
import Reunioesinseri from "./pages/reuniao/Reunioesinseri";
import Cadastroreuniao from "./pages/reuniao/Cadastroreuniao";
import Atividadeex from "./pages/atividade/Atividadeex";
import Reunioes from "./pages/reuniao/Reunioes";
import Reuniaoex from "./pages/reuniao/Reuniaoex";
import Vilarquivo from "./pages/projeto-arquivado/Vilarquivo"

const Browser = () => {
  const router = createBrowserRouter([
    
    { path: "", element: <Login/>},
    
    { path: "/", element: <App />,
      children: [
        { path: "/inseri", element: <Inseri/>},
        { path: "/projeto", element: <Projeto/>},
        { path: "/andamento", element: <Andamento/> },
        { path: "/projetosarquivados", element: <ProjetosArquivados/> },
        { path: "/atividades", element: <Atividades/> },
        { path: "/reunioesinseri", element: <Reunioesinseri/> },
        { path: "/cadastroreunioes", element: <Cadastroreuniao/> },
        { path: "/atividadeex", element: <Atividadeex/> },
        { path: "/reunioes", element: <Reunioes/> },
        { path: "/reuniaoex", element: <Reuniaoex/> },
        { path: "/vilarquivo", element: <Vilarquivo/> },
      ]
    }]);
  return (
    <RouterProvider router={router} />
  );
};
export default Browser;