import React from 'react';
import { MoreButton } from './Button.styled';

export const Button = ({ loadMore }) => {
  return <MoreButton onClick={loadMore}>Load more</MoreButton>;
};
