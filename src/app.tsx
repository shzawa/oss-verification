import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, InputTest } from './pages'
import { assert } from './utils'
import { StrictMode } from 'react'

const rootElement = document.getElementById('root')
assert(rootElement, 'root is null')

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input" element={<InputTest />} />
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
