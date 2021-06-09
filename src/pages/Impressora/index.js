import React, {useState, useEffect} from 'react';
import Lista from '../../components/Lista'

import api from '../../services/api'

const Impressora = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    ListaImpressoras();
  }, []);

  async function ListaImpressoras() {
    const response = await api.get('printers');

    const impressoras = [];
    for (let i = 0; i < response.data.length; i++) {
      impressoras.push({
        _id: response.data[i]._id,
        sxs_printer_name: response.data[i].sxs_printer_name,
        sxs_printer_model: response.data[i].sxs_printer_model,
        sxs_printer_toner: response.data[i].sxs_printer_toner,
        sxs_printer_ip: response.data[i].sxs_printer_ip,
        sxs_printer_local: response.data[i].sxs_printer_local
      });
    }

    setData(impressoras);
  }

  return (
    <Lista data={data} categoria="impressora" />
  );
}

export default Impressora;
