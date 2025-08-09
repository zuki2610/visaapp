import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface DocumentoRechazado {
  id: string;
  nombre: string;
  motivoRechazo: string;
  fechaRechazo: string;
  archivoActual?: File;
  nuevoArchivo?: File;
}

const Apelaciones: React.FC = () => {
  const [documentosRechazados, setDocumentosRechazados] = useState<DocumentoRechazado[]>([
    {
      id: '1',
      nombre: 'Certificado de Antecedentes Penales',
      motivoRechazo: 'Documento ilegible o de baja calidad. Por favor, suba una versión escaneada en alta resolución.',
      fechaRechazo: '2024-01-15'
    },
    {
      id: '2',
      nombre: 'Fotografía de Pasaporte',
      motivoRechazo: 'La imagen no cumple con los requisitos de calidad. Debe ser una foto clara y reciente.',
      fechaRechazo: '2024-01-15'
    }
  ]);

  const [solicitudInfo] = useState({
    numeroSolicitud: 'SOL-2024-001234',
    nombreSolicitante: 'Pepita Perez',
    fechaSolicitud: '2024-01-10',
    estado: 'Rechazada'
  });

  const handleFileChange = (documentoId: string, file: File) => {
    setDocumentosRechazados(prev => 
      prev.map(doc => 
        doc.id === documentoId 
          ? { ...doc, nuevoArchivo: file }
          : doc
      )
    );
  };

  const handleSubmitApelacion = () => {
    // Aquí iría la lógica para enviar la apelación
    alert('Apelación enviada exitosamente. Recibirá una notificación cuando sea revisada.');
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
              Apelación de Solicitud
            </h1>
          </div>
          
          {/* Información de la solicitud */}
          <div className="form-div">
            <div className="estado estado-rechazada sd-20">
              <h3 className="x16 sd-20 text-slim">
                Información de la Solicitud
              </h3>
              <div className="x14">
                <p><strong>Número de Solicitud:</strong> {solicitudInfo.numeroSolicitud}</p>
                <p><strong>Solicitante:</strong> {solicitudInfo.nombreSolicitante}</p>
                <p><strong>Fecha de Solicitud:</strong> {solicitudInfo.fechaSolicitud}</p>
                <p><strong>Estado:</strong> {solicitudInfo.estado}</p>
              </div>
            </div>

            {/* Documentos rechazados */}
            <div className="sd-20">
              <h3 className="x16 sd-20 text-slim">
                Documentos Rechazados
              </h3>
              <p className="x14 sd-20">
                Los siguientes documentos fueron rechazados por la entidad. 
                Por favor, suba versiones corregidas de estos documentos.
              </p>
            </div>

            {documentosRechazados.map((documento) => (
              <div key={documento.id} className="documento-rechazado sd-20">
                <div className="estado estado-rechazada">
                  <h4 className="x16 sd-10">{documento.nombre}</h4>
                  <p className="x14 sd-10">
                    <strong>Motivo de rechazo:</strong> {documento.motivoRechazo}
                  </p>
                  <p className="x14 sd-10">
                    <strong>Fecha de rechazo:</strong> {documento.fechaRechazo}
                  </p>
                  
                  <div className="sd-15">
                    <label htmlFor={`file-${documento.id}`} className="sd-8">
                      Subir nueva versión del documento:
                    </label>
                    <input 
                      type="file" 
                      id={`file-${documento.id}`}
                      className="sd-10 file-estandar"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleFileChange(documento.id, file);
                        }
                      }}
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                    {documento.nuevoArchivo && (
                      <p className="x14" style={{ color: '#0E891A', marginTop: '5px' }}>
                        ✅ Archivo seleccionado: {documento.nuevoArchivo.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Información adicional */}
            <div className="sd-20">
              <h3 className="x16 sd-20 text-slim">
                Información Adicional (Opcional)
              </h3>
              <label htmlFor="comentarios" className="sd-8">
                Comentarios adicionales sobre la apelación:
              </label>
              <textarea 
                id="comentarios"
                className="text-estandar sd-10"
                rows={4}
                placeholder="Explique cualquier circunstancia especial o información adicional que considere relevante para su apelación..."
                style={{ 
                  resize: 'vertical',
                  minHeight: '80px',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            {/* Botones de acción */}
            <div className="sd-20">
              <button 
                onClick={handleSubmitApelacion}
                className="input-estandar su-20"
                disabled={documentosRechazados.some(doc => !doc.nuevoArchivo)}
                style={{
                  opacity: documentosRechazados.some(doc => !doc.nuevoArchivo) ? 0.5 : 1,
                  cursor: documentosRechazados.some(doc => !doc.nuevoArchivo) ? 'not-allowed' : 'pointer'
                }}
              >
                Enviar Apelación
              </button>
              
              {documentosRechazados.some(doc => !doc.nuevoArchivo) && (
                <p className="x14" style={{ color: '#BF0238', marginTop: '10px' }}>
                  ⚠️ Debe subir todos los documentos rechazados para enviar la apelación
                </p>
              )}
            </div>
            
            <Link to="/" className="normal-link-estandar su-20">Volver al inicio</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apelaciones; 