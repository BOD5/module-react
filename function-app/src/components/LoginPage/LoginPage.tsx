import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { CreateUser, Login } from '../../utils';
import ModalDialog from '../ModalDialog';
import StylizedInput from '../StylizedInput';

interface IProps {
  setAuth: Function;
}

const LoginPage: React.FC<IProps> = ({ setAuth }) => {
  
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [msg, setMsg] = useState<string>('');

  const handleChangeEmail = (e: React.FormEvent<HTMLInputElement>)  => {
    setEmail(e.currentTarget.value);
  }

  const handleChangePassword = (e: React.FormEvent<HTMLInputElement>)  => {
    setPassword(e.currentTarget.value);
  }

  const handleLogin = ()  => {
    if (!checkValid()) return;
    if (Login(email, password)) {
      setAuth(true);
    }
    else {
      setMsg('Користувача не знайдено, зареєструйтесь');
    }
  }

  const checkValid = (): Boolean  => {
    if (email === ''){
      setMsg('Будь ласка заповніть емейл');
      return false
    }
    if (password === ''){
      setMsg('Будь ласка заповніть пароль');
      return false;
    }
    return true;
  }

  const handleRegistrate = ()  => {
    if (!(checkValid())) return;
    CreateUser(email, password);
  }

  return (
    <div>
      <ModalDialog isOpen={ true }>
          <StylizedInput placeholder='email' value={ email } onChange={handleChangeEmail}/>
          <StylizedInput placeholder='password' value={ password } onChange={handleChangePassword}/>
          <p>{msg}</p>
          <div>
            <button className="stylized" type="reset" onClick={ handleLogin }>Log in</button>
            <button className="stylized" type="reset" onClick={ handleRegistrate }>Registrate</button>
            <Link to='/'>
              <button className="stylized" type="reset">Back</button>
            </Link>
          </div>
      </ModalDialog>
    </div>
  );
}

export default LoginPage;
