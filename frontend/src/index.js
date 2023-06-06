import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MdDisabledByDevTools } from '@fvilers/disable-react-devtools';

if (process.env.NODE_ENV)

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

