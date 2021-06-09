import React from 'react';
import Lista from '../../components/Lista'

const Impressora = () => {
  const data = [
    {
      _id: 1,
      sxs_printer_name: "Impressora 1",
      sxs_printer_model: "HP",
      sxs_printer_toner: "Toner 1",
      sxs_printer_ip: 123.456,
      sxs_printer_local: "Financeiro"
    },
    {
      _id: 2,
      sxs_printer_name: "Impressora 2",
      sxs_printer_model: "Brother",
      sxs_printer_toner: "Toner 2",
      sxs_printer_ip: 789.1011,
      sxs_printer_local: "Compras"
    },
    {
      _id: 3,
      sxs_printer_name: "Impressora 3",
      sxs_printer_model: "Lexmark",
      sxs_printer_toner: "Toner 3",
      sxs_printer_ip: 1213.1415,
      sxs_printer_local: "Vendas"
    }
  ]

  return (
    <Lista data={data} categoria="impressora" />
  );
}

export default Impressora;
