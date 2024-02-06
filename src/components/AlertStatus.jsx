import React from 'react';
import PropTypes from 'prop-types';

/**
 * AlertStatus component. Displays an alert message with a given CSS class.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.alertMessage - The alert message to display.
 * @param {string} props.className - The CSS class to apply to the alert.
 * @returns {JSX.Element} The rendered AlertStatus component.
 */
const AlertStatus = (props) => {
  const { alertMessage, className } = props;

  return (
    <div className={className}>
      <p>{alertMessage}</p>
    </div>
  );
};

AlertStatus.propTypes = {
  alertMessage: PropTypes.string,
  className: PropTypes.string,
};

AlertStatus.defaultProps = {
  alertMessage: PropTypes.string,
  className: PropTypes.string,
};

export default AlertStatus;
