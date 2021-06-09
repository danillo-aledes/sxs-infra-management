import React, { useState, useEffect } from 'react';
import Lista from '../../components/Lista'

import api from '../../services/api'

const Infraestrutura = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    ListaInfraestrutura();
  }, []);

  async function ListaInfraestrutura() {
    const response = await api.get('infra');

    const maquinas = [];
    for (let i = 0; i < response.data.length; i++) {
      maquinas.push({
        _id: response.data[i]._id,
        sxs_infra_user: response.data[i].sxs_infra_user.sxs_user_name,
        sxs_infra_hostname: response.data[i].sxs_infra_hostname,
        sxs_infra_model: response.data[i].sxs_infra_model,
        sxs_infra_local: response.data[i].sxs_infra_local,
        sxs_infra_cisco_amp: response.data[i].sxs_infra_cisco_amp,
        sxs_infra_bomgar: response.data[i].sxs_infra_bomgar,
        sxs_infra_sccm: response.data[i].sxs_infra_sccm,
        sxs_infra_service_tag: response.data[i].sxs_infra_service_tag,
        sxs_infra_os: response.data[i].sxs_infra_os
      });
    }

    setData(maquinas);
  }

  return (
    <Lista data={data} categoria="infra" />
  );
}

export default Infraestrutura;
