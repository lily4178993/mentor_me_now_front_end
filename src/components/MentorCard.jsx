import PropTypes from 'prop-types';

const MentorCard = ({
  name, image, about, backgroundColor,
}) => (
  <div className="bg-white h-[420px] text-primary-black my-4">
    <div className="h-36 mx-2 flex justify-center items-center relative">
      <div className={`h-36 w-36 rounded-full bg-${backgroundColor}`}>
        <img
          src={image}
          alt={name}
          className="h-48 w-48 rounded-b-full -mt-9 -ml-8"
        />
      </div>
    </div>
    <div className="h-56 flex flex-col justify-stretch items-center gap-2 p-4 relative">
      <h2 className="text-xl font-extrabold">{name}</h2>
      <div className="w-1/2 border-0 border-t-[2px] border-t-primary-gray/50 border-dotted">
        {' '}
      </div>
      <p className="text-center text-sm">{about}</p>
      <div className="h-20 flex items-center gap-4 absolute bottom-0">
        <button
          type="button"
          className="text-xs text-primary-gray/70 hover:text-primary-black focus:text-primary-black hover:animate-bounce focus:animate-bounce px-3 py-2 bg-transparent border-primary-gray/50 rounded-full"
        >
          S
        </button>
        <button
          type="button"
          className="text-xs text-primary-gray/70 hover:text-primary-black focus:text-primary-black hover:animate-bounce focus:animate-bounce px-3 py-2 bg-transparent border-primary-gray/50 rounded-full"
        >
          V
        </button>
        <button
          type="button"
          className="text-xs text-primary-gray/70 hover:text-primary-black focus:text-primary-black hover:animate-bounce focus:animate-bounce px-3 py-2 bg-transparent border-primary-gray/50 rounded-full"
        >
          G
        </button>
      </div>
    </div>
  </div>
);

MentorCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default MentorCard;
