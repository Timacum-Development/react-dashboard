import React from 'react';
import { UnorderedList, ListItem, Link, Icon, Arrow } from './style';

// Assets
import Icon1 from '../../assets/Dashboard Icon.svg';
import Icon2 from '../../assets/Chat Icon.svg';
import Icon3 from '../../assets/Notifications Icon.svg';
import Icon4 from '../../assets/Favourites Icon.svg';
import Icon5 from '../../assets/Cart Icon.svg';
import Icon6 from '../../assets/Profile Icon.svg';
import ArrowImg from '../../assets/Arrow Icon.svg';

const Nav = () => {
	return (
		<UnorderedList>
			<ListItem>
				<Link>
					<Icon src={Icon1} />
					Dashboard
					<Arrow src={ArrowImg} />
				</Link>
			</ListItem>
			<ListItem>
				<Link>
					<Icon src={Icon2} />
					Messages
					<Arrow src={ArrowImg} />
				</Link>
			</ListItem>
			<ListItem>
				<Link>
					<Icon src={Icon3} />
					Notifications
					<Arrow src={ArrowImg} />
				</Link>
			</ListItem>
			<ListItem>
				<Link>
					<Icon src={Icon4} />
					Favourites
					<Arrow src={ArrowImg} />
				</Link>
			</ListItem>
			<ListItem>
				<Link>
					<Icon src={Icon5} />
					Shopping Cart
					<Arrow src={ArrowImg} />
				</Link>
			</ListItem>
			<ListItem>
				<Link>
					<Icon src={Icon6} />
					My Profile
					<Arrow src={ArrowImg} />
				</Link>
			</ListItem>
		</UnorderedList>
	);
};

export default Nav;
