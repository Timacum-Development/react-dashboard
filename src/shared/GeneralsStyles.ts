import { createGlobalStyle } from 'styled-components';
import { color, font } from './utils/styles';

export default createGlobalStyle`
	html, body, #root {
		height: 100%;
		min-height: 100%;
		margin: 0;
		overflow: hidden;
		font-family: 'Roboto', sans-serif;
		box-sizing: border-box;
		font-size: 16px;
	}

	a {
		text-decoration: none;
	}

	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	a {
		text-align: left;
		letter-spacing: 0px;
		margin: 0;
	}

	.App {
		height: 100%;
		display: flex;
		flex-wrap: wrap;
	}

`;
