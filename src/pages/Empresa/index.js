import React, { useEffect, useState } from 'react';
import Lista from '../../components/Lista'

import axios from 'axios'
import { API } from '../../constants/config'

const Empresa = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${API}/company`).then(response => {
      console.log(response.data);

      const listaEmpresas = []
      
      for (let i = 0; i < response.data.length; i++) {
        
        listaEmpresas.push([
          {
            _id: response.data[i]._id,
            sxs_company_name: response.data[i].sxs_company_name,
            sxs_company_country: response.data[i].sxs_company_country
          }
        ])
      }

      setData(listaEmpresas)
    })
  }, []);

  /* const data = [
    {
      _id: 1,
      sxs_company_name: "Empresa 1",
      sxs_company_country: "Estados Un_idos"
    },
    {
      _id: 2,
      sxs_company_name: "Empresa 2",
      sxs_company_country: "Itália"
    },
    {
      _id: 3,
      sxs_company_name: "Empresa 3",
      sxs_company_country: "Alemanha"
    },
    {
      _id: 4,
      sxs_company_name: "Empresa 4",
      sxs_company_country: "Japão"
    },
    {
      _id: 5,
      sxs_company_name: "Empresa 5",
      sxs_company_country: "Jamaica"
    },
    {
      _id: 6,
      sxs_company_name: "Empresa 6",
      sxs_company_country: "Austrália"
    },
    {
      _id: 7,
      sxs_company_name: "Empresa 7",
      sxs_company_country: "Brasil"
    },
    {
      _id: 8,
      sxs_company_name: "Empresa 8",
      sxs_company_country: "Grécia"
    },
    {
      _id: 9,
      sxs_company_name: "Empresa 9",
      sxs_company_country: "Israel"
    }
  ] */

  return (
    <Lista data={data} categoria="empresa" />
  );
}

export default Empresa;
