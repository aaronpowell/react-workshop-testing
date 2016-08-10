import React from 'react';

const Input = ({ id, type = 'text', value, label, onChange }) => (
    <div>
        <label htmlFor={id}>{label}: </label>
        <input type={type} id={id} value={value} onChange={onChange} />
    </div>
);

export default Input;
