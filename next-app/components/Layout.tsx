import React, { FC, useState } from 'react';
import Link from 'next/link';
import CSS from 'csstype';
import Image from 'next/image';

import { isLogined, logOut } from '../lib/utils';
import Back from '../public/back.jpg';
import Header from './Header';
import MenuBtn from './MenuBtn';


interface  IProps { 
  children: React.ReactNode
}
interface IState {
  auth: Boolean;
}

class Layout extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      auth: false,
    }
  }
  componentDidMount() {
    this.setState({ auth: isLogined() })
  }

  render() {
    const handlerLogOut = () => {
      logOut();
    }
    return (
      <div>
        <div className='bgWrap'>
          <Image 
            layout="fill"
            objectFit="cover"
            src= { Back }
            alt=""
            width={500}
            height={500}
          />
        </div>
        <Header>
          { 
          (!this.state.auth)
          ?
            <MenuBtn>
              <Link href='/login'>
                  Sign in
              </Link>
            </MenuBtn>
          :
          <div>
              <MenuBtn>
                <Link href='/weather'>
                  Weather
                </Link>
              </MenuBtn>
            <MenuBtn onClick={handlerLogOut}>
              Log out
            </MenuBtn>
          </div>
          }
        </Header>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
