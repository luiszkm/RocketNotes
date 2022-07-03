import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 25rem  auto;
  grid-template-rows: 10rem 13rem auto 6.4rem;
  grid-template-areas:
  "brand header"
  "menu search"
  "menu content"
  "newnote content "
  ;

  background-color:${({ theme }) => theme.COLORS.BACKGROUND_800};

  
  @media (max-width:600px) {
    padding: 2rem;
    grid-template-columns:auto;
    grid-template-rows: 10rem 7rem 4rem auto auto 6.4rem ;
    grid-template-areas:
  " header"
  " search"
  " brand"
  " menu"
  " content"
  " newnote"
  ;
  }
   
`

export const Brand = styled.div`
  grid-area: brand;
  display: flex;  
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
>h1{
  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.ORANGE};
}
@media (max-width:600px) {
  cursor: pointer;
}
`

export const Menu = styled.ul`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding-top: 6.4rem;
  grid-area:menu;
  display: flex;
  flex-direction: column;
  align-items: center;

  >li{
    margin-bottom: 2.4rem;
  }
  @media(max-width:600px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 0;
    
    >li{
    margin-bottom: 0;
    text-align: center;
   }
    
  }
 
`

export const Search = styled.div`
 grid-area:search;
 padding:  6.4rem 6.4rem 0;

 @media(max-width:768px){
    padding: 0;
  }
 
`

export const Content = styled.div`
 grid-area:content;
 padding:0 6.4rem;
  overflow-y:auto;
  @media(max-width:768px){
    padding: 0;
  }
  
`

export const NewNote = styled(Link)`
  grid-area:newnote;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  align-items: center;
   justify-content: center;

 >svg{
   margin-right: 0.8rem;
 }


`
