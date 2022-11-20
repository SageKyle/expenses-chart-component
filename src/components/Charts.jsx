import { Balance } from './Balance';

// styles
import './Charts.scss';

const balance = 924.18;

export const Charts = () => {
	return (
		<div className="chart">
			<Balance balance={balance} />
			<h3>This is the main chart container</h3>
		</div>
	);
};
