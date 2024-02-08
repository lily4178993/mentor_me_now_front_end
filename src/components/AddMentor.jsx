/* eslint-disable camelcase */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMentorToServer } from '../redux/slices/mentor/addMentorSlice';
import '../modules/addMentor.css';

const AddMentor = () => {
  const [formData, setFormData] = useState({
    name: '',
    occupation: '',
    about: '',
    hourly_fee: 0,
    year_of_experience: 0,
    location: '',
    skills: '',
    photo_url: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMentorToServer(formData));
  };

  return (
    <form className="add_mentor_form">
      <label htmlFor="name" className="form-label">
        Name
        {' '}
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>

      <label htmlFor="occupation" className="form-label">
        {' '}
        Occupation
        <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} />
      </label>

      <label htmlFor="about" className="form-label">
        {' '}
        About
        <input type="text" name="about" value={formData.about} onChange={handleChange} />
      </label>

      <label htmlFor="shourly_fee" className="form-label">
        {' '}
        Hourly fee
        <input type="decimal" name="hourly_fee" step="0.01" value={formData.hourly_fee} onChange={handleChange} />
      </label>

      <label htmlFor="year_of_experience" className="form-label">
        {' '}
        Year of experience
        <input type="number" name="year_of_experience" value={formData.year_of_experience} onChange={handleChange} />
      </label>

      <label htmlFor="location" className="form-label">
        {' '}
        location
        <input type="text" name="location" value={formData.location} onChange={handleChange} />
      </label>

      <label htmlFor="skills" className="form-label">
        {' '}
        skills
        <input type="text" name="skills" value={formData.skills} onChange={handleChange} />
      </label>

      <label htmlFor="photo_url" className="form-label">
        {' '}
        Photo
        <input type="text" name="photo_url" value={formData.photo_url} onChange={handleChange} />
      </label>

      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default AddMentor;
