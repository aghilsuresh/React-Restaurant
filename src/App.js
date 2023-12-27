
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import RestView from './pages/RestView';
import Home from './pages/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import { useDispatch } from 'react-redux';

function App() {

const dispatch = useDispatch()



  return (
    <div>


    

    <Header/>
     
     <Routes>
  
     <Route  path='/' element={ <Home/> } />

     <Route  path='/Restaurantview/:id' element={<RestView/>} />

     </Routes>

     <Footer/>



    </div>

  );
}

export default App;
