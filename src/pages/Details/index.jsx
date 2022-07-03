import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import { api } from "../../services/api"

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"

import { Container, Links, Content } from "./styles"

export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate("/")

  }
  async function handleRemove() {
    const confirm = window.confirm("deseja realmente remover a nota?")

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate("/")
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchNote()
  }, [])

  return (
    <Container>
      <Header />
      {
        data &&
        <main>
          <Content>

            <ButtonText
              onClick={handleRemove}
              title="Excluir nota" />

            <h1>
              {data.title}
            </h1>

            <p>
              {data.descriptions}
            </p>

            {
              data.links &&
              <Section title="Links uteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    ))
                  }

                </Links>

              </Section>
            }

            {
              data.links &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag key={String(tag.id)}
                      title={tag.name} />
                  ))
                }

              </Section>
            }
            <Button
              title="Voltar"
              onClick={handleBack} />
          </Content>
        </main>
      }
    </Container>
  )
}