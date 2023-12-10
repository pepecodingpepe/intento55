// pages/api/formulario.js

import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Método no permitido
  }

  const { nombre, email, mensaje } = req.body;

  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('tu_basede_datos');
    const collection = database.collection('tu_coleccion');

    const result = await collection.insertOne({
      nombre,
      email,
      mensaje,
    });

    res.status(201).json({ success: true, data: result.ops[0] });
  } catch (error) {
    console.error('Error al insertar en la base de datos:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  } finally {
    await client.close();
  }
}
