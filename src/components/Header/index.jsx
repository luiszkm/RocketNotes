import { RiShutDownLine} from 'react-icons/ri';
import { Container, Profile, Logout} from "./style";
export function Header (){


  return(

    <Container>
      <Profile>
        <img src="https://github.com/luiszkm.png" alt="Foto do usuário " />
        <div>
          <span>Bem Vindo</span>
          <strong>Luis Murilo</strong>
        </div>
      </Profile>
      <Logout>
      <RiShutDownLine/>
      </Logout>
    </Container>
  )
}