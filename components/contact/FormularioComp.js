// components/FormularioComp.js
import React, { useState } from 'react';
import axios from 'axios'; // Puedes usar axios o el método fetch para realizar la solicitud HTTP

const FormularioComp = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
    mensaje1: '',
    mensaje2: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/formulario', formData);

      // Maneja la respuesta del servidor
      console.log(response.data);

      // Puedes realizar acciones adicionales según la respuesta del servidor
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <form style={{ width: '50%', margin: 'auto' }} onSubmit={handleSubmit}>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="nombre">
          Nombre:
        </label>
        <input
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '10px' }}
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="email">
          Email:
        </label>
        <input
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '10px' }}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="mensaje">
          Nombre de tu negocio:
        </label>
        <textarea
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '10px' }}
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="mensaje1">
          Explica brevemente a que te dedicas:
        </label>
        <textarea
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '10px' }}
          id="mensaje1"
          name="mensaje1"
          value={formData.mensaje1}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button
        style={{
          backgroundColor: '#4caf50',
          color: 'white',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
};

export default FormularioComp;
