import React from 'react';
import Lista from '../../components/Lista'

const Empresa = () => {
  const data = [
    {
      id: 1,
      nome: "Empresa 1"
    },
    {
      id: 2,
      nome: "Empresa 2"
    },
    {
      id: 3,
      nome: "Empresa 3"
    },
    {
      id: 4,
      nome: "Empresa 4"
    },
    {
      id: 5,
      nome: "Empresa 5"
    },
    {
      id: 6,
      nome: "Empresa 6"
    },
    {
      id: 7,
      nome: "Empresa 7"
    },
    {
      id: 8,
      nome: "Empresa 8"
    },
    {
      id: 9,
      nome: "Empresa 9"
    }
  ]

  return (
    <Lista data={data} />
  );
}

export default Empresa;
