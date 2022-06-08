import { Container, Form, Avatar } from "./styles"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { AiOutlineMail, AiOutlineArrowLeft, AiOutlineUser,AiOutlineCamera} from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"


export function ProFile() {

  return (
    <Container>
      <header>
        <a href="#">
          <AiOutlineArrowLeft />
        </a>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/luiszkm.png" alt="foto do usuario" />

          <label htmlFor="avatar">
            <AiOutlineCamera/>

            <input 
            type="file" 
            className="sr-only"/>
          </label>
        </Avatar>


        <label htmlFor="name" className="sr-only">Nome</label>
        <Input
          icon={AiOutlineUser}
          placeholder="Nome"
          type="text"
          id="name"
        />
        <label htmlFor="login" className="sr-only">Email</label>
        <Input
          icon={AiOutlineMail}
          placeholder="E-mail"
          type="text"
          id="login"
        />
        <label htmlFor="password" className="sr-only">Senha Antiga</label>
        <Input
          icon={RiLockPasswordLine}
          placeholder="Senha Antiga"
          type="password"
          id="password"
        />
        <label htmlFor="new-password" className="sr-only">Nova Senha</label>
        <Input
          icon={RiLockPasswordLine}
          placeholder="Nova Senha"
          type="password"
          id="new-password"
        />

        <Button title={"Salvar"} />



      </Form>


    </Container>

  )

}