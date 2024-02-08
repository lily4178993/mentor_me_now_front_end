import PropTypes from 'prop-types';
import useRandomBackgroundColor from '../hooks/useRandomBackgroundColor';

const MentorCard = ({ name, image, about }) => {
  const bgColor = useRandomBackgroundColor();

  return (
    <div className="bg-white h-[450px] text-primary-black my-4">
      <div className="h-40 mx-2 pt-2 flex justify-center items-center relative">
        <div style={{ backgroundColor: bgColor }} className="h-40 w-40 rounded-full">
          <img
            src={image}
            alt={name}
            className="h-48 w-48 rounded-b-sm -mt-8 -ml-2"
          />
        </div>
      </div>
      <div className="h-56 flex flex-col justify-stretch items-center gap-4 p-8 relative">
        <h2 className="text-xl font-extrabold">{name}</h2>
        <div className="w-1/2 border-0 border-t-[2px] border-t-primary-gray/50 border-dotted" />
        <p className="text-sm">{about}</p>
        <div className="h-20 flex items-center gap-4 absolute bottom-0">
          <button type="button" className="border text-xs text-primary-gray hover:text-primary-black focus:text-primary-black hover:animate-bounce focus:animate-bounce px-3 py-2 bg-transparent border-primary-gray rounded-full">S</button>
          <button type="button" className="border text-xs text-primary-gray hover:text-primary-black focus:text-primary-black hover:animate-bounce focus:animate-bounce px-3 py-2 bg-transparent border-primary-gray rounded-full">V</button>
          <button type="button" className="border text-xs text-primary-gray hover:text-primary-black focus:text-primary-black hover:animate-bounce focus:animate-bounce px-3 py-2 bg-transparent border-primary-gray rounded-full">G</button>
        </div>
      </div>
    </div>
  );
};

MentorCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default MentorCard;
