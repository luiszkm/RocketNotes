import {Container, Form} from './styles'
import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import { Textarea } from '../../components/Textarea'
export function NoteCreate (){


  return(
    <Container>
      <Header></Header>
      <Form>
      <header>
        <h1>Criar Nota</h1>
        <a href="#">Voltar</a>
      </header>

      <label htmlFor="title" className="sr-only">Title</label>
      <Input
      placeholder="Titulo"
      type = "text"
      id = "titile"
      />
      <label className="sr-only" htmlFor="observation">Observações</label>
      <Textarea
      id = "observation "
      placeholder = "Observações" />
     

      <Button title="Salvar"/>
      </Form>
    </Container>
  )
}