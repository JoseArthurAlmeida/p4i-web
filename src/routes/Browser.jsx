import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../App"
import Login from "../Long"
import Inseri from "../Inseri" 
import Projeto from "../Projeto"
import ProjetosArquivados from "../Arquivados"
import Andamento from "../Andamento";
import Atividades from "../Atividades";
import Reunioesinseri from "./pages/reuniao/Reunioesinseri";
import Cadastroreuniao from "../Cadastroreuniao";
import Atividadeex from "../Atividadeex";
import Reunioes from "./pages/reuniao/Reunioes";
import Reuniaoex from "./pages/reuniao/Reuniaoex";
import Vilarquivo from "../Vilarquivo"

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