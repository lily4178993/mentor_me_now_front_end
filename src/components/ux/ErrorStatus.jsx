import PropTypes from 'prop-types';
import AlertStatus from '../AlertStatus';

/**
 * `ErrorStatus` is a functional component that renders an error message.
 * It uses the `AlertStatus` component and passes specific props to it.
 *
 * @component
 * @param {Object} props - The props that were defined by the caller of this component.
 * @param {string} props.error - The error message to display.
 * @example
 * // It can be used like this:
 * <ErrorStatus error="An error occurred" />
 */
const ErrorStatus = ({ error }) => (
  <div className="h-[420px] flex flex-col justify-center items-center text-primary-red">
    <p>Error when fetching information. Causes:</p>
    <AlertStatus className="text-lg" alertMessage={error} />
  </div>
);

ErrorStatus.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorStatus;
