import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navigation from './Navigation';
import Destination from './Destination';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import Bea from './Bea'; // Import Bea component with correct case
import Counter from './Counter';
import Vijaya from './destiny/Vijaya';
import Tirupathi from './destiny/Tirupathi';
import Beaches from './destiny/Beaches';
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Destination' element={<Destination />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/bea' element={<Bea />} /> {/* Use Bea component with correct case */}
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/vijaya' element={<Vijaya/>}/>
      <Route path='/tirupathi'element={<Tirupathi/>}/>
      <Route path='/beaches' element={<Beaches/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
