import React, { useState, FC } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import CSS from 'csstype';

import HomePage from './components/HomePage';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import MenuBtn from './components/MenuBtn';
import Back from './static/back.jpg';
import WeatherPage from './components/WeatherPage';
import { isLogined, logOut } from './utils';


const App: FC = () => {
  const [auth, setAuth] = useState<Boolean>(isLogined());
  const back: CSS.Properties = {
    backgroundImage: `url(${ Back })`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    textAlign: 'center',
    width: '100%',
    height: '100vh',
  }
  const handlerLogOut = () => {
    setAuth(false);
    logOut();
  }
  return (
    <div  style={back}>
      <Header>
        { 
        (!auth)
        ?
        <Link to='/login'>
          <MenuBtn>
            Sign in
          </MenuBtn>
        </Link>
        :
        <div>
          <Link to='/wether'>
            <MenuBtn>
              Weather
            </MenuBtn>
          </Link>
          <MenuBtn onClick={handlerLogOut}>
            Log out
          </MenuBtn>
        </div>
        }
      </Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={(!auth)? <LoginPage  setAuth={setAuth}/> : <Navigate to='/'/>} />
        <Route path='/wether' element={(auth)? <WeatherPage /> : <Navigate to='/'/>} />
        <Route path="*" element={ <Navigate to='/'/> } />
      </Routes>
    </div>
  );
}

export default App;
