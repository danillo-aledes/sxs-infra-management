import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #fff;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;
