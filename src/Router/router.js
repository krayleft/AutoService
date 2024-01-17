import { createBrowserRouter } from "react-router-dom";
import AutoService from "../AutoService";



const router=createBrowserRouter([
    {
        path:'/',
        element:<AutoService/>
    },
])

export default router