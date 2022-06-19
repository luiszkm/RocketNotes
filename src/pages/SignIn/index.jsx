import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"

import { MyContext } from "../../myContext";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignIn() {

  const data = useContext(MyContext)
  console.log(data);
  
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