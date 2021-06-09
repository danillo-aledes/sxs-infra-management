import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #fff;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const ContentButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  max-width: 350px;
  background: #1e4b94;
  border-radius: 10px;
  margin-top: 15px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;