import { useState } from 'react'
import './App.css'
import Add from './components/Add'
import Home from './components/Home'
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
      <h1> WELCOME TO OUR PRODUCTS...... </h1>
      
      <Routes>
        
        <Route path='/add' element={<Add />} />
        <Route path='/home' element={<Home />} />

      </Routes>
      
      
       
     
    </>
  )
}

export default App
