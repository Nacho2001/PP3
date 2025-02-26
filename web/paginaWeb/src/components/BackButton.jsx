import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { AccessibilityContext } from '../context/AccessibilityContext';
import { useContext } from 'react';

//boton q vuelve atras en el historial, osea cada click se agrega al historial y con este volvemos uno atras
function BackButton() {
  const navigate = useNavigate();
  const { theme } = useContext(AccessibilityContext);

  const navigateTo = () => {
    navigate('/');
  }

  return (
    <ArrowLeft 
    className={theme === 'dark' ? 'btn-dark' : 'btn-light'}
      onClick={navigateTo} 
      size={32} 
      style={{ cursor: 'pointer', marginLeft: '10px' }}
    />
  );
}

export default BackButton;