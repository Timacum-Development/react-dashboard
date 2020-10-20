import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderWrap, LogoWrap, User, UserImg, UserName } from '../Header/style';
import { Dots, Dot } from '../../../containers/pages/Homepage/style';

// Assets
import logo from '../../../assets/logo.svg';
import Nav from '../Nav';
import Avatar from '../../../assets/Avatar.png';

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
				<User>
					<UserImg src={Avatar} />
					<UserName>Arjun Makwana</UserName>
					<Dots>
						<Dot />
						<Dot />
						<Dot />
					</Dots>
				</User>
			</nav>
		</HeaderWrap>
	);
};

export default Header;
