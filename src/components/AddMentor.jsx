import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMentorToServer } from '../redux/slices/mentor/addMentorSlice';
import MentorFormField from './ux/MentorFormField';
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
    // Reset form data
    setFormData({
      name: '',
      occupation: '',
      about: '',
      hourly_fee: 0,
      year_of_experience: 0,
      location: '',
      skills: '',
      photo_url: '',
    });
  };

  const formFields = [
    { label: 'Name', type: 'text', name: 'name' },
    { label: 'Occupation', type: 'text', name: 'occupation' },
    { label: 'About', type: 'text', name: 'about' },
    { label: 'Hourly fee', type: 'number', name: 'hourly_fee' },
    { label: 'Experience', type: 'number', name: 'year_of_experience' },
    { label: 'Location', type: 'text', name: 'location' },
    { label: 'Skills', type: 'text', name: 'skills' },
    { label: 'Photo Url', type: 'text', name: 'photo_url' },
  ];

  return (
    <section className="add_mentor_section">
      <form className="add_mentor_form" onSubmit={handleSubmit}>
        <h2>BE A MENTOR</h2>
        {formFields.map((field) => (
          <MentorFormField
            key={field.name}
            label={field.label}
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
          />
        ))}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>
  );
};

export default AddMentor;
