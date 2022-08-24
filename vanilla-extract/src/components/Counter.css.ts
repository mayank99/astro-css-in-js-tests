import { style, globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
	margin: 0,
	fontFamily: 'sans-serif',
});

export const wrapper = style({
	display: 'grid',
	fontSize: '2em',
	gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
	marginTop: '2em',
	placeItems: 'center',
	backgroundColor: 'hsl(0 0% 50% / 0.1)',
});

export const message = style({
	textAlign: 'center',
});
