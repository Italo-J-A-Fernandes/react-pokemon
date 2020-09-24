import React from 'react';
import { AvatarContainer, AvatarFoto } from './styles';

const Avatar = ({ src }) => {
  return (
    <AvatarContainer>
      <AvatarFoto img={src} />
    </AvatarContainer>
  );
};

export default Avatar;
