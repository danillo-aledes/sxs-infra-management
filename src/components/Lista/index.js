import React from 'react';
import { Animated, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

// Estilo
import {
  Container, TitleFlatList, SubtitleFlatList, SwipeableButton, SwipeableActionText, SwipeableLeftAction,
  SwipeableRightAction
} from './styles';

const Lista = ({ data }) => {

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

  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
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
              <ListItem key={item.id} bottomDivider>
                <FontAwesome
                  name={'building-o'}
                  size={30}
                  color={'#003477'}
                />

                <ListItem.Content>

                  <TitleFlatList>{item.nome}</TitleFlatList>

                  <SubtitleFlatList>
                    Empresa Nº {item.id}
                  </SubtitleFlatList>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>
          </Swipeable>
        )}
      />
    </Container>
  );
}

export default Lista;
