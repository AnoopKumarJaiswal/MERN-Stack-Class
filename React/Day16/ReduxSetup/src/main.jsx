import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./Utills/slice.js"
import store from './Utills/Store.js'
import {Provider} from "react-redux"

createRoot(document.getElementById('root')).render(
    <Provider store = {store}>

       <App />
   
    </Provider>
)
