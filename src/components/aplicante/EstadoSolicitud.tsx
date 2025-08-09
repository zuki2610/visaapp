import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EstadoSolicitud: React.FC = () => {
  const [numeroSolicitud, setNumeroSolicitud] = useState<string>('');
  const [mostrarEstado, setMostrarEstado] = useState<boolean>(false);
  const [estadoSolicitud, setEstadoSolicitud] = useState<string>('proceso');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setMostrarEstado(true);
    // Simular diferentes estados según el número de solicitud
    if (numeroSolicitud.includes('100')) {
      setEstadoSolicitud('aceptada');
    } else if (numeroSolicitud.includes('999')) {
      setEstadoSolicitud('rechazada');
    } else {
      setEstadoSolicitud('proceso');
    }
  };

  const getEstadoClass = () => {
    switch (estadoSolicitud) {
      case 'proceso':
        return 'estado estado-proceso';
      case 'aceptada':
        return 'estado estado-aceptada';
      case 'rechazada':
        return 'estado estado-rechazada';
      default:
        return 'estado estado-proceso';
    }
  };

  const getEstadoText = () => {
    switch (estadoSolicitud) {
      case 'proceso':
        return 'Su solicitud está en proceso de revisión. Le notificaremos cuando haya una actualización.';
      case 'aceptada':
        return '¡Felicitaciones! Su solicitud de residencia permanente ha sido aprobada.';
      case 'rechazada':
        return 'Su solicitud ha sido rechazada. Puede presentar una apelación si considera que hay un error.';
      default:
        return 'Su solicitud está en proceso de revisión.';
    }
  };

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
              Ver estado de mi solicitud
            </h1>
          </div>
          <div className="form-div">
            <form onSubmit={handleSubmit}>
              <label htmlFor="numeroSolicitud" className="sd-8">
                Ingrese su número de solicitud
              </label>
              <input 
                type="text" 
                className="text-estandar sd-10" 
                placeholder="Ej: SOL-2024-001234" 
                name="numeroSolicitud" 
                id="numeroSolicitud"
                value={numeroSolicitud}
                onChange={(e) => setNumeroSolicitud(e.target.value)}
                required
              />
              <input 
                type="submit" 
                value="Consultar" 
                className="input-estandar su-20"
              />
            </form>

            {mostrarEstado && (
              <div className={getEstadoClass()}>
                <h3 className="x16 sd-20 text-slim">
                  Estado de su solicitud: {numeroSolicitud}
                </h3>
                <p className="x14">
                  {getEstadoText()}
                </p>
                {estadoSolicitud === 'rechazada' && (
                  <Link to="#" className="normal-link-estandar su-20">
                    Presentar apelación
                  </Link>
                )}
              </div>
            )}
            
            <Link to="/" className="normal-link-estandar su-20">Volver</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstadoSolicitud; 