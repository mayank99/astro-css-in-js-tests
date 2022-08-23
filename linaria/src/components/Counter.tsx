import * as React from 'react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';

export default function Counter(props: { children: React.ReactNode }) {
	const [count, setCount] = React.useState(0);
	const add = () => setCount((i) => i + 1);
	const subtract = () => setCount((i) => i - 1);

	return (
		<>
			<Wrapper>
				<button onClick={subtract}>-</button>
				<pre>{count}</pre>
				<button onClick={add}>+</button>
			</Wrapper>
			<div className={message}>{props.children}</div>
		</>
	);
}

export const globals = css`
	:global(body) {
		margin: 0;
		font-family: system-ui;
	}
`;

const Wrapper = styled.div`
	display: grid;
	font-size: 2em;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	margin-top: 2em;
	place-items: center;
	background-color: hsl(0 0% 50% / 0.1);
`;

const message = css`
	text-align: center;
`;
