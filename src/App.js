import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';
import Error from './pages/Error';



function App() {
  return (
    <div className=" bg-[#212121] text-white">
   
      <Routes>
       
        <Route path='/' element={<Home/>}></Route>
        <Route path='/success' element={<Success/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
