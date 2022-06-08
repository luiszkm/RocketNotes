import { Container,Background ,Form} from './styles'
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {ButtonText} from "../../components/ButtonText";

import{AiOutlineMail} from "react-icons/ai"
import{RiLockPasswordLine} from "react-icons/ri"



export function SignUp (){

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
      type = "text"
      id = "name"
      />
       <label htmlFor="login" className="sr-only">Login</label>
      <Input
      icon={AiOutlineMail}
      placeholder="E-mail"
      type = "text"
      id = "login"
      />
       <label htmlFor="password" className="sr-only">Senha</label>
      <label htmlFor="password" className="sr-only">Senha</label>
      <Input
      icon={RiLockPasswordLine}
      placeholder="E-mail"
      type="password"
      id="password"
      />
      
      <Button title={"Cadastrar"} />

      <ButtonText 
      className= "backLogin"
      title="Voltar para o login" />

      </Form>
    </Container>
  )
}