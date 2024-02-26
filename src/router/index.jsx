import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ConceptosClave from "../ConceptosClave";
import TecnicasAvanzadas from "../TecnicasAvanzadas";
import Layout from "../Layout";
import RecienAñadido from "../RecienAñadido";
const router = createBrowserRouter([
{
    element:<Layout/>,
    children:[
        {
            path:'/',
            element: <App/>
        },
        
        {
            path : '/conceptosClave/:loc',
            element: <ConceptosClave/>,
        },
        {
            path : "/tecnicasAvanzadas/:loc",
            element:<TecnicasAvanzadas/>
       
        },
        {
            path : "/recienAñadido/:loc",
            element:<RecienAñadido/>
        }


    ]
}
])
export default router;