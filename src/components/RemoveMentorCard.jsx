import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeMentor } from '../redux/slices/mentors/removeMentorSlice';

const RemoveMentorCard = ({
  id, name, photoUrl, about, removed,
}) => {
  const dispatch = useDispatch();

  const handleRemoveMentor = (id) => {
    // console.log(`Removing mentor with ID: ${id}`);
    dispatch(removeMentor(id));
  };

  return (
    <>
      <section className="flex flex-col md:max-w-lg md:flex-row items-center relative lg:w-auto p-4 rounded-md shadow-md w-full md:basis_[500px] gap-6">
        <div className="h_[200px] flex justify-center items-center relative">
          <div className="h_[130px] w_[130px] rounded-full bg-gray-100">
            <img
              src={photoUrl}
              alt={name}
              className="h_[150px] w_[150px] absolute top_[1rem] left_[10px] object-contain rounded-b-sm"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start md:items-start">
          <h3 className="text-lg font-semibold text_[#111111]">{name}</h3>
          <p className="text-gray-700 text-center md:text-left">{about}</p>
          {removed ? (
            <button
              type="button"
              className="bg-primary-green border-2 border-primary-green text-white mt-2 hover:bg-primary-green/80 hover:text-white transition-all duration-500  px-4 py-1 rounded"
              onClick={() => handleRemoveMentor(id)}
            >
              Activate
            </button>
          ) : (
            <button
              type="button"
              className="bg-transparent border-2 border-red-500 text-red-500 mt-2 hover:bg-red-500 hover:text-white transition-all duration-500  px-4 py-1 rounded"
              onClick={() => handleRemoveMentor(id)}
            >
              Deactivate
            </button>
          )}
        </div>
      </section>
    </>
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
