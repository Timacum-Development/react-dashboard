import { createGlobalStyle } from 'styled-components';
import { color, font } from './utils/styles';

export default createGlobalStyle`
	html, body, #root {
		height: 100%;
		min-height: 100%;
		margin: 0;
		overflow: hidden;
	}
`;
