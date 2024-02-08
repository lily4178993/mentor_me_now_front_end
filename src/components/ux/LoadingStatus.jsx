import AlertStatus from '../AlertStatus';

/**
 * `LoadingStatus` is a functional component that renders
 an alert message indicating a loading state.
 * It uses the `AlertStatus` component and passes specific props to it.
 *
 * @component
 * @example
 * // It can be used like this:
 * <LoadingStatus />
 */
const LoadingStatus = () => (
  <AlertStatus
    className="h-[420px] flex justify-center items-center animate-bounce text-lg uppercase text-primary-orange"
    alertMessage="Loading..."
  />
);

export default LoadingStatus;
