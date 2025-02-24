import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function BackButton() {
  const navigate = useNavigate();

  return (
    <ArrowLeft 
      onClick={() => navigate(-1)} 
      size={32} 
      style={{ cursor: 'pointer', marginLeft: '10px' }}
    />
  );
}

export default BackButton;
