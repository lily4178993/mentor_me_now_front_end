import PropTypes from 'prop-types';
import MentorCard from '../MentorCard';

const MentorList = ({ mentors }) => (
  <div className="max-w-7xl border-orange-500">
    {/* NEW SLIDERR WILL BE ADDED HER... MAYBE */}
    {/* <Slider> */}
    {mentors?.map((mentor) => (
      <MentorCard
        key={mentor.id}
        id={mentor.id}
        name={mentor.name}
        image={mentor.photo_url}
        about={mentor.about}
      />
    ))}
    {/* </Slider> */}
  </div>
);

MentorList.propTypes = {
  mentors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      photo_url: PropTypes.string,
      about: PropTypes.string,
    }),
  ).isRequired,
};

export default MentorList;
