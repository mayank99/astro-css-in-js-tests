/** @jsxImportSource @emotion/react */
import * as React from 'react';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';

export default function Counter(props: { children: React.ReactNode }) {
	const [count, setCount] = React.useState(0);
	const add = () => setCount((i) => i + 1);
	const subtract = () => setCount((i) => i - 1);

	return (
		<>
			<Global styles={{ body: { margin: 0, fontFamily: 'system-ui' } }} />
			<Wrapper>
				<button onClick={subtract}>-</button>
				<pre>{count}</pre>
				<button onClick={add}>+</button>
			</Wrapper>
			<Message>{props.children}</Message>
		</>
	);
}

const Wrapper = styled.div`
	display: grid;
	font-size: 2em;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	margin-top: 2em;
	place-items: center;
	background-color: hsl(0 0% 50% / 0.1);
`;

const Message = styled.div`
	text-align: center;
`;
