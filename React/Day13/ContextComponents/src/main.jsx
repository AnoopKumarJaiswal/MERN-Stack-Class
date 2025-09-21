import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Example } from './Utils/Example.jsx'

createRoot(document.getElementById('root')).render(
  <Example>

    <App />

  </Example>
)
