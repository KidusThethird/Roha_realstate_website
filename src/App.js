
import './App.css';
import Footer from './components/footer';
import { Navbar} from './components/nav-bar';
import { Home } from './pages/home'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
