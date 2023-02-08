import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Todo from './pages/Todo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Signin /> },
      { path: 'signin', element: <Signin /> },
      { path: 'signup', element: <Signup /> },
      { path: 'todo', element: <Todo /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

