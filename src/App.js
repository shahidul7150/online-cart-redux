
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={ <Home/>}></Route>
        <Route path='/cart' element={ <Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
