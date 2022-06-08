import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  padding-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  >header{
    width: 100%;
    height: 14.4rem;
    background-color:${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    padding: 0 12.4rem;
    svg{
      font-size: 2.4rem;
      color:${({ theme }) => theme.COLORS.GRAY_100};
    }
  }


`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 35rem;
  
  >div:nth-child(7){
    margin-top: 2.4rem;
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

export const Avatar = styled.div`
  margin-top: -9rem;
  width: 18.6rem;
  height: 18.6rem;
  margin-bottom: 6rem;
  position: relative;
  >img{
  width: 18.6rem;
  height: 18.6rem;
  border-radius: 50%;
  
  }
  >label{
    width:4.8rem;
    height:4.8rem;
    background-color:${({ theme }) => theme.COLORS.ORANGE};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    right: 0rem;
    bottom: .5rem;
    cursor: pointer;

    >input{
      display: none;
    }
    >svg{
      font-size: 2.4rem;
      color:${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }

`