import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 11rem auto;
  grid-template-areas: 
  "header"
  "container";


`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width:55rem;
  width:100%;
  margin: 4rem auto;
  >.sr-only {
  opacity: 0;
  width: 1px;
  height: 1px;
  position: absolute;
  margin: -1px;
  white-space: nowrap;
  overflow: hidden;
  border-width: 0;
  clip: rect(0, 0, 0, 0);
}
  >header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    margin-bottom: 3.6rem;
    a{
      font-size: 2rem;
      color:${({theme}) => theme.COLORS.GRAY_100}
    }
   
  }
`