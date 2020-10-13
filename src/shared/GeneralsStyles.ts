import { createGlobalStyle } from 'styled-components';
import { color, font } from './utils/styles';

export default createGlobalStyle`
	html, body, #root {
		height: 100%;
		min-height: 100%;
		margin: 0;
		overflow: hidden;

		&.ReactModal__Body--open {
			.ReactModalPortal > * {
				opacity: 1
			}
		}
	}

	body {
		background-color: ${color.background};
		color:  ${color.base};
		-webkit-tap-highlight-color: transparent;
		font-size: 100%;
		${font.regular};
		background-color: ${color.background};
	}

	*, *:after, *:before, input[type="search"] {
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		color: inherit;
		transition: opacity .25s;

		&:hover {
			opacity: .5;
		}
	}

	ul {
		list-style: none;
	}

	ul, li, ol, dd, h1, h2, h3, h4, h5, h6, p {
		padding: 0;
		margin: 0;
	}

	button {
		background: none;
		border: none;
	}

	/* Workaround for IE11 focus highlighting for select elements */
	select::-ms-value {
		background: none;
		color: #42413d;
	}

	[role="button"], button, input, select, textarea {
		outline: none;
		&:focus {
			outline: none;
		}
		&:disabled {
			opacity: 1;
		}
	}

	[role="button"], button, input, textarea {
		appearance: none;
	}

	select:-moz-focusring {
		color: transparent;
		text-shadow: 0 0 0 #000;
	}

	select::-ms-expand {
		display: none;
	}

	.is-active {
		color: ${color.primary};

		span {
			font-weight: bold;
		}

		svg path {
			color: ${color.primary};
		}
	}

	.container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		flex: 1;
	}

	.row {
		display: flex;
		justify-content: center;

		@media (max-width: 768px) {
			padding: 0 30px;
			box-sizing: border-box;
		}

		@media (max-width: 525px) {
			padding: 0 20px;
			flex-wrap: wrap;
			max-height: 370px;
			margin-bottom: 30px;
		}
	}


	body, select {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	html {
		touch-action: manipulation;
	}
`;
