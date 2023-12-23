
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Destination from './components/Destination';
import Home from './components/Home';
import Register from './components/Register';
import Signin from './components/Signin';

import Gallery from './components/Gallery';
import Admindash from './Admindash'; 




function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/destination' element={<Destination/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/sign-in' element={<Signin/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/Gallery' element={<Gallery/>}></Route>

    </Routes>
    </BrowserRouter>
    {  <Admindash/> 
    }
      
    </>
  );
    
    
  
};

export default App;
