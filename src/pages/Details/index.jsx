import { Container , Links} from "./styles"

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"

export function Details() {


  return (
    <Container>
      <Header />

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
      

      </Section>
      <Button title="Voltar" loading />

    </Container>
  )
}