
import './App.css';
import Leader from './components/Leader';
import TaskScreen from './components/TaskScreen';
import Modal from "./components/Modal"
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskScreen/>,
  },
  {
    path: "/leader",
    element: (
     <Leader/>
    ),
  },
 
]);


function App() {
  return (

<>
<RouterProvider router={router} />
</>
  );
}

export default App;
