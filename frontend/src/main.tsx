import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './features/store/store.ts'
import "/node_modules/flag-icons/css/flag-icons.min.css";



createRoot(document.getElementById('root')!).render(

  //<StrictMode>

  <Provider store={store} >

    <App />

  </Provider>

  //</StrictMode>

)