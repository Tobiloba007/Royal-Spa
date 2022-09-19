import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Pictures from './components/Pictures';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs'
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/pictures' element={<Pictures />} />
       <Route path='/contact' element={<Contact />} />
       <Route path='/about' element={<AboutUs />} />
     </Routes>
  );
}

export default App;
