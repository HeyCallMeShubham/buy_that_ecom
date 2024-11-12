import react from "react"
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
 
import Home from './pages/Home'
import Register from "./pages/user/Register"

function App() {

  return (

    <>

      <Routes>

        <Route element={<Header />}>

          <Route index path='/' element={<Home />} />

        </Route>


          <Route path="/register" element={<Register />} />


      </Routes>

    </>

)

}

export default App
