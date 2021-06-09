import React, { useEffect, useState } from 'react';
import Lista from '../../components/Lista'

import api from '../../services/api';

const Usuario = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    ListaUsuario();
  }, []);

  async function ListaUsuario() {
    const response = await api.get('users');

    const usuarios = [];
    for (let i = 0; i < response.data.length; i++) {
      usuarios.push({
        _id: response.data[i]._id,
        sxs_user_name: response.data[i].sxs_user_name,
        sxs_user_role: response.data[i].sxs_user_role,
        sxs_user_local: response.data[i].sxs_user_local
      });
    }

    setData(usuarios);
  }

  return (
    <Lista data={data} categoria="usuario" />
  );
}

export default Usuario;
