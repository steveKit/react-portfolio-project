import { createGlobalStyle } from "styled-components"

export const breakpoints = { tablet: "600px" };

const GlobalStyle = createGlobalStyle`

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		--primary-color: #9fa4a8;
		--secondary-color: #bec0c2;
		--dark-secondary-color: #414344;
		--dark-primary-color: #181b1f;
		--accent-color: #6f8079;
		--secondary-accent-color: #fa8e7f;
		--tertiary-accent-color: #e6cda1;
		font-family: 'Space Grotesk', sans-serif;
		line-height: 1.1;
	}
	a {
		text-decoration: none;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	h1{
		font-family: 'Poppins', sans-serif;;
	}
`;

export default GlobalStyle;