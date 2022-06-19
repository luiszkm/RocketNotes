import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import { useState } from "react";

import { useAuth } from "../../hooks/auth"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()
 
  function handleSignIn() {
    signIn({email, password})
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça seu login</h2>

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
          placeholder="E-mail"
          type="password"
          id="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button title={"Entrar"}
          onClick={handleSignIn} />

        <Link to="/signup">
          Criar Conta
        </Link>

      </Form>


      <Background />


    </Container>
  )

}