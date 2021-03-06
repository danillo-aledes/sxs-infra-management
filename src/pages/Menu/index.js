import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import { Container, Btn, ContentBtn, Image, Title } from './styles';

const Menu = ({ navigation }) => {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#003477" />

      <ContentBtn>
        <Btn activeOpacity={0.6} onPress={() => navigation.push('Empresa')}>
          <Image source={require('../../assets/company.png')} />
          <Title>Empresa</Title>
        </Btn>

        <Btn activeOpacity={0.6} onPress={() => navigation.push('Infraestrutura')}>
          <Image source={require('../../assets/infra.png')} />
          <Title>Infraestrutura</Title>
        </Btn>
      </ContentBtn>

      <ContentBtn>
        <Btn activeOpacity={0.6} onPress={() => navigation.push('Impressora')}>
          <Image source={require('../../assets/printer.png')} />
          <Title>Impressoras</Title>
        </Btn>

        <Btn activeOpacity={0.6} onPress={() => navigation.push('Usuario')}>
          <Image source={require('../../assets/user.png')} />
          <Title>Usuários</Title>
        </Btn>
      </ContentBtn>

      <ContentBtn>
        <Btn activeOpacity={0.6} onPress={() => navigation.push('Ramal')}>
          <Image source={require('../../assets/ramal.png')} />
          <Title>Ramal</Title>
        </Btn>
      </ContentBtn>
    </Container>
  );
}

export default Menu;
