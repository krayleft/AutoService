import * as ReactDOMClient from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from './Router/router';
import React from 'react';
import './Css/Header.css'
import './Css/FourUslugi.css'
import './Css/IntroPrice.css'
import './Css/WhoIs.css'
import './Css/Price.css'
import './Css/Team.css'
import './Css/Akcsii.css'
import './Css/lastform.css'
import './Css/Otzivi.css'
import './Css/footer.css'


ReactDOMClient.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
