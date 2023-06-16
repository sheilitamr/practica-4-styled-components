const Result = ({ resultData }) => {
	return (
		<>
			<p>{resultData.years || '--'}</p>
			<span>Years</span>

			<p>{resultData.months || '--'}</p>
			<span>Months</span>

			<p>{resultData.days || '--'}</p>
			<span>Days</span>
		</>
	);
};

export default Result;
