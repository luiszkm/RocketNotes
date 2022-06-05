import styled from 'styled-components'


export const Container = styled.div`
 display: grid;
  width: 100%;
  min-height: 100vh;
  grid-template-rows: 11rem auto;
  grid-template-areas:
  "header"
  "content";
 >main{
   grid-area: content;
    width: 100%;
   padding: 6.4rem 0;
   overflow-y:scroll hidden;
 }
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

export const Content = styled.div`
  margin: 0 auto;
  max-width: 55rem;

  display: flex;
  flex-direction: column;
  

 >button:first-child{
  align-self: flex-end;
  }
  >h1{
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 4.7rem;
    padding-top: 6.4rem;
    
    

  }
  >p{
    text-align: justify;
    font-size: 1.6rem;
    margin-top: 1.6rem;
  }
`