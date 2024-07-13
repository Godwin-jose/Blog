import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default App
