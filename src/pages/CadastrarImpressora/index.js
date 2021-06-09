import React, { useRef } from 'react';
import { Form } from '@unform/mobile';

// Componentes
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

const CadastrarImpressora = () => {
  const formRef = useRef(null);

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="sxs_printer_name"
          placeholder={"Nome da Impressora"}
          icon={"user"}
        />

        <Input
          name="sxs_printer_model"
          placeholder={"Modelo"}
          icon={"print"}
        />

        <Input
          name="sxs_printer_toner"
          placeholder={"Tipo de Toner"}
          icon={"paint-brush"}
        />

        <Input
          name="sxs_printer_ip"
          placeholder={"IP"}
          icon={"map-pin"}
        />

        <Input
          name="sxs_printer_local"
          placeholder={"Local"}
          icon={"address-card"}
        />

        <Button activeOpacity={0.6} onPress={() => formRef.current.submitForm()}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}

export default CadastrarImpressora;
