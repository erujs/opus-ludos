import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Error from './pages/error/error'
import './App.css'

const App = () => {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='*' element={<Error statusCode={"ERROR [404]"} statusMessage={"Page Not Found!"} />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
