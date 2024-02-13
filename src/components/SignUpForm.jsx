import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../redux/slices/auth/authSlice';
import { bgVideo } from '../assets';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error: authError } = useSelector((state) => state.auth);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const actionResult = await dispatch(signIn(username));
    if (signIn.fulfilled.match(actionResult)) {
      event.target.reset();
      navigate('/login');
    }
  };

  return (
    <div className="h-screen absolute top-0 left-0 w-full bg-video flex justify-center items-center">
      <div className="bg-[#111111]/50 w-full h-full flex justify-center items-center z-10">
        <div className="backdrop-blur-lg rounded-md px-8 py-[3rem] max-w-xl flex flex-col justify-start items-center">
          <h1 className="text-3xl text-gray-200 font-semibold mb-4">Create Account</h1>
          {authError && (
            <p className="text-red-500">
              {authError.includes('422')
                ? 'The username you`ve selected is already taken. Please choose a different one.'
                : authError}
            </p>
          )}
          <form onSubmit={handleSubmit} className="z-10">
            <div className="mt-4">
              <input
                type="text"
                className="rounded p-2 px-4 border"
                name="username"
                id="username"
                required
                placeholder="Your Username"
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="py-2 px-4 w-full rounded bg-primary-green text-white"
              >
                {loading ? 'Signing up...' : 'Sign Up'}
              </button>
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-200">
                Already have an account?
                {' '}
                <span>
                  <Link
                    to="/login"
                    className="text-blue-500 cursor-pointer hover:underline"
                  >
                    Login
                  </Link>
                </span>
                {' '}
              </p>
            </div>
          </form>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        className="z-0 absolute w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SignUpForm;
