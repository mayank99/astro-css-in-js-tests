/** @jsxImportSource react */
import * as React from 'react';
import { style, cssRule } from 'typestyle';

export default function Counter(props: { children: React.ReactNode }) {
	const [count, setCount] = React.useState(0);
	const add = () => setCount((i) => i + 1);
	const subtract = () => setCount((i) => i - 1);

	return (
		<>
			<div className={wrapper}>
				<button onClick={subtract}>-</button>
				<pre>{count}</pre>
				<button onClick={add}>+</button>
			</div>
			<div className={message}>{props.children}</div>
		</>
	);
}

const globals = cssRule('body', {
	margin: 0,
	fontFamily: 'system-ui',
});

const wrapper = style({
	display: 'grid',
	fontSize: '2em',
	gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
	marginTop: '2em',
	placeItems: 'center',
	backgroundColor: 'hsl(0 0% 50% / 0.1)',
});

const message = style({
	textAlign: 'center',
});
