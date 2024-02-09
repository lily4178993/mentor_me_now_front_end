import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeMentor } from '../redux/slices/mentors/removeMentorSlice';

const RemoveMentorCard = ({ id, name, photoUrl, about }) => {
  const dispatch = useDispatch();

  return (
    <section className="flex items-center border w-auto p-4 rounded-md shadow-sm basis-[400px]">
      <div className="h-[100px] w-[100px]">
        <img
          src={photoUrl}
          alt={name}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-col justify-start items-start">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-gray-700">{about}</p>
        <button
          type="button"
          className="bg-transparent border-2 border-red-500 text-red-500 mt-2 hover:bg-red-500 hover:text-white transition-all duration-500  px-4 py-1 rounded"
          onClick={() => dispatch(removeMentor(id))}
        >
          Remove
        </button>
      </div>
    </section>
  );
};

RemoveMentorCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default RemoveMentorCard;
