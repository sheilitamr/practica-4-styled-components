import { useState } from 'react';
import Form from './components/form/Form';
import Result from './components/result/Result';

const App = () => {
	const [error, setError] = useState(false);
	const [formData, setFormData] = useState({
		day: '',
		month: '',
		year: ''
	});

	const [resultData, setResultData] = useState({
		years: '',
		months: '',
		days: ''
	});

	return (
		<>
			<Form formData={formData} setFormData={setFormData} />
			<button
				onClick={() => calculateResult(formData, setResultData, setError)}
			>
				Calcular
			</button>
			{error && <p>La fecha no es válida</p>}
			<Result resultData={resultData} />
		</>
	);
};

const calculateResult = (formData, setResultData, setError) => {
	const today = new Date();
	const birthday = new Date(formData.year, formData.month - 1, formData.day);

	const millisecondsPerDay = 24 * 60 * 60 * 1000;
	const ageInMilliseconds = today - birthday;
	let years = Math.floor(ageInMilliseconds / (365.25 * millisecondsPerDay));
	let totalMonths = Math.floor(
		(ageInMilliseconds % (365.25 * millisecondsPerDay)) /
			(30.44 * millisecondsPerDay)
	);
	let totalDays = Math.floor(
		(ageInMilliseconds % (30.44 * millisecondsPerDay)) / millisecondsPerDay
	);
	if (totalMonths === 12) {
		years++;

		totalMonths = 0;
	}

	if (totalDays === Math.floor(30.44)) {
		totalMonths++;

		totalDays = 0;
	}
	setResultData({ years, months: totalMonths, days: totalDays });
};
export default App;
