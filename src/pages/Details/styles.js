import styled from 'styled-components'


export const Container = styled.div`
 display: grid;
  width: 100%;
  min-height: 100vh;
  grid-template-rows: 11rem auto;
  grid-template-areas:
  "header"
  "content";
 
`;

export const Links = styled.ul`
  list-style: none;
  >li{
    margin-top: 1.2rem;
  
  >a{
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
}
`;

