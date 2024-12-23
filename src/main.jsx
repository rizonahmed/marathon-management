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
import { BsDash } from 'react-icons/bs';
import Dashboard from './Dashboard.jsx';
import Private from './Private.jsx';
import AddMarathon from './AddMarathon.jsx';
import MarathonList from './MarathonList.jsx';
import ApplyList from './ApplyList.jsx';

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
        element:<Private>  <Marathons></Marathons></Private>
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
      path: '/dashboard',
      element: <Private> <Dashboard></Dashboard></Private>,
      children: [
        {
          path: 'addMarathon',
          element: <Private><AddMarathon></AddMarathon></Private>
        },
        {
          path: 'marathonList',
          element: <MarathonList></MarathonList>
        },
        {
          path: 'applyList',
          element: <ApplyList></ApplyList>
        }
      ]
      }
     
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider><RouterProvider router={router} /> </AuthProvider>
  </StrictMode>,
)
