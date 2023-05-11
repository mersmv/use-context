import { useContext } from 'react';
import Button from '../button/Button';
import { CounterContext } from '../../App';

const Main = () => {
	const { counter, setCounter } = useContext(CounterContext);
	return (
		<main>
			<Button amount={1} />
			<Button amount={2} />
			<Button amount={3} />
		</main>
	);
};

export default Main;
