import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Solicitud {
  id: number;
  nombre: string;
  porcentaje: number;
  estado: 'aprobada' | 'en_proceso' | 'rechazada';
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
  const [selectedYear, setSelectedYear] = useState('2024');
  
  // Estados para modales de confirmación
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmAction, setConfirmAction] = useState<'aceptar' | 'rechazar' | null>(null);
  const [solicitudToAction, setSolicitudToAction] = useState<number | null>(null);
  
  // Estado para las solicitudes (permite modificaciones)
  const [solicitudesPorAnoState, setSolicitudesPorAnoState] = useState<{ [key: string]: Solicitud[] }>({
    '2024': [
      {
        id: 1,
        nombre: 'pepita perez',
        porcentaje: 66,
        estado: 'en_proceso',
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
        estado: 'aprobada',
        documentos: [
          {
            nombre: 'Certificado de Antecedentes',
            ia: true,
            entidad: true,
            imagen: 'https://immichile.cl/wp/wp-content/uploads/2019/11/certificado-de-antecedentes-penales-para-fines-especiales.png'
          },
          {
            nombre: 'Pasaporte',
            ia: true,
            entidad: true,
            imagen: 'https://thumbs.dreamstime.com/z/pasaporte-del-ejemplo-con-datos-biom%C3%A9tricos-112354991.jpg'
          },
          {
            nombre: 'Carnet de Identidad',
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
        id: 3,
        nombre: 'gonzalo perez',
        porcentaje: 76,
        estado: 'en_proceso',
        documentos: [
          {
            nombre: 'Certificado de Antecedentes',
            ia: true,
            entidad: true,
            imagen: 'https://immichile.cl/wp/wp-content/uploads/2019/11/certificado-de-antecedentes-penales-para-fines-especiales.png'
          },
          {
            nombre: 'Pasaporte',
            ia: true,
            entidad: false,
            imagen: 'https://thumbs.dreamstime.com/z/pasaporte-del-ejemplo-con-datos-biom%C3%A9tricos-112354991.jpg'
          },
          {
            nombre: 'Carnet de Identidad',
            ia: true,
            entidad: true,
            imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/El_ejemplo_de_Cedula_identidad_Chile_2013.jpg'
          }
        ]
      },
      {
        id: 4,
        nombre: 'pepita maria',
        porcentaje: 36,
        estado: 'rechazada',
        documentos: [
          {
            nombre: 'Certificado de Antecedentes',
            ia: false,
            entidad: false,
            imagen: 'https://immichile.cl/wp/wp-content/uploads/2019/11/certificado-de-antecedentes-penales-para-fines-especiales.png'
          },
          {
            nombre: 'Pasaporte',
            ia: false,
            entidad: false,
            imagen: 'https://thumbs.dreamstime.com/z/pasaporte-del-ejemplo-con-datos-biom%C3%A9tricos-112354991.jpg'
          }
        ]
      }
    ],
    '2023': [
      {
        id: 1,
        nombre: 'maria gonzalez',
        porcentaje: 85,
        estado: 'aprobada',
        documentos: [
          {
            nombre: 'Certificado de Antecedentes',
            ia: true,
            entidad: true,
            imagen: 'https://immichile.cl/wp/wp-content/uploads/2019/11/certificado-de-antecedentes-penales-para-fines-especiales.png'
          },
          {
            nombre: 'Pasaporte',
            ia: true,
            entidad: true,
            imagen: 'https://thumbs.dreamstime.com/z/pasaporte-del-ejemplo-con-datos-biom%C3%A9tricos-112354991.jpg'
          },
          {
            nombre: 'Carnet de Identidad',
            ia: true,
            entidad: true,
            imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/El_ejemplo_de_Cedula_identidad_Chile_2013.jpg'
          }
        ]
      },
      {
        id: 2,
        nombre: 'carlos rodriguez',
        porcentaje: 92,
        estado: 'aprobada',
        documentos: [
          {
            nombre: 'Certificado de Antecedentes',
            ia: true,
            entidad: true,
            imagen: 'https://immichile.cl/wp/wp-content/uploads/2019/11/certificado-de-antecedentes-penales-para-fines-especiales.png'
          },
          {
            nombre: 'Pasaporte',
            ia: true,
            entidad: true,
            imagen: 'https://thumbs.dreamstime.com/z/pasaporte-del-ejemplo-con-datos-biom%C3%A9tricos-112354991.jpg'
          }
        ]
      },
      {
        id: 3,
        nombre: 'ana martinez',
        porcentaje: 45,
        estado: 'rechazada',
        documentos: [
          {
            nombre: 'Certificado de Antecedentes',
            ia: false,
            entidad: false,
            imagen: 'https://immichile.cl/wp/wp-content/uploads/2019/11/certificado-de-antecedentes-penales-para-fines-especiales.png'
          },
          {
            nombre: 'Pasaporte',
            ia: false,
            entidad: false,
            imagen: 'https://thumbs.dreamstime.com/z/pasaporte-del-ejemplo-con-datos-biom%C3%A9tricos-112354991.jpg'
          }
        ]
      }
    ],
    '2022': [
      {
        id: 1,
        nombre: 'luis hernandez',
        porcentaje: 78,
        estado: 'en_proceso',
        documentos: [
          {
            nombre: 'Certificado de Antecedentes',
            ia: true,
            entidad: true,
            imagen: 'https://immichile.cl/wp/wp-content/uploads/2019/11/certificado-de-antecedentes-penales-para-fines-especiales.png'
          },
          {
            nombre: 'Pasaporte',
            ia: true,
            entidad: false,
            imagen: 'https://thumbs.dreamstime.com/z/pasaporte-del-ejemplo-con-datos-biom%C3%A9tricos-112354991.jpg'
          }
        ]
      },
      {
        id: 2,
        nombre: 'sofia lopez',
        porcentaje: 88,
        estado: 'aprobada',
        documentos: [
          {
            nombre: 'Certificado de Antecedentes',
            ia: true,
            entidad: true,
            imagen: 'https://immichile.cl/wp/wp-content/uploads/2019/11/certificado-de-antecedentes-penales-para-fines-especiales.png'
          },
          {
            nombre: 'Pasaporte',
            ia: true,
            entidad: true,
            imagen: 'https://thumbs.dreamstime.com/z/pasaporte-del-ejemplo-con-datos-biom%C3%A9tricos-112354991.jpg'
          },
          {
            nombre: 'Carnet de Identidad',
            ia: true,
            entidad: true,
            imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/El_ejemplo_de_Cedula_identidad_Chile_2013.jpg'
          }
        ]
      }
    ]
  });

  const solicitudes = solicitudesPorAnoState[selectedYear] || [];

  // Calcular estadísticas del año seleccionado
  const estadisticas = {
    totalSolicitudes: solicitudes.length,
    aprobadas: solicitudes.filter(s => s.estado === 'aprobada').length,
    enProceso: solicitudes.filter(s => s.estado === 'en_proceso').length,
    rechazadas: solicitudes.filter(s => s.estado === 'rechazada').length,
    promedioAprobacion: solicitudes.length > 0 
      ? Math.round(solicitudes.reduce((sum, s) => sum + s.porcentaje, 0) / solicitudes.length)
      : 0
  };

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

  const handleConfirmAction = (action: 'aceptar' | 'rechazar', solicitudId: number) => {
    setConfirmAction(action);
    setSolicitudToAction(solicitudId);
    setShowConfirmModal(true);
  };

  const handleExecuteAction = () => {
    if (confirmAction && solicitudToAction) {
      setSolicitudesPorAnoState(prev => ({
        ...prev,
        [selectedYear]: prev[selectedYear].map(solicitud => 
          solicitud.id === solicitudToAction 
            ? {
                ...solicitud,
                estado: confirmAction === 'aceptar' ? 'aprobada' : 'rechazada',
                porcentaje: confirmAction === 'aceptar' ? 100 : 0
              }
            : solicitud
        )
      }));
      
      setShowConfirmModal(false);
      setConfirmAction(null);
      setSolicitudToAction(null);
    }
  };

  const handleCancelAction = () => {
    setShowConfirmModal(false);
    setConfirmAction(null);
    setSolicitudToAction(null);
  };

  return (
    <div className="centrador">
      <div className="centrado">
        <div className="sd-40 su-20">
          <h1 className="x28">Portal del Administrador</h1>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '10px',
            marginTop: '20px'
          }}>
            <label htmlFor="year-selector" style={{ 
              fontSize: '16px', 
              fontWeight: '500',
              color: '#383838'
            }}>
              Año:
            </label>
            <select 
              id="year-selector"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              style={{
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '16px',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
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
        
        {/* Panel de estadísticas */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '20px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            backgroundColor: '#CCF1C1',
            color: '#0E891A',
            padding: '15px 20px',
            borderRadius: '8px',
            textAlign: 'center',
            minWidth: '120px'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{estadisticas.totalSolicitudes}</div>
            <div style={{ fontSize: '14px' }}>Total</div>
          </div>
          <div style={{
            backgroundColor: '#C0E9FD',
            color: '#007DB7',
            padding: '15px 20px',
            borderRadius: '8px',
            textAlign: 'center',
            minWidth: '120px'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{estadisticas.aprobadas}</div>
            <div style={{ fontSize: '14px' }}>Aprobadas</div>
          </div>
          <div style={{
            backgroundColor: '#FFF3CD',
            color: '#856404',
            padding: '15px 20px',
            borderRadius: '8px',
            textAlign: 'center',
            minWidth: '120px'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{estadisticas.enProceso}</div>
            <div style={{ fontSize: '14px' }}>En Proceso</div>
          </div>
          <div style={{
            backgroundColor: '#F9D4D5',
            color: '#BF0238',
            padding: '15px 20px',
            borderRadius: '8px',
            textAlign: 'center',
            minWidth: '120px'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{estadisticas.rechazadas}</div>
            <div style={{ fontSize: '14px' }}>Rechazadas</div>
          </div>
          <div style={{
            backgroundColor: '#E2E3E5',
            color: '#383838',
            padding: '15px 20px',
            borderRadius: '8px',
            textAlign: 'center',
            minWidth: '120px'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{estadisticas.promedioAprobacion}%</div>
            <div style={{ fontSize: '14px' }}>Promedio</div>
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
                        <button 
                          className="btn btn-secundary btn-small sr-20"
                          onClick={() => handleConfirmAction('rechazar', solicitud.id)}
                        >
                          Rechazar
                        </button>
                        <button 
                          className="btn btn-primary btn-small"
                          onClick={() => handleConfirmAction('aceptar', solicitud.id)}
                        >
                          Aceptar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de confirmación */}
      {showConfirmModal && (
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
            padding: '30px',
            borderRadius: '15px',
            maxWidth: '400px',
            width: '90%',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <div style={{
              fontSize: '60px',
              marginBottom: '20px'
            }}>
              {confirmAction === 'aceptar' ? '✅' : '❌'}
            </div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              margin: '0 0 15px 0',
              color: confirmAction === 'aceptar' ? '#0E891A' : '#BF0238'
            }}>
              ¿Estás seguro?
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#666',
              margin: '0 0 25px 0',
              lineHeight: '1.5'
            }}>
              {confirmAction === 'aceptar' 
                ? '¿Deseas aprobar esta solicitud? Esta acción no se puede deshacer.'
                : '¿Deseas rechazar esta solicitud? Esta acción no se puede deshacer.'
              }
            </p>
            <div style={{
              display: 'flex',
              gap: '15px',
              justifyContent: 'center'
            }}>
              <button 
                className="btn btn-secundary btn-large"
                onClick={handleCancelAction}
                style={{ minWidth: '100px' }}
              >
                Cancelar
              </button>
              <button 
                className="btn btn-primary btn-large"
                onClick={handleExecuteAction}
                style={{ 
                  minWidth: '100px',
                  backgroundColor: confirmAction === 'aceptar' ? '#0E891A' : '#BF0238'
                }}
              >
                {confirmAction === 'aceptar' ? 'Aprobar' : 'Rechazar'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de documento */}
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