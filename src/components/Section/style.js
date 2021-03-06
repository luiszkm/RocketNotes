import styled from 'styled-components'


export const Container = styled.section`
  margin: 2.8rem 0;
  width: 100%;

 > h2{
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding-bottom: 1.6rem;
  margin-bottom: 1.6rem;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  font-size: 2.4rem;
  font-weight:400;

}

`