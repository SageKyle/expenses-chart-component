// styles
import './Charts.scss';

import Data from '../db/data.json';
import { SingleChart } from '../utils/SingleChart';

export const Charts = () => {
	return (
		<div className="charts">
			{Data.map((chart) => (
				// <div className="chartitem" key={chart.day}>
				// 	<h4>{chart.day}</h4>
				// 	<p>{chart.amount}</p>
				// </div>
				<SingleChart key={chart.day} amount={chart.amount} day={chart.day} />
			))}
		</div>
	);
};
