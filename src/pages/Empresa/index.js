import React, { useEffect, useState } from 'react';
import Lista from '../../components/Lista'

import api from '../../services/api';

const Empresa = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    ListaEmpresa();
  }, []);

  async function ListaEmpresa() {
    const response = await api.get('company');

    const empresas = [];
    for (let i = 0; i < response.data.length; i++) {
      empresas.push({
        _id: response.data[i]._id,
        sxs_company_name: response.data[i].sxs_company_name,
        sxs_company_country: response.data[i].sxs_company_country
      });
    }

    setData(empresas);
  }

  return (
    <Lista data={data} categoria="empresa" />
  );
}

export default Empresa;
