import React, { useEffect, useRef, useState } from 'react';
import { Alert } from 'react-native';
import { Form } from '@unform/mobile';

// Componentes
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

import api from '../../services/api'

const CadastrarEmpresa = ({ route, navigation }) => {
  const formRef = useRef(null);
  const [updateItem, setUpdateItem] = useState(false);
  const [txtBtn, setTxtBtn] = useState('Cadastrar');
  const [valuePais, setValuePais] = useState('');
  const [valueNome, setValueNome] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    if (route.params !== undefined) {
      const { data } = route.params;

      setUpdateItem(true);
      setId(data._id)
      setValuePais(data.sxs_company_country);
      setValueNome(data.sxs_company_name);
      setTxtBtn('Atualizar');
    }
  }, []);

  function ValidaEmpresa(data) {
    var pais = '';
    var nome = '';

    if (valuePais !== '' && valueNome !== '') {
      pais = valuePais;
      nome = valueNome;
    } else {
      pais = data.sxs_company_country;
      nome = data.sxs_company_name;
    }

    if (pais !== undefined && pais !== '' && nome !== undefined && nome !== '') {
      var msg = '';
      if (updateItem) {
        Object.assign(data, { _id: id });

        api.put('company', data);

        msg = 'Empresa atualizada com sucesso!';
      } else {
        api.post('company', data);
        msg = 'Empresa cadastrada com sucesso!';
      }

      Alert.alert(
        "Sucesso",
        msg,
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
      <Form ref={formRef} onSubmit={ValidaEmpresa}>
        <Input
          name="sxs_company_country"
          placeholder={"País"}
          icon={"flag-o"}
          defaultValue={valuePais}
        />

        <Input
          name="sxs_company_name"
          placeholder={"Nome da empresa"}
          icon={"building-o"}
          defaultValue={valueNome}
        />

        <Button activeOpacity={0.6} onPress={() => formRef.current.submitForm()}>
          {txtBtn}
        </Button>
      </Form>
    </Container>
  );
}

export default CadastrarEmpresa;
