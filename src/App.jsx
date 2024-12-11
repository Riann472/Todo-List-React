import './App.css'
import Home from './pages/Home'
import MeuCu from './pages/MeuCu'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/meucu' element={<MeuCu />}/>
      </Routes>
    </Router>
  )
}

export default App
