import React from 'react';
import { Link } from 'react-router-dom';

import { CreateUser, Login } from '../../utils';
import ModalDialog from '../ModalDialog';
import StylizedInput from '../StylizedInput';

interface IProps {
  setAuth: Function;
}

interface IState {
  email: string;
  password: string;
  msg: string;
}

class LoginPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      msg: '',
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegistrate = this.handleRegistrate.bind(this);
    this.checkValid = this.checkValid.bind(this);
  }

  handleChangeEmail(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ email: e.currentTarget.value });
  }

  handleChangePassword(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ password: e.currentTarget.value });
  }

  handleLogin() {
    if (!this.checkValid()) return;
    if (Login(this.state.email, this.state.password)) {
      this.props.setAuth(true);
    }
    else {
      this.setState({ msg: 'Користувача не знайдено, зареєструйтесь' });
    }
  }

  checkValid(): Boolean {
    if (this.state.email === ''){
      this.setState({ msg: 'Будь ласка заповніть емейл' });
      return false
    }
    if (this.state.password === ''){
      this.setState({ msg: 'Будь ласка заповніть пароль' });
      return false;
    }
    return true;
  }

  handleRegistrate() {
    if (!(this.checkValid())) return;
    CreateUser(this.state.email, this.state.password);
  }

  render() {
    return (
      <div>
        <ModalDialog isOpen={ true }>
            <StylizedInput placeholder='email' value={ this.state.email } onChange={this.handleChangeEmail}/>
            <StylizedInput placeholder='password' value={ this.state.password } onChange={this.handleChangePassword}/>
            <div>
              <button className="stylized" type="reset" onClick={ this.handleLogin }>Log in</button>
              <button className="stylized" type="reset" onClick={ this.handleRegistrate }>Registrate</button>
              <Link to='/'>
                <button className="stylized" type="reset">Back</button>
              </Link>
            </div>
        </ModalDialog>
      </div>
    );
  }
}

export default LoginPage;
