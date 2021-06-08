import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #003477;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
`;

// Swipeable
export const SwipeableButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const SwipeableActionText = styled.Text`
  font-size: 16px;
  color: white;
  text-align: center;
`;

export const SwipeableLeftAction = styled.View`
  width: 20%;
  justify-content: center;
  background: blue;
`;

export const SwipeableRightAction = styled.View`
  width: 20%;
  justify-content: center;
  background: red;
`;
