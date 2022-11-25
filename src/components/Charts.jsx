// styles
import './Charts.scss';
// components/utils
import Data from '../db/data.json';
import { useGetSum } from '../hooks/useGetSum';
import { SingleChart } from '../utils/SingleChart';
import { Total } from '../utils/Total';

export const Charts = () => {
	// get total sum of expenses
	const total = Data.reduce(useGetSum, 0);
	const difference = '+2.4';

	return (
		<div className="charts">
			<h2 className="charts__title">Spending - Last 7 days</h2>
			<section className="charts__container">
				{Data.map((chart) => (
					<SingleChart key={chart.day} amount={chart.amount} day={chart.day} />
				))}
			</section>
			<article className="charts__summary">
				{<Total total={total} difference={difference} />}
			</article>
		</div>
	);
};
