import React, { useEffect, useState } from 'react';
import { Animated, FlatList, RefreshControl, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import api from '../../services/api'

// Estilo
import {
  Container, TitleFlatList, SubtitleFlatList, SwipeableButton, SwipeableActionText, SwipeableLeftAction,
  SwipeableRightAction
} from './styles';

const Lista = ({ navigation, data, categoria, refresh }) => {
  const [isFetching, setFetching] = useState(false);
  const [iconName, setIconName] = useState('');
  const [rota, setRota] = useState('');

  useEffect(() => {
    RenderIcon();
  }, [categoria])

  const onRefresh = () => {
    setFetching(true);
    refresh();
    setTimeout(() => setFetching(false), 50);
  };

  function deleteItem(id) {
    var rota = '';
    switch (categoria) {
      case "empresa":
        rota = 'company';
        break;
      case "infra":
        rota = 'infra';
        break;
      case "impressora":
        rota = 'printers';
        break;
      case "usuario":
        rota = 'users';
        break;
      case "ramal":
        rota = 'ramais';
        break;
    }

    const confirm = () => {
      api.delete(`${rota}/${id}`);
      refresh();
    }

    Alert.alert(
      "Excluir item",
      "Tem certeza que deseja excluir este item ?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { text: "Sim", onPress: () => confirm() }
      ]
    );
  }

  // Ações do Swipeable
  function LeftActions({ progress, dragX, item }) {
    const animationText = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });

    return (
      <SwipeableLeftAction>
        <SwipeableButton
          onPress={() => {
            navigation.navigate(`${rota}`, {
              data: item
            });
          }}
        >
          <FontAwesome
            name={'pencil-square-o'}
            size={15}
            color={'#fff'}
          />

          <SwipeableActionText
            as={Animated.Text}
            style={{ transform: [{ scale: animationText }] }}
          >
            Editar
        </SwipeableActionText>
        </SwipeableButton>
      </SwipeableLeftAction>
    );
  }

  function RightActions({ progress, dragX, item }) {
    const animationText = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });

    return (
      <SwipeableRightAction>
        <SwipeableButton onPress={() => deleteItem(item._id)}>
          <FontAwesome
            name={'trash-o'}
            size={15}
            color={'#fff'}
          />

          <SwipeableActionText
            as={Animated.Text}
            style={{ transform: [{ scale: animationText }] }}
          >
            Excluir
          </SwipeableActionText>
        </SwipeableButton>
      </SwipeableRightAction>
    );
  }

  // Renderização da lista (Ícone, Título e Sub Título)
  function RenderIcon() {
    switch (categoria) {
      case "empresa":
        setIconName('building-o');
        setRota('CadastrarEmpresa');
        break;
      case "infra":
        setIconName('server');
        setRota('CadastrarInfraestrutura');
        break;
      case "impressora":
        setIconName('print');
        setRota('CadastrarImpressora');
        break;
      case "usuario":
        setIconName('user');
        setRota('CadastrarUsuario');
        break;
      case "ramal":
        setIconName('phone');
        setRota('CadastrarRamal');
        break;
      default:
        break;
    }
  }

  function RenderTitle(item) {
    switch (categoria) {
      case "empresa":
        return <TitleFlatList>{item.sxs_company_name}</TitleFlatList>
      case "infra":
        return <TitleFlatList>{item.sxs_infra_user}</TitleFlatList>
      case "impressora":
        return <TitleFlatList>{item.sxs_printer_name}</TitleFlatList>
      case "usuario":
        return <TitleFlatList>{item.sxs_user_name}</TitleFlatList>
      case "ramal":
        return <TitleFlatList>{item.sxs_ramal_user}</TitleFlatList>
      default:
        break;
    }
  }

  function RenderSubTitle(item) {
    switch (categoria) {
      case "empresa":
        return <SubtitleFlatList>País: {item.sxs_company_country}</SubtitleFlatList>
      case "infra":
        return <SubtitleFlatList>Domínio: {item.sxs_infra_hostname}</SubtitleFlatList>
      case "impressora":
        return <SubtitleFlatList>IP: {item.sxs_printer_ip}</SubtitleFlatList>
      case "usuario":
        return <SubtitleFlatList>Local: {item.sxs_user_local}</SubtitleFlatList>
      case "ramal":
        return <SubtitleFlatList>Ramal: {item.sxs_ramal_ramal}</SubtitleFlatList>
      default:
        break;
    }
  }

  const renderList = ({ item }) => (
    <Swipeable
      renderLeftActions={(progress, dragX) =>
        <LeftActions
          progress={progress}
          dragX={dragX}
          item={item}
        />
      }
      renderRightActions={(progress, dragX) =>
        <RightActions
          progress={progress}
          dragX={dragX}
          item={item}
        />
      }
    >
      <ListItem key={item._id} bottomDivider>
        <FontAwesome
          name={iconName}
          size={30}
          color={'#003477'}
        />

        <ListItem.Content>
          {RenderTitle(item)}

          {RenderSubTitle(item)}
        </ListItem.Content>
      </ListItem>
    </Swipeable>
  );

  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={renderList}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
        }
      />
    </Container>
  );
}

export default Lista;
