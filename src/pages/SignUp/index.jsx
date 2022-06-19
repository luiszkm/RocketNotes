import { useState } from 'react';

import { Container, Background, Form } from './styles'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { AiOutlineMail } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"

import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api'
export function SignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const navigate = useNavigate()

  function handleSignUp() {

    if (!name || !email || !password) {
      return alert("Por favor, preencha todos os campos!")
    }
    api.post("/user", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso")
        navigate("/")
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);

        } else {
          alert("Não foi possível cadastrar")
        }
      })
  }
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua conta</h2>
        <label htmlFor="name" className="sr-only">Nome</label>
        <Input
          icon={AiOutlineMail}
          placeholder="Nome"
          type="text"
          id="name"
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="login" className="sr-only">Login</label>
        <Input
          icon={AiOutlineMail}
          placeholder="E-mail"
          type="text"
          id="login"
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="sr-only">Senha</label>
        <Input
          icon={RiLockPasswordLine}
          placeholder="Senha"
          type="password"
          id="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Cadastrar"
          onClick={handleSignUp} />

        <Link to="/">
          Voltar para o Login
        </Link>

      </Form>
    </Container>
  )
}