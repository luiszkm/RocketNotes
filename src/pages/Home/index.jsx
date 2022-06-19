import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { RiSearchLine} from 'react-icons/ri';
import {Section} from '../../components/Section';

export function Home() {


  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header></Header>
      <Menu>

        <li><ButtonText title="Todos" isActive /></li>
        <li><ButtonText title="Front-End" /></li>
        <li><ButtonText title="React" /></li>
        <li><ButtonText title="Node" /></li>

      </Menu>

      <Search>
        <Input 
        placeholder="Pesquisar sobre o Titulo" 
        icon={RiSearchLine} />
      </Search>

      <Content>
          <Section title="Minhas Notas">
            <Note title data={{title:"React",tags:[
              {id: "1" ,name:"React"},
              {id: "2" , name:"Node"},
            ]
            }}
             />
          
          </Section>
      </Content>

      <NewNote to="/notecreate">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.9844 7.98438H7.98438V13.9844H6.01562V7.98438H0.015625V6.01562H6.01562V0.015625H7.98438V6.01562H13.9844V7.98438Z" fill="#232129" />
        </svg>
      
        Criar Nota
      </NewNote>

    </Container>
  )
}