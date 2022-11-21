import './App.scss';

import { Balance } from './components/Balance';
import { Charts } from './components/Charts';

function App() {
	const balance = 924.18;

	return (
		<div className="App">
			<Balance balance={balance} />
			<Charts />
		</div>
	);
}

export default App;
