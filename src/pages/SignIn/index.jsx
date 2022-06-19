import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { AiOutlineMail } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"

import { Link } from "react-router-dom";

export function SignIn() {

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
        />
        <label htmlFor="password" className="sr-only">Senha</label>
        <Input
          icon={RiLockPasswordLine}
          placeholder="E-mail"
          type="password"
          id="password"
        />

        <Button title={"Entrar"} />

        <Link to="/signup">
          Criar Conta
        </Link>

      </Form>


      <Background />


    </Container>
  )

}