import React            from 'react';
import ReactDOM         from 'react-dom/client';
import './index.css';
import reportWebVitals  from './reportWebVitals';


import {

  createBrowserRouter,
  RouterProvider

}                       from 'react-router-dom';


import { Provider } from 'react-redux';

import configureStore from './context/store';


import Home             from './pages/Home';
import Login            from './pages/Login';
import Register         from './pages/Register';
import App              from './App';
import Profile          from './pages/Profile';
import Update           from './pages/Update';


const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path      : '/home',
        element   : <Home/>,
      },
      {
        path      : '/profile',
        element   : <Profile/>
      },
      {
        path      : '/update/:id',
        element   : <Update/>
      },

    ]
  },
  {
    path : '/login',
    element : <Login/>
  },
  {
    path : '/register',
    element : <Register/>
  },
  
])


// const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={configureStore}>
      <RouterProvider router={router}/>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
