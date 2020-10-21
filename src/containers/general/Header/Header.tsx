import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	HeaderWrap,
	LogoWrap,
	User,
	UserImg,
	UserName,
	LogoMain,
	Admin,
	AdminLink,
	Navigation,
} from '../Header/style';
import { Dots, Dot } from '../../../containers/pages/Homepage/style';

// Assets
import logo from '../../../assets/logo.svg';
import Nav from '../Nav';
import Avatar from '../../../assets/Avatar.png';

const Header = () => {
	return (
		<HeaderWrap>
			<Navigation>
				<LogoWrap>
					<AdminLink as={NavLink} to='/'>
						<LogoMain src={logo} alt='' />
						<Admin>Admin Dashboard</Admin>
					</AdminLink>
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
			</Navigation>
		</HeaderWrap>
	);
};

export default Header;
