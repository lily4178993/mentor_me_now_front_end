import PropTypes from 'prop-types';
import Slider from 'react-slick';
import MentorCard from '../MentorCard';

const MentorList = ({ mentors, settings }) => (
  <div className="border max-w-7xl border-orange-500">
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Slider {...settings}>
      {mentors?.map((mentor) => (
        <MentorCard
          key={mentor.id}
          id={mentor.id}
          name={mentor.name}
          image={mentor.photo_url}
          about={mentor.about}
        />
      ))}
    </Slider>
  </div>
);

MentorList.propTypes = {
  mentors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      photo_url: PropTypes.string,
      about: PropTypes.string,
    })
  ).isRequired,
  settings: PropTypes.shape({}).isRequired,
};

export default MentorList;
