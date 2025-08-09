import React from 'react';
import { Link } from 'react-router-dom';

const AplicanteHome: React.FC = () => {
  return (
    <div className="centrador sd-60">
      <div className="centrado">
        <div className="form-login su-20">
          <div className="flag-colors">
            <div className="blue-flag"></div>
            <div className="red-flag"></div>
          </div>
          <div className="sd-20 su-20">
            <h1 className="text-center x28">
              Servicio de Residencia Permanente
            </h1>
          </div>
          <div className="form-div">
            <Link to="/solicitar" className="link-estandar sd-15">
              Solicitar Residencia Permanente
            </Link>
            <Link to="/estado" className="link-estandar sd-15">
              Ver estado de mi solicitud
            </Link>
            <Link to="#" className="link-estandar sd-15">
              Apelaciones
            </Link>
            <Link to="#" className="link-estandar sd-15">
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AplicanteHome; 