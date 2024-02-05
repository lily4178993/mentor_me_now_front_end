import { useDispatch } from 'react-redux';
import { setUsername } from '../redux/authSlice';

const SignInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    dispatch(setUsername(username));
  };

  return (
    <div className="h-[100vh] border flex justify-center items-center">
      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>
        <div className="border mt-4">
          <input
            type="text"
            className="rounded p-2"
            name="username"
            id="username"
          />
        </div>
        <div className="border-2 mt-4">
          <button type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
