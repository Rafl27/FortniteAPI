
import './App.css';
import Nav from './Components/Nav';
import Shop from './Components/Shop';
import About from './Components/About'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Home from './Components/Home';
import Item from './Components/ItemDetail';



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          {/* the : bellow means that anything that comes after shop/ will be accepted, id can be whatever I want */}
          <Route path = '/shop/:id' element={<Item />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
