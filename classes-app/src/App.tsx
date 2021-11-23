import React from 'react';
import Header from './components/Header';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import CSS from 'csstype';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import MenuBtn from './components/MenuBtn';
import Back from './static/back.jpg';
import WeatherPage from './components/WeatherPage';
import { isLogined, logOut } from './utils';

interface IAppProps {};
interface IAppState {
  auth: Boolean;
};

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      auth: isLogined(),
    };
    this.setAuth = this.setAuth.bind(this);
  }
  setAuth(newAuth: Boolean) {
    this.setState({ auth: newAuth });
  }
  render() {
    const back: CSS.Properties = {
      backgroundImage: `url(${ Back })`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      textAlign: 'center',
      width: '100%',
      height: '100vh',
    }
    return (
      <div  style={back}>
        <Header>
          { 
          (!this.state.auth)
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
            <MenuBtn 
              onClick={() => {
                this.setAuth(false);
                logOut();
              }}
            >
              Log out
            </MenuBtn>
          </div>
          }
        </Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/login' element={(!this.state.auth)? <LoginPage  setAuth={this.setAuth}/> : <Navigate to='/'/>} />
          <Route path='/wether' element={(this.state.auth)? <WeatherPage /> : <Navigate to='/'/>} />
          <Route path="*" element={ <Navigate to='/'/> } />
        </Routes>
      </div>
    );
  }
}

export default App;
