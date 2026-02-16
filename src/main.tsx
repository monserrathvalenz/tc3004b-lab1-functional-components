import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import HolaMundo from "./components/HolaMundo";
import Variables from "./components/Variables";
import Bancos from "./components/Bancos";
import Fetch from "./components/Fetch";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{ padding: 20 }}>
      <HolaMundo />
      <hr />
      <Variables />
      <hr />
      <Bancos />
      <Fetch />
    </div>
  </StrictMode>
)
