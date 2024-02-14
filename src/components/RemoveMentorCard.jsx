import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeMentor } from '../redux/slices/mentors/removeMentorSlice';

const RemoveMentorCard = ({
  id, name, photoUrl, about, removed,
}) => {
  const dispatch = useDispatch();

  return (
    <section className="flex flex-col md:flex-row items-center relative md:w-auto p-4 rounded-md shadow-md w-full md:basis-[500px] gap-6">
      <div className="h-[200px] flex justify-center items-center relative">
        <div className="h-[130px] w-[130px] rounded-full bg-gray-100">
          <img
            src={photoUrl}
            alt={name}
            className="h-[150px] w-[150px] absolute top-[1rem] left-[10px] object-contain rounded-b-sm"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-start md:items-start">
        <h3 className="text-lg font-semibold text-[#111111]">{name}</h3>
        <p className="text-gray-700 text-center md:text-left">{about}</p>
        {removed ? (
          <button
            type="button"
            className="bg-primary-green border-2 border-primary-green text-white mt-2 hover:bg-primary-green/80 hover:text-white transition-all duration-500  px-4 py-1 rounded"
            onClick={() => dispatch(removeMentor(id))}
          >
            Restore
          </button>
        ) : (
          <button
            type="button"
            className="bg-transparent border-2 border-red-500 text-red-500 mt-2 hover:bg-red-500 hover:text-white transition-all duration-500  px-4 py-1 rounded"
            onClick={() => dispatch(removeMentor(id))}
          >
            Remove
          </button>
        )}
      </div>
    </section>
  );
};

RemoveMentorCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  removed: PropTypes.bool.isRequired,
};

export default RemoveMentorCard;
