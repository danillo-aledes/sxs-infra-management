import React, { useRef } from 'react';
import { Form } from '@unform/mobile';

// Componentes
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

import api from '../../services/api'

const CadastrarImpressora = () => {
  const formRef = useRef(null);

  function cadastrarImpressora(data) {
    let nome = data.sxs_printer_name;
    let modelo = data.sxs_printer_model;
    let toner = data.sxs_printer_toner;
    let ip = data.sxs_printer_ip;
    let local = data.sxs_printer_local;

    if (nome !== undefined && nome !== '' &&
      modelo !== undefined && modelo !== '' &&
      toner !== undefined && toner !== '' &&
      ip !== undefined && ip !== '' &&
      local !== undefined && local !== '') {

      api.post('company', data);

      Alert.alert(
        "Sucesso",
        "Empresa Cadastrada com sucesso!",
        [
          { text: "OK", onPress: () => navigation.pop() }
        ]
      );
    } else {
      alert("Por favor, preencha os campos vazios");
    }
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={cadastrarImpressora}>
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
