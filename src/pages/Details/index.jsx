import { Container, Links, Content } from "./styles"

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"
export function Details() {


  return (
    <Container>
      <Header />
      <main>
        <Content>

          <ButtonText title="Excluir nota" />
          
          <h1>Introdução ao React</h1>

          <p>
             ipsum dolor sit amet consectetur, adipisicing elit. Repellat facere aliquam, non error eligendi saepe voluptates, dolores nobis temporibus voluptatum illo aut distinctio delectus alias perspiciatis. Ratione hic nesciunt architecto.

          </p>

          <Section title="Links uteis">
            <Links>
              <li>
                <a href="#">https://github.com/luiszkm</a>
              </li>
              <li>
                <a href="#">https://github.com/luiszkm</a>
              </li>
            </Links>

          </Section>

          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="Node" />

          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}