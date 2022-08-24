/** @jsxImportSource react */
import * as React from 'react';
import { styled, css, globalCss } from '@stitches/react';

export default function Counter(props: { children: React.ReactNode }) {
	const [count, setCount] = React.useState(0);
	const add = () => setCount((i) => i + 1);
	const subtract = () => setCount((i) => i - 1);

	globals();

	return (
		<>
			<Wrapper>
				<button onClick={subtract}>-</button>
				<pre>{count}</pre>
				<button onClick={add}>+</button>
			</Wrapper>
			<div className={message()}>{props.children}</div>
		</>
	);
}

const globals = globalCss({
	body: { margin: 0, fontFamily: 'system-ui' },
});

const Wrapper = styled('div', {
	display: 'grid',
	fontSize: '2em',
	gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
	marginTop: '2em',
	placeItems: 'center',
	backgroundColor: 'hsl(0 0% 50% / 0.1)',
});

const message = css({
	textAlign: 'center',
});
