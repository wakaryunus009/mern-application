import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';
import Update from './components/Update';
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { loadUser } from './redux/Action';
import Location from './components/Location';


function App() {
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector(state=>state.user)

  useEffect(()=>{
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
  <Header/>
    <Routes>
      <Route path='/' element={isAuthenticated ? <Home/> : <Login/>} />
      <Route path='/profile' element={isAuthenticated ? <Profile/>: <Login/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/update' element={isAuthenticated ? <Update/> : <Login/>} />
      <Route path='/loc' element={<Location/>} />
      {/* <Route path='/delete' element={isAuthenticated ? <Delete/> : <Login/>} /> */}
    </Routes>
    <br>
    </br>
    <Footer/>
    {/* <footer className="footers">
    DEVELOP BY USER
    </footer> */}
    </>
  );
}

export default App;
