import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMentorToServer } from '../redux/slices/mentors/addMentorSlice';
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
    { label: 'Name', type: 'text', name: 'name', placeholder: 'Name' },
    {
      label: 'Occupation',
      type: 'text',
      name: 'occupation',
      placeholder: 'Occupation: Web Developer',
    },
    {
      label: 'About',
      type: 'text',
      name: 'about',
      placeholder: 'A little about yourself',
    },
    {
      label: 'Hourly fee',
      type: 'number',
      name: 'hourly_fee',
      placeholder: 'Hourly rate',
    },
    {
      label: 'Experience',
      type: 'number',
      name: 'year_of_experience',
      placeholder: 'Years of Experience',
    },
    {
      label: 'Location',
      type: 'text',
      name: 'location',
      placeholder: 'London, UK',
    },
    { label: 'Skills', type: 'text', name: 'skills', placeholder: 'Skills: HTML, CSS' },
    {
      label: 'Photo Url',
      type: 'text',
      name: 'photo_url',
      placeholder: 'https://example.png',
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <h2 className="text-center text-3xl mb-[3rem] text-primary-black font-medium">
        Become a Mentor
      </h2>
      <form
        className="flex flex-col w-full max-w-lg border px-8 py-6 rounded-lg"
        onSubmit={handleSubmit}
      >
        {formFields.map((field) => (
          <MentorFormField
            key={field.name}
            label={field.label}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
          />
        ))}
        <button
          type="submit"
          className="w-full rounded bg-primary-green text-white font-medium py-2 mt-4"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddMentor;
