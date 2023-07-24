import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import Main from './Layout/Main.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import Collage from './Routes/Collage.jsx';
import Admission from './Routes/Admission.jsx';
import MyCollege from './Routes/MyCollege.jsx';
import Login from './Form/Login/Login.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import SignUp from './Form/SignUp/SignUp.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/collage",
        element: <Collage></Collage>,
      },
      {
        path: "/Admission",
        element: <Admission></Admission>
      },
      {
        path: "/myCollege",
        element: <MyCollege></MyCollege>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
    ]
  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>

      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
