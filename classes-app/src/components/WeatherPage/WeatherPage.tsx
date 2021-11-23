import React from 'react';
import { Link } from 'react-router-dom';
import { WeatherType } from '../../types';

import { CreateUser, getWether, Login } from '../../utils';
import ModalDialog from '../ModalDialog';
import StylizedInput from '../StylizedInput';

interface IProps {
}

interface IState {
  city: string;
  weatherData: WeatherType | null;
}

class WeatherPage  extends React.Component<IProps, IState> {
  constructor (props: IProps) {
    super(props);
    this.state = {
      city: 'Kyiv',
      weatherData: null,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleChangeCity(e:React.FormEvent<HTMLInputElement>) {
    this.setState({ city : e.currentTarget.value });
  }
  handleClick() {
    getWether(this.state.city)
    .then((weather) => {
      this.setState({ weatherData :  weather });
    })    
    .catch(() => {
      alert("Please search for a valid city 😩");
      return null;
    });
  }
  render() {
    return (
      <div>
        <ModalDialog isOpen={ true }>
          <div>
            <StylizedInput
              placeholder='City'
              onChange={ (e:React.FormEvent<HTMLInputElement>) => this.handleChangeCity(e) }
              value={this.state.city}
            />
            <button className='stylized' onClick={this.handleClick}>Get weather</button>
          </div>
          <p>Назва: {this.state.weatherData?.name}</p>
          <p>Температура мінімальна: {this.state.weatherData?.main.temp_min}</p>
          <p>Температура максимальна: {this.state.weatherData?.main.temp_max}</p>
          <p>Погода: {this.state.weatherData?.weather[0].main} - {this.state.weatherData?.weather[0].description}</p>
          <Link to='/'>
            <button className='stylized' onClick={this.handleClick}>close</button>
          </Link>
        </ModalDialog>
      </div>
    );
  }
}

export default WeatherPage;
