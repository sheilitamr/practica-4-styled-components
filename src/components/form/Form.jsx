const Form = ({ formData, setFormData }) => {
	return (
		<>
			<form>
				<label htmlFor='day'>DAY</label>
				<input
					type='text'
					id='day'
					placeholder='DD'
					onChange={e => setFormData({ ...formData, day: e.target.value })}
				/>

				<label htmlFor='month'>MONTH</label>
				<input
					type='text'
					id='month'
					placeholder='MM'
					onChange={e => setFormData({ ...formData, month: e.target.value })}
				/>

				<label htmlFor='year'>YEAR</label>
				<input
					type='text'
					id='year'
					placeholder='YYYY'
					onChange={e => setFormData({ ...formData, year: e.target.value })}
				/>
			</form>
		</>
	);
};

export default Form;
