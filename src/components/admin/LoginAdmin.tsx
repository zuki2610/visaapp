import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginAdmin: React.FC = () => {
  const [formData, setFormData] = useState({
    rut: '',
    clave: '',
    year: '2023'
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
          <div className="inputBox">
            <select 
              name="year" 
              value={formData.year}
              onChange={handleInputChange}
            >
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
            </select>
          </div>
          <input type="submit" name="sign-in" value="Aceptar" />
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin; 