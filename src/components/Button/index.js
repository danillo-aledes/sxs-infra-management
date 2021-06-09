import React from 'react';

import { ContentButton, ButtonText } from './styles';

function Button({ children, ...rest }) {
  return (
    <ContentButton {...rest}>
      <ButtonText>{children}</ButtonText>
    </ContentButton>
  );
}

export default Button;
