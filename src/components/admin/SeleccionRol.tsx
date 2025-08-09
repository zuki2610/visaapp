
import React from 'react';
import { Link } from 'react-router-dom';

const SeleccionRol: React.FC = () => {
  const roles = [
    {
      id: 'usuario',
      titulo: 'Vista del Usuario',
      descripcion: 'Acceso básico para consultar solicitudes y estados',
      icono: '👤',
      color: '#0f69b4',
      ruta: '/admin/usuario'
    },
    {
      id: 'administrador',
      titulo: 'Vista del Administrador',
      descripcion: 'Gestión completa de solicitudes y revisión de documentos',
      icono: '⚙️',
      color: '#eb3c46',
      ruta: '/admin/administrador'
    },
    {
      id: 'super-usuario',
      titulo: 'Vista del Super Usuario',
      descripcion: 'Control total del sistema, gestión de usuarios y reportes',
      icono: '👑',
      color: '#856404',
      ruta: '/admin/super-usuario'
    }
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        maxWidth: '800px',
        width: '100%',
        textAlign: 'center'
      }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#0f69b4',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            boxShadow: '0 10px 20px rgba(15, 105, 180, 0.3)'
          }}>
            <span style={{ fontSize: '40px' }}>🏛️</span>
          </div>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#202124',
            margin: '0 0 10px 0'
          }}>
            Sistema VisApp
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            margin: '0'
          }}>
            Seleccione su rol para continuar
          </p>
        </div>

        {/* Roles Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          {roles.map((rol) => (
            <Link 
              key={rol.id}
              to={rol.ruta}
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div style={{
                backgroundColor: 'white',
                border: `3px solid ${rol.color}`,
                borderRadius: '15px',
                padding: '30px 20px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
              }}
              >
                {/* Background Pattern */}
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200%',
                  height: '200%',
                  background: `linear-gradient(45deg, ${rol.color}10, ${rol.color}05)`,
                  borderRadius: '50%',
                  zIndex: 0
                }} />
                
                {/* Content */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    fontSize: '50px',
                    marginBottom: '15px'
                  }}>
                    {rol.icono}
                  </div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: rol.color,
                    margin: '0 0 10px 0'
                  }}>
                    {rol.titulo}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#666',
                    lineHeight: '1.5',
                    margin: '0'
                  }}>
                    {rol.descripcion}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          borderTop: '1px solid #eee',
          paddingTop: '20px',
          marginTop: '20px'
        }}>
          <Link 
            to="/admin/login"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#666',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#eb3c46'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
          >
            <span>←</span>
            Volver al login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeleccionRol; 