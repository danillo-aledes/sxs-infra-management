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
          name="infra"
          placeholder={"Infra"}
          icon={"server"}
        />

        <Button activeOpacity={0.6} onPress={() => formRef.current.submitForm()}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}

export default CadastrarInfra;
