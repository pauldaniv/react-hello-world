import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from "./Counter"
import App from "./App"
import Header from "./Header"
import "./App.css"

export default function AppRoutes() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <header className="App-header">
          <Routes>
            <Route path="/" element={ <App/> }/>
            <Route path="/counter" element={ <Counter/> }/>
          </Routes>
        </header>
      </div>
    </Router>
  )
}
