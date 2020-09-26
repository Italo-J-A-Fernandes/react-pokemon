import styled from 'styled-components';

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24.7rem;
  height: 24.7rem;
  margin-top: 3.2rem;
  border-radius: 50%;
  border: 4px solid #00d68f;
  box-sizing: border-box;
  background: #fff;
  z-index: 10;
`;

export const AvatarFoto = styled.div`
  position: relative;
  width: 74%;
  height: 100%;
  background: url(${(props) => (props.img ? props.img : '#fff')}) center;
  background-repeat: no-repeat;
  background-size: contain;
`;
