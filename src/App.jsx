import { createContext, useState } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [counter, setCounter] = useState(0);
	return (
		<>
			<GlobalStyles />
			<CounterContext.Provider value={{ counter, setCounter }}>
				<Header />
				<Main />
			</CounterContext.Provider>
		</>
	);
};

export const CounterContext = createContext();

export default App;
