import styled from 'styled-components/native';
import { ListItem } from 'react-native-elements';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #666360;
`;

// Swipeable
export const SwipeableButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const SwipeableActionText = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: center;
`;

export const SwipeableLeftAction = styled.View`
  width: 20%;
  justify-content: center;
  background: #1e4b94;
`;

export const SwipeableRightAction = styled.View`
  width: 20%;
  justify-content: center;
  background: #c53030;
`;

// Lista
export const TitleFlatList = styled(ListItem.Title)`
  font-size: 20px;
  color: #312e38;
`;

export const SubtitleFlatList = styled(ListItem.Subtitle)`
  font-size: 16px;
  color: #666360;
  margin-top: 5px;
`;
