import { Container, Form } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'

export function NoteCreate() {


  return (
    <Container>
      <Header></Header>
      <main>
      <Form>
        <header>
          <h1>Criar Nota</h1>
          <a href="#">Voltar</a>
        </header>

        <label htmlFor="title" className="sr-only">Title</label>
        <Input
          placeholder="Titulo"
          type="text"
          id="titile"
        />
        <label className="sr-only" htmlFor="observation">Observações</label>


        <Textarea
          id="observation "
          placeholder="Observações" />

        <Section title="Links Úteis">

          <NoteItem value="https://rocketset.com.br" />
          <NoteItem isNew placeholder="Novo link" />

        </Section>

        <Section title="Marcadores">
          <div className='tags'>

         
          <NoteItem value="React" />
          <NoteItem isNew placeholder="Nova Tag" />
          </div>
        </Section>

        <Button title="Salvar" />
      </Form>
      </main>
    </Container>
  )
}