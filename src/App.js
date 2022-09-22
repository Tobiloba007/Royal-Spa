import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Pictures from './components/Pictures';
import AboutUs from './components/AboutUs'
import Contacts from './components/contacts/Contacts';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/pictures' element={<Pictures />} />
       <Route path='/contacts' element={<Contacts />} />
       <Route path='/about' element={<AboutUs />} />
     </Routes>
  );
}

export default App;
