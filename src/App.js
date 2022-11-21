import './App.scss';

import { Charts } from './components/Charts';
import { Balance } from './utils/Balance';

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
