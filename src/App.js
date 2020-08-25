import React from 'react';
import NavBar from './Navbar/NavBar';
import Home from './Components/Home/Home';
import Header from './Header/Header';
import { Switch, Route } from 'react-router-dom';
import RightSideBar from './SideBar/RightSideBar/RightSideBar';
import LeftSideBar from './SideBar/LeftSideBar/LeftSideBar';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <div className='min-h-screen'>
        <NavBar />
        <Header />
        <div className='flex md:flex-row flex-col mt-16'>
          <div className='md:w-1/5 mx-auto p-6'>
            <RightSideBar />
          </div>
          <div className='md:w-3/5 mx-auto p-6'>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
          <div className='md:w-1/5 mx-auto p-6'>
            <LeftSideBar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
