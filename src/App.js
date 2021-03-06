
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={ <Home/>}></Route>
        <Route path='/cart' element={ <Cart/>}></Route>
        <Route path='*' element={ <NotFound/>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
