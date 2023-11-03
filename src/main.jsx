import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './comonent/Layout.jsx';
import Home from './comonent/Home.jsx';
import AddProduct from './comonent/AddProduct.jsx';
import Login from './Users/Login.jsx';
import Register from './Users/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import SingleData from './comonent/SingleData.jsx';
import CheckOut from './comonent/CheckOut.jsx';
import PrivateRoute from './Private/PrivateRoute.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path: '/addproduct',
        element: <AddProduct></AddProduct>
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
        path: '/SingleData/:id',
        element: <PrivateRoute>
          <SingleData></SingleData>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)

      },
      {
        path: '/checkout',
        element: <PrivateRoute>

          <CheckOut></CheckOut>
        </PrivateRoute>,
      
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

  <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
