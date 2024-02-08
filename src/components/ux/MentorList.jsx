import PropTypes from 'prop-types';
import Slider from 'react-slick';
import MentorCard from '../MentorCard';

/**
 * `MentorList` is a functional component that renders
 a list of `MentorCard` components within a `Slider`.
 * It accepts an array of mentor objects and slider settings as props.
 *
 * @component
 * @param {Object} props - The props that were defined by the caller of this component.
 * @param {Array} props.mentors - The array of mentor objects to display.
 * @param {Object} props.settings - The settings for the `Slider` component.
 * @example
 * // It can be used like this:
 * <MentorList mentors={mentors} settings={settings} />
 */
const MentorList = ({ mentors, settings }) => (
  <>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Slider {...settings}>
      {mentors?.map((mentor) => (
        <MentorCard
          key={mentor.id}
          name={mentor.name}
          image={mentor.photo_url}
          about={mentor.about}
        />
      ))}
    </Slider>
  </>
);

MentorList.propTypes = {
  mentors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    photo_url: PropTypes.string,
    about: PropTypes.string,
  })).isRequired,
  settings: PropTypes.shape({}).isRequired,
};

export default MentorList;
