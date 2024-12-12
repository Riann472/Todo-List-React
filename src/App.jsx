import './App.css'
import Home from './pages/Home'
import Detalhes from './pages/Detalhes'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/detalhes' element={<Detalhes />}/>
      </Routes>
    </Router>
  )
}

export default App
