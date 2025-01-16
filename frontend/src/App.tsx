import react from "react"
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
 
import Home from "./pages/Home";
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";
import AboutPage from "./pages/AboutPage";


function App() {

  return (

    <>

      <Routes>

        <Route element={<Header />}>

          <Route index path='/' element={<Home />} />
          <Route  path='/aboutpage' element={<AboutPage />} />

        </Route>


          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />


      </Routes>

    </>

)

}

export default App
