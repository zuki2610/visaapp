import React from 'react';
import { Link } from 'react-router-dom';

const SeleccionRol: React.FC = () => {
  return (
    <div className="centrador">
      <div className="centrado">
        <div className="sd-15 su-20">
          <h1 className="x20 negrita">
            VisApp
          </h1>
        </div>
        <Link to="/admin/usuario" className="btn btn-primary btn-large sd-15">
          Vista del usuario
        </Link>
        <Link to="/admin/administrador" className="btn btn-primary btn-large sd-15">
          Vista del Administrador
        </Link>
        <Link to="/admin/super-usuario" className="btn btn-primary btn-large">
          Vista del Super Usuario
        </Link>
      </div>
    </div>
  );
};

export default SeleccionRol; 