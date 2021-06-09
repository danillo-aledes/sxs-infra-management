import React, { useRef } from 'react';
import { Form } from '@unform/mobile';

// Componentes
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

const CadastrarInfra = () => {
  const formRef = useRef(null);

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="sxs_infra_user"
          placeholder={"Nome"}
          icon={"user"}
        />

        <Input
          name="sxs_infra_hostname"
          placeholder={"Hostname"}
          icon={"desktop"}
        />

        <Input
          name="sxs_infra_model"
          placeholder={"Modelo"}
          icon={"laptop"}
        />

        <Input
          name="sxs_infra_local"
          placeholder={"Local"}
          icon={"home"}
        />

        <Input
          name="sxs_infra_cisco_amp"
          placeholder={"Versão do AMP"}
          icon={"bandcamp"}
        />

        <Input
          name="sxs_infra_bomgar"
          placeholder={"Bomgar"}
          icon={"certificate"}
        />

        <Input
          name="sxs_infra_sccm"
          placeholder={"SCCM"}
          icon={"superpowers"}
        />

        <Input
          name="sxs_infra_service_tag"
          placeholder={"TAG de Serviço"}
          icon={"first-order"}
        />

        <Input
          name="sxs_infra_os"
          placeholder={"Sistema Operacional"}
          icon={"registered"}
        />

        <Button activeOpacity={0.6} onPress={() => formRef.current.submitForm()}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}

export default CadastrarInfra;
