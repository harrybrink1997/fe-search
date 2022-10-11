import { useState } from "react";
import CounterButton from "../components/CounterButton";

export default function Home() {
	const [counter, setCounter] = useState<number>(0);

	return (
		<div>
			<CounterButton setCounter={setCounter}
				value={-1} />
			<h1>{counter}</h1>
			<CounterButton setCounter={setCounter}
				value={1} />
		</div>
	);
}
