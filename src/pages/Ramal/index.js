import React, { useState, useEffect } from 'react';
import Lista from '../../components/Lista'

import api from '../../services/api'

const Ramal = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    ListaRamal();
  }, []);

  async function ListaRamal() {
    const response = await api.get('ramais');

    const ramais = [];
    for (let i = 0; i < response.data.length; i++) {
      ramais.push({
        _id: response.data[i]._id,
        sxs_ramal_user: response.data[i].sxs_ramal_user.sxs_user_name,
        sxs_ramal_local: response.data[i].sxs_ramal_local,
        sxs_ramal_ramal: response.data[i].sxs_ramal_ramal,
        sxs_ramal_ip: response.data[i].sxs_ramal_ip,
        sxs_ramal_mac: response.data[i].sxs_ramal_mac
      });
    }

    setData(ramais);
  }

  return (
    <Lista data={data} categoria="ramal" />
  );
}

export default Ramal;
