import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color:${({ theme}) => theme.COLORS.ORANGE};
  color:${({ theme}) => theme.COLORS.BACKGROUND_800};

  height: 5.6rem;
  padding: 0 1.6rem;
  border-radius: 1rem;
  border: 0 ;
  font-weight: 500;
  margin-top: 1.6rem;

  &:disabled{
    opacity: 0.5;
    cursor: pointer;
  }
`