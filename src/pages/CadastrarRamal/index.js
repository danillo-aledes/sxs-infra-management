import React, { useRef } from 'react';
import { Form } from '@unform/mobile';

// Componentes
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

const CadastrarRamal = () => {
  const formRef = useRef(null);

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="sxs_ramal_user"
          placeholder={"Nome"}
          icon={"user"}
        />

        <Input
          name="sxs_ramal_local"
          placeholder={"Local"}
          icon={"address-card"}
        />

        <Input
          name="sxs_ramal_ramal"
          placeholder={"Ramal"}
          icon={"phone"}
        />

        <Input
          name="sxs_ramal_ip"
          placeholder={"IP"}
          icon={"map-pin"}
        />

        <Input
          name="sxs_ramal_mac"
          placeholder={"MAC Address"}
          icon={"gg-circle"}
        />

        <Button activeOpacity={0.6} onPress={() => formRef.current.submitForm()}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}

export default CadastrarRamal;
