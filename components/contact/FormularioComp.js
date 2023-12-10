// components/FormularioComp.js
import React, { useState } from 'react';
import axios from 'axios'; // Puedes usar axios o el método fetch para realizar la solicitud HTTP

const FormularioComp = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
      />
      <br />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <br />

      <label htmlFor="mensaje">Mensaje:</label>
      <textarea
        id="mensaje"
        name="mensaje"
        value={formData.mensaje}
        onChange={handleChange}
        required
      ></textarea>
      <br />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioComp;

