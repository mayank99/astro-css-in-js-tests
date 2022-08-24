import * as React from 'react';
import { wrapper, message } from './Counter.css';

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
