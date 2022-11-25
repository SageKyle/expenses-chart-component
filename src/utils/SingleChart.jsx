export const SingleChart = ({ amount, day }) => {
	const style = {
		expense: {
			height: amount,
		},
	};

	return (
		<div className={'charts__expense'}>
			{/* expense amount to be displayed on hover */}
			<h4 className="charts__expense--amount">${amount}</h4>
			{/* add an active class to 'wed' chart */}
			<div
				className={`${
					day === 'wed' ? 'charts__expense--bar active' : 'charts__expense--bar'
				}`}
				style={style.expense}
			></div>
			{/* expense day */}
			<p className="charts__expense--date">{day}</p>
		</div>
	);
};
