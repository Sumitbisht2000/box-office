import React from 'react';
import { TitleWrapper } from './Title.styled';

const Title = ({ Title, subtitle }) => {
  return (
    <TitleWrapper>
      <h1>{Title}</h1>
      <p>{subtitle}</p>
    </TitleWrapper>
  );
};

export default Title;
