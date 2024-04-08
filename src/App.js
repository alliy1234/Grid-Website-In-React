
import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <div className="container-fluid header-top">
    <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
