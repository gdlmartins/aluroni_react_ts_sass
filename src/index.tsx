import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css";
import './index.css';
import Cardapio from './pages/Cardapio';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <Cardapio/>
   <h1>Oi tudo bem?</h1>
  </React.StrictMode>
);
