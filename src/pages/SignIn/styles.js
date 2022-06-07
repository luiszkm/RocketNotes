import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'
export const Container = styled.div`
  min-height:100vh;
  display: flex;
  align-items: stretch;
 
`


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 13.6rem;
 
  > h1{
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 6.3rem;
  text-align: center;
  color:${({ theme }) => theme.COLORS.ORANGE};
 }

 > p{
  font-weight: 400;
  font-size: 1.4rem,;
  line-height: 1.8rem;
  text-align: center;
  color:${({ theme }) => theme.COLORS.GRAY_100};

 }
 > h2{
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3.2rem;
  text-align: center;
  color:${({ theme }) => theme.COLORS.WHITE};
  margin: 4.8rem 0;

 }
 > .createAcc{
  margin-top: 12rem;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.1rem;
  text-align: center;
  color:${({ theme }) => theme.COLORS.ORANGE};
 }
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
 
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) 
  no-repeat center center ;
  background-size: cover;



`