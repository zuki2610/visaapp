import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SolicitarResidencia: React.FC = () => {
  const [paisSeleccionado, setPaisSeleccionado] = useState<string>('');
  const [mostrarDatos, setMostrarDatos] = useState<boolean>(false);
  const [tipoResidencia, setTipoResidencia] = useState<string>('0');

  const handlePaisChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPaisSeleccionado(event.target.value);
    setMostrarDatos(false);
  };

  const handleMostrarDatos = () => {
    setMostrarDatos(true);
  };

  const handleTipoResidenciaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTipoResidencia(event.target.value);
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
              Solicitar Residencia Permanente
            </h1>
          </div>
          <div className="form-div">
            <label htmlFor="pais" className="sd-8">Ingrese su país de origen</label>
            <select 
              name="pais" 
              onChange={handlePaisChange} 
              id="pais" 
              className="sd-20 check-estandar"
              value={paisSeleccionado}
            >
              <option value="">Seleccione</option>
              <option value="venezuela">Venezuela</option>
              <option value="colombia">Colombia</option>
              <option value="haiti">Haití</option>
              <option value="peru">Perú</option>
              <option value="bolivia">Bolivia</option>
            </select>

            {paisSeleccionado === 'colombia' && (
              <div className="pais-form">
                <input 
                  type="text" 
                  className="text-estandar" 
                  placeholder="Ingrese su NUIP" 
                  name="nuip" 
                  id="nuip"
                />
                <input 
                  type="button" 
                  onClick={handleMostrarDatos} 
                  value="Ingresar" 
                  className="input-estandar su-20"
                />
              </div>
            )}

            {paisSeleccionado === 'venezuela' && (
              <div className="pais-form">
                <input 
                  type="text" 
                  className="text-estandar" 
                  placeholder="Ingrese su Nº de Serie" 
                  name="serie" 
                  id="serie"
                />
                <input 
                  type="button" 
                  onClick={handleMostrarDatos} 
                  value="Ingresar" 
                  className="input-estandar su-20"
                />
              </div>
            )}

            {mostrarDatos && (
              <div className="datos-persona su-20">
                <h3 className="x16 sd-20 text-slim">Datos del solicitante</h3>
                <label htmlFor="nombre" className="sd-8">Nombre</label>
                <input 
                  type="text" 
                  className="text-estandar sd-10" 
                  value="Pepito Perez" 
                  name="nombre" 
                  id="nombre" 
                  disabled
                />
                <label htmlFor="fecha" className="sd-8">Fecha de Nacimiento</label>
                <input 
                  type="date" 
                  className="text-estandar sd-10" 
                  value="1995-10-13" 
                  name="fecha" 
                  id="fecha" 
                  disabled
                />
                <label htmlFor="sexo" className="sd-8">Sexo</label>
                <select name="sexo" className="check-estandar sd-20" id="sexo" disabled>
                  <option value="M">M</option>
                </select>
                
                <h3 className="x16 sd-20 text-slim">Documentos Generales</h3>
                <label htmlFor="pasaporte1" className="sd-8">Fotografía de su Pasaporte</label>
                <input type="file" name="pasaporte1" id="pasaporte1" className="sd-10 file-estandar" />
                <label htmlFor="antecedentes1" className="sd-8">Certificado de Antecedentes Penales</label>
                <input type="file" name="antecedentes1" id="antecedentes1" className="sd-10 file-estandar" />
                <label htmlFor="carnet1" className="sd-8">Foto del Carnet de Identidad</label>
                <input type="file" name="carnet1" id="carnet1" className="sd-10 file-estandar" />
                <label htmlFor="estampado" className="sd-8">Permiso de Residencia Actual</label>
                <input type="file" name="estampado" id="estampado" className="sd-10 file-estandar" />

                <label htmlFor="tipo" className="sd-8 su-20">
                  Seleccione el motivo por el que puede optar a la residencia
                </label>
                <select 
                  name="tipo" 
                  onChange={handleTipoResidenciaChange} 
                  className="check-estandar sd-20" 
                  id="tipo"
                  value={tipoResidencia}
                >
                  <option value="0">Seleccione</option>
                  <option value="1">Vínculo con chileno/a o persona con Residencia Definitiva</option>
                  <option value="2">Actividad que realiza, ingresos y/o sustento económico</option>
                  <option value="3">Estudiante</option>
                  <option value="4">Persona Religiosa</option>
                  <option value="5">Persona inactiva o dependiente de Residencia Temporal</option>
                </select>
              </div>
            )}
            
            <Link to="/" className="normal-link-estandar su-20">Volver</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolicitarResidencia; 