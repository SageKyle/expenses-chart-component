export const SingleChart = ({ amount, day }) => {
	const style = {
		expense: {
			backgroundColor: 'hsl(10, 79%, 65%)',
			height: amount + 100,
		},
	};

	return (
		<div className={'charts__expense'}>
			<div
				className={`${
					day === 'wed'
						? 'charts__expense--amount active'
						: 'charts__expense--amount'
				}`}
				title={amount}
				style={style.expense}
			></div>
			<p className="charts__expense--date">{day}</p>
		</div>
	);
};
