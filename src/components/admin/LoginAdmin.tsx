import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginAdmin: React.FC = () => {
  const [formData, setFormData] = useState({
    rut: '',
    clave: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aquí iría la lógica de autenticación
    // Por ahora, simplemente redirigimos al selector de rol
    navigate('/admin/rol');
  };

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="login-box">
        <img 
          src="/images/logo.png" 
          alt="Acceso Funcionarios Migraciones" 
          height="80px" 
          style={{ display: 'block', margin: '0 auto 20px' }}
        />
        <h2>Sistema VisApp</h2>
        <p>Use su clave de funcionario</p>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input 
              name="rut" 
              required 
              value={formData.rut}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <label>Rut</label>
          </div>
          <div className="inputBox">
                          <input 
                name="clave" 
                required 
                type="password" 
                style={{ WebkitTextSecurity: 'circle' } as React.CSSProperties}
                value={formData.clave}
                onChange={handleInputChange}
                autoComplete="off"
              />
            <label>Clave</label>
          </div>
          <input type="submit" name="sign-in" value="Aceptar" />
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin; 