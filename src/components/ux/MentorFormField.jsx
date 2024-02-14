import React from 'react';
import PropTypes from 'prop-types';

const MentorFormField = ({
  label, type, name, value, onChange, placeholder,
}) => (
  <div className="form-row">
    <label htmlFor={name} className="form-label sr-only">
      {label}
    </label>
    <input
      type={type}
      name={name}
      className="py-2 px-4 shadow-sm w-full placeholder:text-gray-400 border my-2 rounded"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

MentorFormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MentorFormField;
