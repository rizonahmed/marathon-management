import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './Nav.jsx';
import Home from './Home.jsx';
import Marathons from './Marathons.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import AuthProvider from './AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/marathons',
        element: <Marathons></Marathons>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {

      }
     
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider><RouterProvider router={router} /> </AuthProvider>
  </StrictMode>,
)
