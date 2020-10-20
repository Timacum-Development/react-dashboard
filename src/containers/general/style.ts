import styled from 'styled-components';
import { Z_BLOCK } from 'zlib';

export const UnorderedList = styled.ul`
    padding: 218px 0 200px;
    margin: 0;
    list-style-type: none;
}
`;

export const ListItem = styled.li`
	width: 372px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	transition: 0.05s;
	color: #858997;
	border-top-right-radius: 70px 80px;
	border-bottom-right-radius: 70px 80px;

	&:hover {
		background: transparent linear-gradient(323deg, #1d2339 0%, #10121a 100%) 0%
			0% no-repeat padding-box;
		opacity: 1;
		color: white;
	}
`;

export const Link = styled.a`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 20px;
	cursor: pointer;
`;

export const Icon = styled.img`
	display: block;
	width: 32px;
	height: 32px;
`;

export const Arrow = styled.img`
	display: block;
	width: 21px;
	height: 21px;
`;
