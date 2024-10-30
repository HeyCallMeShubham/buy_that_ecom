import react from "react"
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
 
import Home from './pages/Home'

function App() {

  return (

    <>

      <Routes>

        <Route element={<Header />}>

          <Route index path='/' element={<Home />} />

        </Route>

      </Routes>

    </>

)

}

export default App
