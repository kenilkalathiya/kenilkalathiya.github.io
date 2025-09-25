import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
// Change this import from BrowserRouter to HashRouter
import { HashRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

root.render(
  <>
    <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
  </>
);