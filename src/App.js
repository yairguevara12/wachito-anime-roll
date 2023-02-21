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

      {isShownMenu && <Menu />}
     {/*  <Home />
      <Footer></Footer> */}
      <Search></Search>
    </div>
  );
}

export default App;
