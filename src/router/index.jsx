import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ConceptosClave from "../ConceptosClave";
import TecnicasAvanzadas from "../TecnicasAvanzadas";
import Layout from "../Layout";
import RecienAñadido from "../RecienAñadido";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/conceptosClave", element: <ConceptosClave /> },
      { path: "/tecnicasAvanzadas", element: <TecnicasAvanzadas /> },
      { path: "/recienAnadido", element: <RecienAñadido /> },
    ],
  },
]);

export default router;
