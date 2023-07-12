import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import Login from "./Long"
import Inseri from "./Inseri" 
import Projeto from "./Projeto"
import ProjetosArquivados from "./Arquivados"
import Andamento from "./Andamento"

const Browser = () => {
  const router = createBrowserRouter([
    
    { path: "", element: <Login/>},
    
    { path: "/", element: <App />,
      children: [
        { path: "/inseri", element: <Inseri/>},
        { path: "/projeto", element: <Projeto/>},
        { path: "/andamento", element: <Andamento/> },
        { path: "/projetosarquivados", element: <ProjetosArquivados/> },
      ]
    }]);
  return (
    <RouterProvider router={router} />
  );
};
export default Browser;