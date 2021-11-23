import React from "react";
import { getWether } from "../../utils";

import ModalDialog from "../ModalDialog";
import StylizedInput from "../StylizedInput";
import './HomePage.css';

interface HomePageState {
  mountain: string;
  bio: string;
  email: string;
  date: string;
  openModal: Boolean;
}

interface IProps {
}

class HomePage extends React.Component<IProps, HomePageState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      mountain: '',
      bio: '',
      email: '',
      date: '',
      openModal: false,
    }
    this.handleChangeMountain = this.handleChangeMountain.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }
  handleChangeBio(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ bio: e.currentTarget.value });
  }
  handleChangeMountain(e: React.FormEvent<HTMLSelectElement>) {
    this.setState({ openModal: true});
    this.setState({ mountain: e.currentTarget.value });
  }
  handleChangeEmail(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ email: e.currentTarget.value });
  }
  handleChangeDate(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ date: e.currentTarget.value });
  }
  handleSubmit() {
    alert('Варіанти відпочинку скоро будуть на вашому email');
    this.setState({ openModal: false});
  }
  handleBack() {
    this.setState({ openModal: false});
  }
  render() {
    const white = {
      color: 'white',
    }
    return(
      <div className='back'>
        <div>
          <h3 style={ white }>
            В які гори відправляємось?
          </h3>
          <div className="form-item stylized">
            <select name="mountains" id="mountains" onChange={ this.handleChangeMountain } value={ this.state.mountain }>
              <option value="Карпати">Карпати</option>
              <option value="Альпи">Альпи</option>
              <option value="Гімалаї">Гімалаї</option>
            </select>
          </div>
        </div>
        <ModalDialog isOpen={ this.state.openModal }>
          <h3 style={ white }>
            Гаразд, { this.state.mountain } чекають на тебе. Але потрібно ще трохи інформації.
          </h3>
          <StylizedInput
            placeholder='Name'
            onChange={ (e:React.FormEvent<HTMLInputElement>) => this.handleChangeBio(e) }
            value={this.state.bio}
          />
          <StylizedInput
            placeholder='email'
            onChange={ (e:React.FormEvent<HTMLInputElement>) => this.handleChangeEmail(e) }
            value={this.state.email}
          />
          <StylizedInput
            placeholder='Date'
            onChange={ (e:React.FormEvent<HTMLInputElement>) => this.handleChangeDate(e) }
            value={this.state.date}
          />
          <div className="buttons">
            <button className="stylized" type="submit" onClick={ this.handleSubmit }>Прийняти</button>
            <button className="stylized" type="reset" onClick={ this.handleBack }>Змінити вибір</button>
          </div>
        </ModalDialog>
      </div>
    );
  }
}

export default HomePage;
