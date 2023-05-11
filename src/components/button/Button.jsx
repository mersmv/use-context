import { useContext } from "react";
import { CounterContext } from "../../App";

const Button = ({amount}) => {
	const{counter, setCounter} = useContext(CounterContext)
	return (
		<button onClick={() => setCounter(counter + amount)}>
			Incrementar en {amount} el contador.
		</button>
	);
};

export default Button;
