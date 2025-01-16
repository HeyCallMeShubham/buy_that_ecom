import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './index.css';

import { Provider } from 'react-redux';
import { persistor, store } from './features/store/store.ts';

import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')!).render(

  //<StrictMode>

  <Provider store={store} >

    <PersistGate loading={null} persistor={persistor}>

      <BrowserRouter>

        <App />

      </BrowserRouter>

    </PersistGate>

  </Provider>

  //</StrictMode>

)
