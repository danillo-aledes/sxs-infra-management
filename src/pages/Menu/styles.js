import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #003477;
  align-items: center;
  justify-content: center;
`;

export const ContentBtn = styled.View`
  flex-direction: row;
`;

export const Btn = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  align-items: center;
  justify-content: center;
  background: #ededed;
  border-radius: 20px;
  margin: 10px;
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
`;