import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../redux/slices/auth/authSlice';

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authError = useSelector((state) => state.auth.error);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const actionResult = await dispatch(signIn(username));
    if (signIn.fulfilled.match(actionResult)) {
      event.target.reset();
      navigate('/mentors');
    }
  };

  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div>
        <h1 className="text-3xl font-medium mb-4">Sign In</h1>
        {authError && (
        <p className="text-red-500">
          {authError}
          {' '}
          <br />
          {' '}
          The username you`ve selected is already taken. Please choose a different one.
        </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <input
              type="text"
              className="rounded p-2 px-4 border"
              name="username"
              id="username"
              required
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="py-2 px-4 rounded bg-primary-green text-white"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
