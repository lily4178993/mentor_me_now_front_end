import { useParams } from 'react-router-dom';

const MentorDetails = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default MentorDetails;
