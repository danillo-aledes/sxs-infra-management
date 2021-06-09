import React, { useRef } from 'react';
import { Form } from '@unform/mobile';

// Componentes
import Input from '../../components/Input';

import { Container, ContentButton, ButtonText } from './styles';

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

        <ContentButton activeOpacity={0.6} onPress={() => formRef.current.submitForm()}>
          <ButtonText>Cadastrar</ButtonText>
        </ContentButton>
      </Form>
    </Container>
  );
}

export default CadastrarEmpresa;
