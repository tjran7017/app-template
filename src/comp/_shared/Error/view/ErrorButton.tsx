import { useNavigate } from 'react-router-dom';

export function ErrorButton() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/');

  return <button onClick={handleClick}>HOME</button>;
}
