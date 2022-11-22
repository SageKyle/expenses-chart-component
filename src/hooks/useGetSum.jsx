export const useGetSum = (accumulator, initialValue) => {
	const total = accumulator + initialValue.amount;

	return total;
};
