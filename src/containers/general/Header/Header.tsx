import React from 'react';
import { NavLink } from 'react-router-dom';
import {HeaderWrap, LogoWrap} from '../Header/style';

// Assets
import logo from '../../../assets/logo.svg';
import Nav from '../Nav';

const Header = () => {
	return (
		<HeaderWrap>
		<nav>
			<LogoWrap>
				<NavLink to='/'>
				<img src={logo} alt='' />
				Admin Dashboard
				</NavLink>
			</LogoWrap>
			<Nav />
			Arjun Makwana
		</nav>
		</HeaderWrap>
	);
};

export default Header;
