import React from 'react';
import { NavLink } from 'react-router-dom';

// Assets
import logo from '../../../assets/logo.svg';
import Nav from '../Nav';

const Header = () => {
	return (
		<nav>
			<NavLink to='/'>
				<img src={logo} alt='' />
			</NavLink>
			<Nav />
			Arjun Makwana
		</nav>
	);
};

export default Header;
