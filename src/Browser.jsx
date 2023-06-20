import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import Login from "./Long"
import Cadastro from "./Inseri"
import Projeto from "./Projeto"

const Browser = () => {
  const router = createBrowserRouter([
    {
      path: "/", element: <App />,
      children: [
        { path: "/", element: (<Projeto />) },
        { path: "/pessoa", element: <h1>Pessoa</h1> },
        { path: "/login", element: <Login /> },
        { path: "/cadastro", element: <Cadastro /> }
      ]
    }]);
  return (
    <RouterProvider router={router} />
  );
};
export default Browser;