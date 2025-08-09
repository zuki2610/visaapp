import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Solicitud {
  id: number;
  nombre: string;
  porcentaje: number;
  documentos: {
    nombre: string;
    ia: boolean;
    entidad: boolean;
    imagen: string;
  }[];
}

const DashboardAdministrador: React.FC = () => {
  const [activeTab, setActiveTab] = useState('soli');
  const [selectedSolicitud, setSelectedSolicitud] = useState<number | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogData, setDialogData] = useState<{title: string, imagen: string} | null>(null);

  const solicitudes: Solicitud[] = [
    {
      id: 1,
      nombre: 'pepita perez',
      porcentaje: 66,
      documentos: [
        {
          nombre: 'Certidicado de Antecedentes',
          ia: true,
          entidad: false,
          imagen: 'https://immichile.cl/wp/wp-content/uploads/2019/11/certificado-de-antecedentes-penales-para-fines-especiales.png'
        },
        {
          nombre: 'Pasaporte',
          ia: false,
          entidad: false,
          imagen: 'https://thumbs.dreamstime.com/z/pasaporte-del-ejemplo-con-datos-biom%C3%A9tricos-112354991.jpg'
        },
        {
          nombre: 'Carnet',
          ia: true,
          entidad: true,
          imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/El_ejemplo_de_Cedula_identidad_Chile_2013.jpg'
        },
        {
          nombre: 'Estampado Electrónico',
          ia: true,
          entidad: true,
          imagen: 'https://i0.wp.com/www.blog.midiarioenchile.com/wp-content/uploads/2020/09/estampado-electronico-segunda-pagina-mi-diario-en-chile-tutorial.png?fit=559%2C477&ssl=1'
        }
      ]
    },
    {
      id: 2,
      nombre: 'juanita perez',
      porcentaje: 100,
      documentos: []
    },
    {
      id: 3,
      nombre: 'gonzalo perez',
      porcentaje: 76,
      documentos: []
    },
    {
      id: 4,
      nombre: 'pepita maria',
      porcentaje: 36,
      documentos: []
    }
  ];

  const handleShowSolicitud = (id: number) => {
    setSelectedSolicitud(selectedSolicitud === id ? null : id);
  };

  const handleShowDocument = (title: string, imagen: string) => {
    setDialogData({ title, imagen });
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setDialogData(null);
  };

  return (
    <div className="centrador">
      <div className="centrado">
        <div className="sd-40 su-20">
          <h1 className="x28">Portal del Administrador</h1>
        </div>
        <div className="nav">
          <div 
            className={`nav-item ${activeTab === 'soli' ? 'active' : ''}`}
            onClick={() => setActiveTab('soli')}
          >
            <p>Solicitudes</p>
          </div>
          <div className="nav-item">
            <Link to="/admin/login">Cerrar Sesión</Link>
          </div>
        </div>
        
        <div className={`table-form-bocchi ${activeTab === 'soli' ? 'show' : ''} su-20`}>
          <div className="soli-div">
            <div className="soli-div-header">
              <div>Nº</div>
              <div>Nombre</div>
              <div>Porcentaje Aprobado</div>
              <div></div>
            </div>
            <div className="soli-div-content">
              {solicitudes.map((solicitud) => (
                <div key={solicitud.id}>
                  <div className="soli-div-content-top">
                    <div>{solicitud.id}</div>
                    <div>{solicitud.nombre}</div>
                    <div>{solicitud.porcentaje}%</div>
                    <div>
                      <button 
                        className="btn btn-primary btn-small"
                        onClick={() => handleShowSolicitud(solicitud.id)}
                      >
                        ver
                      </button>
                    </div>
                  </div>
                  
                  {selectedSolicitud === solicitud.id && solicitud.documentos.length > 0 && (
                    <div className="soli-div-content-bottom">
                      <table>
                        <tr>
                          <td>Archivo</td>
                          <td>IA</td>
                          <td>Entidad</td>
                          <td></td>
                        </tr>
                        {solicitud.documentos.map((doc, index) => (
                          <tr key={index}>
                            <td>{doc.nombre}</td>
                            <td>
                              <img 
                                src={doc.ia ? "https://www.coopeuch.cl/media//coopeuch-svg/otrasImagenes/check.svg" : "https://www.coopeuch.cl/media/imagegallery/images/cross.svg"} 
                                alt={doc.ia ? "Aprobado" : "Rechazado"}
                                style={{ width: '20px', height: '20px' }}
                              />
                            </td>
                            <td>
                              <img 
                                src={doc.entidad ? "https://www.coopeuch.cl/media//coopeuch-svg/otrasImagenes/check.svg" : "https://www.coopeuch.cl/media/imagegallery/images/cross.svg"} 
                                alt={doc.entidad ? "Aprobado" : "Rechazado"}
                                style={{ width: '20px', height: '20px' }}
                              />
                            </td>
                            <td>
                              <button 
                                className="btn btn-primary btn-small sr-20"
                                onClick={() => handleShowDocument(doc.nombre, doc.imagen)}
                              >
                                Revisar
                              </button>
                            </td>
                          </tr>
                        ))}
                      </table>
                      <div className="l-to-r sd-20">
                        <button className="btn btn-secundary btn-small sr-20">Rechazar</button>
                        <button className="btn btn-primary btn-small">Aceptar</button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showDialog && dialogData && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '80%',
            maxHeight: '80%',
            overflow: 'auto'
          }}>
            <h3>{dialogData.title}</h3>
            <img src={dialogData.imagen} alt={dialogData.title} style={{ maxWidth: '100%', height: 'auto' }} />
            <div style={{ marginTop: '20px' }}>
              <button className="btn btn-secundary btn-small" onClick={handleCloseDialog}>
                Cerrar
              </button>
              <button className="btn btn-primary btn-small">
                Revisar Nuevamente
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardAdministrador; 