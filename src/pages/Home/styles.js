import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  height: 100vh;
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
`

export const Search = styled.div`
 grid-area:search;
 background-color: green;

`

export const Content = styled.div`
 grid-area:content;
 background-color: pink;

`

export const NewNote = styled.button`
  grid-area:newnote;
 background-color: ${({ theme }) => theme.COLORS.ORANGE};

 display: flex;
 align-items: center;
 justify-content: center;

 >svg{
   margin-right: 0.8rem;
 }


`
