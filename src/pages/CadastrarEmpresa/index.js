import React, { useRef } from 'react';
import { Form } from '@unform/mobile';

// Componentes
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

const CadastrarEmpresa = () => {
  const formRef = useRef(null);

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="pais"
          placeholder={"País"}
          icon={"flag-o"}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Input
          name="nomeEmpresa"
          placeholder={"Nome da empresa"}
          icon={"building-o"}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Button activeOpacity={0.6} onPress={() => formRef.current.submitForm()}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}

export default CadastrarEmpresa;
