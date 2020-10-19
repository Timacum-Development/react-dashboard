import React from 'react';
import {UnorderedList, ListItem, Link, Icon} from './style';

// Assets
import Icon1 from '../../assets/Dashboard Icon.svg';
import Icon2 from '../../assets/Chat Icon.svg';
import Icon3 from '../../assets/Notifications Icon.svg';
import Icon4 from '../../assets/Favourites Icon.svg';
import Icon5 from '../../assets/Cart Icon.svg';
import Icon6 from '../../assets/Profile Icon.svg';



const Nav = () => {
	return (
		<UnorderedList>
			<ListItem>
				<Icon src={Icon1}/>
				<Link>Dashboard</Link>
			</ListItem>
			<ListItem>
				<Icon src={Icon2}/>
				<Link>Messages</Link>
			</ListItem>
			<ListItem>
				<Icon src={Icon3}/>
				<Link>Notifications</Link>
			</ListItem>
			<ListItem>
				<Icon src={Icon4}/>
				<Link>Favourites</Link>
			</ListItem>
			<ListItem>
				<Icon src={Icon5}/>
				<Link>Shopping Cart</Link>
			</ListItem>
			<ListItem>
				<Icon src={Icon6}/>
				<Link>My Profile</Link>
			</ListItem>
		</UnorderedList>
	);
};

export default Nav;
