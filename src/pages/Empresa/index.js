import React from 'react';
import { FlatList, Animated } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {
  Container, Title, SwipeableButton, SwipeableActionText, SwipeableLeftAction, SwipeableRightAction
} from './styles';

const Empresa = () => {
  const data = [
    {
      id: 1,
      nome: "Empresa 1"
    },
    {
      id: 2,
      nome: "Empresa 2"
    },
    {
      id: 3,
      nome: "Empresa 3"
    },
    {
      id: 4,
      nome: "Empresa 4"
    },
  ]

  function LeftActions({ progress, dragX }) {
    const animationText = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });

    return (
      <SwipeableLeftAction>
        <SwipeableButton>
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
            <Title>{item.nome}</Title>
          </Swipeable>
        )}
        style={{ margin: 10, backgroundColor: "#fff" }}
      />
    </Container>
  );
}

export default Empresa;
