import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from "../../hooks/auth"
import { api } from '../../services/api';
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Container, Profile, Logout } from "./style";

export function Header() {

  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (

    <Container>
      <Profile to="/profile">
        <img src={avatarUrl}
        alt={`foto do(a)${user.name}`} />
        <div>
          <span>{`Bem Vindo ${user.name}!`}</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}