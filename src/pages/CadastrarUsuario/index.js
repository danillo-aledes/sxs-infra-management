import React, { useRef } from 'react';
import { Form } from '@unform/mobile';

// Componentes
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

import api from '../../services/api'

const CadastrarUsuario = () => {
  const formRef = useRef(null);

  function handleSubmit(data) {
    api.post('users', data);

    console.log(data);
    alert("Usuário Cadastrado com sucesso!")
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="sxs_user_name"
          placeholder={"Usuario"}
          icon={"user"}
        />

        <Input
          name="sxs_user_role"
          placeholder={"Ocupação / Profissão"}
          icon={"group"}
        />

        <Input
          name="sxs_user_local"
          placeholder={"Local"}
          icon={"home"}
        />

        <Button activeOpacity={0.6} onPress={() => formRef.current.submitForm()}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}

export default CadastrarUsuario;
