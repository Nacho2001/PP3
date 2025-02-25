import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { AccessibilityContext } from '../context/AccessibilityContext';
import { useContext } from 'react';

function BackButton() {
  const navigate = useNavigate();
  const { theme} = useContext(AccessibilityContext);

  return (
    <ArrowLeft 
    className={theme === 'dark' ? 'btn-dark' : 'btn-light'}
      onClick={() => navigate(-1)} 
      size={32} 
      style={{ cursor: 'pointer', marginLeft: '10px' }}
    />
  );
}

export default BackButton;
