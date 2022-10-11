import { Dispatch, SetStateAction } from "react";

interface IProps {
	value: number;
	setCounter: Dispatch<SetStateAction<number>>;
}

export default function CounterButton({ value,
	setCounter }: IProps) {
	const handleCounter = () => {
		setCounter((prev) => prev + value);
	};

	return (
		<button onClick={handleCounter}>
			{value === 1 ? "Increment" : "Decrement"}
		</button>
	);
}
