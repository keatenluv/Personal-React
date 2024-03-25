import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ErrorPage from './Error Message/error-page.tsx'
import Snake from './Snake/Snake.tsx'
import Loans from './Loans/loan-landing.tsx'
import DataForm from './Loans/data-input.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, 
  },
  {
    path: "snake",
    element: <Snake />,
  },
  {
    path: "loans",
    element: <Loans />
  },
  {
    path: "loan-info",
    element: <DataForm />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
