import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Componentes de la vista aplicante
import AplicanteHome from './components/aplicante/AplicanteHome';
import SolicitarResidencia from './components/aplicante/SolicitarResidencia';
import EstadoSolicitud from './components/aplicante/EstadoSolicitud';
import ResultadoSolicitud from './components/aplicante/ResultadoSolicitud';

// Componentes del panel administrativo
import LoginAdmin from './components/admin/LoginAdmin';
import SeleccionRol from './components/admin/SeleccionRol';
import DashboardUsuario from './components/admin/DashboardUsuario';
import DashboardAdministrador from './components/admin/DashboardAdministrador';
import DashboardSuperUsuario from './components/admin/DashboardSuperUsuario';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Rutas de la vista aplicante */}
          <Route path="/" element={<AplicanteHome />} />
          <Route path="/solicitar" element={<SolicitarResidencia />} />
          <Route path="/estado" element={<EstadoSolicitud />} />
          <Route path="/resultado" element={<ResultadoSolicitud />} />
          
          {/* Rutas del panel administrativo */}
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route path="/admin/rol" element={<SeleccionRol />} />
          <Route path="/admin/usuario" element={<DashboardUsuario />} />
          <Route path="/admin/administrador" element={<DashboardAdministrador />} />
          <Route path="/admin/super-usuario" element={<DashboardSuperUsuario />} />
          
          {/* Redirección por defecto */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
