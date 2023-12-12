// pages/api/formulario.js

import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Método no permitido
  }

  const { nombre, email, mensaje, mensaje1 } = req.body;

  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('clientes_db');
    const collection = database.collection('dopaminavisual');

    const result = await collection.insertOne({
      nombre,
      email,
      mensaje,
      mensaje1,
    });

    res.status(201).json({ success: true, data: result});
  } catch (error) {
    console.error('Error al insertar en la base de datos:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  } finally {
    await client.close();
  }
}
