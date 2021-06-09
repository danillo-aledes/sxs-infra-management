import React, { useEffect, useState } from 'react';
import { Animated, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

// Estilo
import {
  Container, TitleFlatList, SubtitleFlatList, SwipeableButton, SwipeableActionText, SwipeableLeftAction,
  SwipeableRightAction
} from './styles';

const Lista = ({ data, categoria }) => {
  const [iconName, setIconName] = useState('');

  useEffect(() => {
    RenderIcon();
  }, [categoria])

  // Ações do Swipeable
  function LeftActions({ progress, dragX }) {
    const animationText = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });

    return (
      <SwipeableLeftAction>
        <SwipeableButton>
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

  function RightActions({ progress, dragX }) {
    const animationText = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });

    return (
      <SwipeableRightAction>
        <SwipeableButton>
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
        break;
      case "infra":
        setIconName('server');
        break;
      case "impressora":
        setIconName('print');
        break;
      case "usuario":
        setIconName('user');
        break;
      case "ramal":
        setIconName('phone');
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
        return <SubtitleFlatList>País: {item.sxs_infra_hostname}</SubtitleFlatList>
      case "impressora":
        return <SubtitleFlatList>País: {item.sxs_printer_ip}</SubtitleFlatList>
      case "usuario":
        return <SubtitleFlatList>País: {item.sxs_user_local}</SubtitleFlatList>
      case "ramal":
        return <SubtitleFlatList>País: {item.sxs_ramal_ramal}</SubtitleFlatList>
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
        />
      }
      renderRightActions={(progress, dragX) =>
        <RightActions
          progress={progress}
          dragX={dragX}
        />
      }
    >
      <TouchableOpacity activeOpacity={0.6}>
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
      </TouchableOpacity>
    </Swipeable>
  );

  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item._id.toString()}
        renderItem={renderList}
      />
    </Container>
  );
}

export default Lista;
