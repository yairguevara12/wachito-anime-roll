import React from 'react';
import Home from './pages/home';
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./style/home.css";
import "./style/util.css";

import Header from "./components/header";
import Menu from "./components/menu.js";
import Footer from "./components/footer.js";
import Search from './pages/search';
import Videos from './pages/videos';
import User from './pages/user';
import Login from './pages/login';
import Register from './pages/register';
import { Routes, Route } from 'react-router-dom';



function App() {
  const [isShownMenu, setIsShownMenu] = React.useState(false);
  const lockWindow = React.useRef(null);
  function handleSetIsShownMenu() {
    setIsShownMenu(prev => !prev);

  }

  React.useEffect(() => {

    isShownMenu ? lockWindow.current.parentElement.parentElement.style.overflow = 'hidden'
      : lockWindow.current.parentElement.parentElement.style.overflow = 'auto';



  }, [isShownMenu])
  return (
    <div ref={lockWindow} className='app' >
      <Header isShownMenu={isShownMenu} handleSetIsShownMenu={handleSetIsShownMenu} />

      {isShownMenu && <Menu handleSetIsShownMenu={handleSetIsShownMenu} />}

      <Routes >   
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/home' element={<Home />}></Route>
        <Route exact path='/search' element={<Search />}></Route>
        <Route exact path='/videos/popular/' element={<Videos />}></Route>
        <Route exact path='/videos/genero/:genre?' element={<Videos />}></Route>
        <Route exact path='/user'  element={<User />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/register' element={<Register />}></Route>
      </Routes >



      <Footer></Footer>

    </div>
  );
}

export default App;
