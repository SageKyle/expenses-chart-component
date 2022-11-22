export const Total = ({ total, difference }) => {
	return (
		<div className="charts__total">
			<div className="charts__total--amount">
				<h3 className="charts__info">Total this month</h3>
				<h1 className="charts__total--expense">${total}</h1>
			</div>
			<div className="charts__total--saving">
				<h2 className="charts__total--difference">{difference}%</h2>
				<h3 className="charts__info">From last month</h3>
			</div>
		</div>
	);
};
