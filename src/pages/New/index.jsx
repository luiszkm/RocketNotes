import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'

import { Container, Form } from './styles'

export function New() {
  const [title, setTitle] = useState("")
  const [descriptions, setDescriptions] = useState("")


  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")

  }

  function handleDeleteLink(linkDeleted) {
    setLinks(prevState => prevState.filter(link => link !== linkDeleted))
  }


  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleDeleteTag(tagDeleted) {
    setTags(prevState => prevState.filter(tag => tag !== tagDeleted))
  }


  async function handleNewNote() {
    if (!title) {
      return alert("Digite um titulo para a nota ")
    }
    if (newLink) {
      return alert("clique no '+' para adicionar ao link ou deixe-o vazio ")
    }
    if (newTag) {
      return alert("clique no '+' para adicionar a tag ou deixe-o vazio ")
    }
    

    await api.post("/notes", {
      title,
      descriptions,
      tags,
      links
    });

    alert("Nota criada coim sucesso")
    navigate("/");
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <label htmlFor="title" className="sr-only">Title</label>
          <Input
            placeholder="Titulo"
            type="text"
            id="title"
            onChange={e => setTitle(e.target.value)}
          />
          <label className="sr-only" htmlFor="observation">Observações</label>


          <Textarea
            id="observation "
            placeholder="Observações"
            onChange={e => setDescriptions(e.target.value)}
          />

          <Section title="Links Úteis">
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleDeleteLink(link)}
                />
              ))
            }
            <NoteItem isNew
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />

          </Section>

          <Section title="Marcadores">
            <div className='tags'>

              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleDeleteTag(tag)} />


                ))

              }

              <NoteItem isNew
                placeholder="Nova Tag"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag} />
            </div>
          </Section>

          <Button
            title="Salvar"
            onClick={() => { handleNewNote() }}
          />
        </Form>
      </main>
    </Container>
  )
}