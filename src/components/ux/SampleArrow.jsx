import React from 'react';
import PropTypes from 'prop-types';

/**
 * SampleArrow component. Displays a custom arrow for the Slider component.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.ariaLabel - The aria-label attribute for the arrow.
 * @param {string} props.className - The CSS class to apply to the arrow.
 * @param {Object} props.style - The CSS styles to apply to the arrow.
 * @param {Function} props.onClick - The function to call when the arrow is clicked.
 * @returns {JSX.Element} The rendered SampleArrow component.
 */
const SampleArrow = (props) => {
  const {
    ariaLabel, className, style, onClick,
  } = props;

  const arrowStyles = {
    nextArrow: {
      right: '0px',
      background: '#97BF0F',
      padding: '15px 30px 30px 10px',
      borderTopLeftRadius: '50%',
      borderBottomLeftRadius: '50%',
      zIndex: 10,
    },
    prevArrow: {
      left: '0px',
      background: '#BCBCBE',
      padding: '15px 30px 30px 10px',
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
      zIndex: 10,
    },
  };

  const customStyle = () => {
    if (className.includes('slick-next')) {
      return { ...style, ...arrowStyles.nextArrow };
    }
    return { ...style, ...arrowStyles.prevArrow };
  };

  return (
    <div
      className={`${className} flex justify-center items-center border-primary-blue`}
      style={customStyle()}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
    />
  );
};

SampleArrow.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  onClick: PropTypes.func,
};

SampleArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => {},
};

export default SampleArrow;
