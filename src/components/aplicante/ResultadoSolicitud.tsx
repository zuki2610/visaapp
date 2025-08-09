import React from 'react';
import { Link } from 'react-router-dom';

const ResultadoSolicitud: React.FC = () => {
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
              Resultado de su solicitud
            </h1>
          </div>
          <div className="form-div">
            <div className="estado estado-aceptada">
              <h3 className="x16 sd-20 text-slim">
                ¡Solicitud enviada exitosamente!
              </h3>
              <p className="x14 sd-20">
                Su solicitud de residencia permanente ha sido recibida y registrada en nuestro sistema.
                El número de seguimiento de su solicitud es: <strong>SOL-2024-001234</strong>
              </p>
              <p className="x14 sd-20">
                Recibirá una notificación por correo electrónico con los próximos pasos a seguir.
                Puede consultar el estado de su solicitud en cualquier momento usando el número de seguimiento.
              </p>
            </div>
            
            <Link to="/estado" className="link-estandar sd-15">
              Consultar estado de mi solicitud
            </Link>
            <Link to="/" className="normal-link-estandar su-20">Volver al inicio</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultadoSolicitud; 