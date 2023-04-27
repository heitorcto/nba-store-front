/* Dependências */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './css/main.css';

/* Páginas */
import Principal from './pages/Principal';

/* Roteamento */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Principal />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
