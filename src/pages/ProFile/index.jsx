import { useState } from 'react';
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { AiOutlineMail, AiOutlineArrowLeft, AiOutlineUser, AiOutlineCamera } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import { api } from '../../services/api';

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Form, Avatar } from "./styles"


export function ProFile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordNew, setPasswordNew] = useState()
  const [passwordOld, setPasswordOld] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }
    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview);

  }

  return (
    <Container>
      <header>
        <Link to="/">
          <AiOutlineArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatar}
            alt="foto do usuário" />

          <label htmlFor="avatar">
            <AiOutlineCamera />

            <input
              type="file"
              id="avatar"
              className="sr-only"
              onChange={handleChangeAvatar} />
          </label>
        </Avatar>


        <label htmlFor="name" className="sr-only">Nome</label>
        <Input
          icon={AiOutlineUser}
          placeholder="Nome"
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="login" className="sr-only">Email</label>
        <Input
          icon={AiOutlineMail}
          placeholder="E-mail"
          type="text"
          id="login"
          value={email}
          onChange={e => setEmail(e.target.value)}

        />
        <label htmlFor="password" className="sr-only">Senha Antiga</label>
        <Input
          icon={RiLockPasswordLine}
          placeholder="Senha Antiga"
          type="password"
          id="password"
          onChange={e => setPasswordOld(e.target.value)}

        />
        <label htmlFor="new-password" className="sr-only">Nova Senha</label>
        <Input
          icon={RiLockPasswordLine}
          placeholder="Nova Senha"
          type="password"
          id="new-password"
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button
          title={"Salvar"}
          onClick={handleUpdate}
        />



      </Form>


    </Container>

  )

}