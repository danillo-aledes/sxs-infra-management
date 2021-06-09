import React, { useRef } from 'react';
import { Form } from '@unform/mobile';

// Componentes
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

import api from '../../services/api'

const CadastrarEmpresa = () => {
  const formRef = useRef(null);

  function handleSubmit(data) {
    console.log(data);
    
    api.post('company', data);
    alert("Empresa Cadastrada com sucesso!")
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="sxs_company_country"
          placeholder={"País"}
          icon={"flag-o"}
        />

        <Input
          name="sxs_company_name"
          placeholder={"Nome da empresa"}
          icon={"building-o"}
        />

        <Button activeOpacity={0.6} onPress={() => formRef.current.submitForm()}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}

export default CadastrarEmpresa;
