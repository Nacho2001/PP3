import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Enfermedades from '../pages/Enfermedades';
import Salud from '../pages/Salud';
import Anticonceptivos from '../pages/Anticonceptivos';
import Derechos from '../pages/Derechos';
import Navbars from '../components/Navbar';
import BasicFooter from '../components/Footer';

function AppRoutes() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enfermedades" element={<Enfermedades />} />
        <Route path="/salud" element={<Salud />} />
        <Route path="/anticonceptivos" element={<Anticonceptivos />} />
        <Route path="/derechos" element={<Derechos />} />
      </Routes>

    </Router>
  );
}

export default AppRoutes;
