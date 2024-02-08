import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useRandomBackgroundColor from '../hooks/useRandomBackgroundColor';

const MentorCard = ({
  id, name, image, about,
}) => {
  const bgColor = useRandomBackgroundColor();

  return (
    <Link to={`/mentors/${id}`}>
      <section className="bg-white border-red-500 h-auto text-primary-black">
        <div className="h-[300px] flex justify-center items-center relative">
          <div
            style={{ backgroundColor: bgColor }}
            className="h-[180px] w-[180px] rounded-full"
          >
            <img
              src={image}
              alt={name}
              className="h-[250px] w-[250px] absolute top-0 right-[80px] object-contain rounded-b-sm"
            />
          </div>
        </div>
        <div className="h-auto flex flex-col justify-start items-center gap-4 px-4 py-8 border relative">
          <h2 className="text-xl font-semibold text-primary-black">{name}</h2>
          <div className="w-1/2 border-0 border-t-[2px] border-t-primary-gray/50 border-dotted" />
          <p className="text-sm text-center w-[28ch] leading-7 text-gray-700">
            {about}
          </p>
          <div className="flex h-auto items-center gap-4">
            <button
              type="button"
              className="border text-xs h-[45px] w-[45px] text-primary-gray hover:text-primary-black focus:text-primary-black hover:animate-bounce focus:animate-bounce px-3 py-2 bg-transparent border-primary-gray rounded-full"
            >
              S
            </button>
            <button
              type="button"
              className="border text-xs h-[45px] w-[45px] text-primary-gray hover:text-primary-black focus:text-primary-black hover:animate-bounce focus:animate-bounce px-3 py-2 bg-transparent border-primary-gray rounded-full"
            >
              V
            </button>
            <button
              type="button"
              className="border text-xs h-[45px] w-[45px] text-primary-gray hover:text-primary-black focus:text-primary-black hover:animate-bounce focus:animate-bounce px-3 py-2 bg-transparent border-primary-gray rounded-full"
            >
              G
            </button>
          </div>
        </div>
      </section>
    </Link>
  );
};

MentorCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default MentorCard;
