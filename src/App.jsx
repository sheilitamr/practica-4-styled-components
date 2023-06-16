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

/* const calculateResult = (formData, setResultData, setError) => {
	const date = new Date();
	const currentYear = date.getFullYear();
	const currentMonth = date.getMonth() + 1;
	const currentDay = date.getDate();
	const yearForm = formData.year;

	const years = currentYear - yearForm;
	let totalMonths;
	let totalDays;

	if (yearForm > currentYear) {
		setError(true);
	} else {
		setResultData({ years, months: '', days: '' });
		setError(false);
	}

};
 */

const calculateResult = (formData, setResultData, setError) => {
	const today = new Date();
	const birthday = new Date(formData.year, formData.month - 1, formData.day);

	const millisecondsPerDay = 24 * 60 * 60 * 1000;
	const ageInMilliseconds = today - birthday;

	const totalDays = Math.floor(ageInMilliseconds / millisecondsPerDay);
	const totalMonths = Math.floor(totalDays / 30.44);
	const years = Math.floor(totalDays / 365.25);

	const days = totalDays - years;
};
export default App;
