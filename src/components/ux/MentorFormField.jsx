import React from 'react';
import PropTypes from 'prop-types';

const MentorFormField = ({
  label, type, name, value, onChange,
}) => (
  <div className="form-row">
    <label htmlFor={name} className="form-label">
      <span className="add_mentor_label">{label}</span>
      <input type={type} name={name} value={value} onChange={onChange} />
    </label>
  </div>
);

MentorFormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MentorFormField;
