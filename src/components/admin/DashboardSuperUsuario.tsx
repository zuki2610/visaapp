import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Administrador {
  id: number;
  nombre: string;
  activo: boolean;
}

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

const DashboardSuperUsuario: React.FC = () => {
  const [activeTab, setActiveTab] = useState('admin');
  const [selectedSolicitud, setSelectedSolicitud] = useState<number | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogData, setDialogData] = useState<{title: string, imagen: string} | null>(null);
  const [showReport, setShowReport] = useState(false);
  const [reportData, setReportData] = useState<{title: string, imagen: string} | null>(null);

  const administradores: Administrador[] = [
    { id: 1, nombre: 'Pepito Perez', activo: true },
    { id: 2, nombre: 'Cristian Correa', activo: true },
    { id: 3, nombre: 'Pablo Ponce', activo: false }
  ];

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

  const handleShowReport = (title: string, imagen: string) => {
    setReportData({ title, imagen });
    setShowReport(true);
  };

  const handleCloseReport = () => {
    setShowReport(false);
    setReportData(null);
  };

  const handleToggleAdmin = (id: number) => {
    // Aquí iría la lógica para cambiar el estado del administrador
    console.log(`Toggle admin ${id}`);
  };

  return (
    <div className="centrador">
      <div className="centrado">
        <div className="sd-40 su-20">
          <h1 className="x28">Portal del Súper Usuario</h1>
        </div>
        <div className="nav">
          <div 
            className={`nav-item ${activeTab === 'admin' ? 'active' : ''}`}
            onClick={() => setActiveTab('admin')}
          >
            <p>Administradores</p>
          </div>
          <div 
            className={`nav-item ${activeTab === 'soli' ? 'active' : ''}`}
            onClick={() => setActiveTab('soli')}
          >
            <p>Solicitudes</p>
          </div>
          <div 
            className={`nav-item ${activeTab === 'repor' ? 'active' : ''}`}
            onClick={() => setActiveTab('repor')}
          >
            <p>Reportes</p>
          </div>
          <div className="nav-item">
            <Link to="/admin/login">Cerrar Sesión</Link>
          </div>
        </div>

        {/* Tab de Administradores */}
        <div className={`table-form-bocchi ${activeTab === 'admin' ? 'show' : ''} su-20`}>
          <div className="text-center sd-15 su-10">
            <h2>Lista de Usuarios</h2>
          </div>
          <table>
            <thead>
              <tr className="aux-tr">
                <th>Nº</th>
                <th>Nombre</th>
                <th>Activo</th>
                <th>Habilitar/Deshabilitar</th>
              </tr>
            </thead>
            <tbody>
              {administradores.map((admin) => (
                <tr key={admin.id} className="aux-tr">
                  <td>{admin.id}</td>
                  <td>{admin.nombre}</td>
                  <td>{admin.activo ? 'Si' : 'No'}</td>
                  <td>
                    <label className="switch">
                      <input 
                        type="checkbox" 
                        checked={admin.activo}
                        onChange={() => handleToggleAdmin(admin.id)}
                      />
                      <span className="slider"></span>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tab de Solicitudes */}
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

        {/* Tab de Reportes */}
        <div className={`table-form-bocchi ${activeTab === 'repor' ? 'show' : ''} su-20`}>
          <div>
            <button 
              className="btn btn-primary sd-20" 
              onClick={() => handleShowReport('Aprobados y Reprobados en total', '/images/apro.png')}
            >
              <p>Aprobados / Reprobados Totales</p>
            </button>
            <button 
              className="btn btn-primary sd-20" 
              onClick={() => handleShowReport('Aprobados y Reprobados según Administrador', '/images/admin.png')}
            >
              <p>Aprobados / Reprobados según Administrador</p>
            </button>
            <button 
              className="btn btn-primary" 
              onClick={() => handleShowReport('Aciertos y Desaciertos según la IA', '/images/ia.png')}
            >
              <p>Aciertos / Desaciertos según IA</p>
            </button>
          </div>
        </div>
      </div>

      {/* Diálogo para documentos */}
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

      {/* Diálogo para reportes */}
      {showReport && reportData && (
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
            <h3>{reportData.title}</h3>
            <img src={reportData.imagen} alt={reportData.title} style={{ maxWidth: '100%', height: 'auto' }} />
            <div style={{ marginTop: '20px' }}>
              <button className="btn btn-secundary" onClick={handleCloseReport}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardSuperUsuario; 