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
import Error from './Error.jsx';
import Details from './Details.jsx';
import ApplyPage from './ApplyPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
        loader: ()=> fetch('http://localhost:5000/limitedData')
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
         path: '/details/:id',
         element: <Private><Details></Details></Private>,
         loader: ({ params }) =>  fetch(`http://localhost:5000/allMarathons/${params.id}`)
      },
      {
        path:'/applyPage/:id',
        element:<Private><ApplyPage></ApplyPage></Private>,
        loader: ({ params }) =>  fetch(`http://localhost:5000/allMarathons/${params.id}`)
      },
      {
      path: '/dashboard',
      element: <Private> <Dashboard></Dashboard></Private>,
      children: [
        {
          path: '/dashboard/addMarathon',
          element: <Private><AddMarathon></AddMarathon></Private>
        },
        {
          path: 'marathonList',
          element:<Private> <MarathonList></MarathonList></Private>
        },
        {
          path: 'applyList',
          element: <Private><ApplyList></ApplyList></Private>
        },

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
