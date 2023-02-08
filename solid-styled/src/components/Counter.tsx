/** @jsxImportSource solid-js */
import { createSignal, JSX, ParentProps } from 'solid-js';
import { css } from 'solid-styled';

export default function Counter(props: ParentProps) {
	const [count, setCount] = createSignal(0);
	const add = () => setCount((i) => i + 1);
	const subtract = () => setCount((i) => i - 1);

	css`
		:global(body) {
			margin: 0;
			font-family: system-ui;
		}

		.wrapper {
			display: grid;
			font-size: 2em;
			grid-template-columns: repeat(3, minmax(0, 1fr));
			margin-top: 2em;
			place-items: center;
			background-color: hsl(0 0% 50% / 0.1);
		}

		.message {
			text-align: center;
		}
	`;

	return (
		<>
			<div class='wrapper'>
				<button onClick={subtract}>-</button>
				<pre>{count}</pre>
				<button onClick={add}>+</button>
			</div>
			<div class='message'>{props.children}</div>
		</>
	);
}
