
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Auth from './components/Auth/Auth.jsx'
import Checkout from './components/Checkout/Checkout.jsx'
import NavBar from './components/Navbar/Navbar.jsx'

function App() {


  return (
    <div className="app">
      <header className="App-header">
    
      </header>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth'element={<Auth />}/>
        <Route path='/checkout' element={<Checkout />}/>
      </Routes>
    </div>
  )
}

export default App
