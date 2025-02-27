import {Routes, Route, Outlet } from 'react-router-dom';
import Home from '../pages/Home'
import Enfermedades from '../pages/Enfermedades';
import Salud from '../pages/Salud';
import Anticonceptivos from '../pages/Anticonceptivos';
import Derechos from '../pages/Derechos';
import Navbars from '../components/Navbar';
import BasicFooter from '../components/Footer';
import SobreNosotros from '../pages/SobreNosotros';

function Layout() {
  return (
    <>
      <Navbars />
      <div className="container mt-4">
        <Outlet /> 
      </div>
      <BasicFooter />
    </>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="enfermedades" element={<Enfermedades />} />
        <Route path="salud" element={<Salud />} />
        <Route path="anticonceptivos" element={<Anticonceptivos />} />
        <Route path="derechos" element={<Derechos />} />
        <Route path="sobreNosotros" element={<SobreNosotros />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
