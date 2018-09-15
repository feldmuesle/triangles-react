import React from 'react';

const Input = ({label, type, name, value, placeholder, handleInput}) => {

	return (
		<label>
			<span>{label}</span>
			<input type={type}
				value={value}
				placeholder={placeholder}
				onChange={handleInput}
				name={name} />
		</label>
	);
}

export default Input;