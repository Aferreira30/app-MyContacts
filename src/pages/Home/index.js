import { Container, Header , ListContainer, Card, InputSearchContainer} from "../../pages/Home/styles";

import { Link } from "react-router-dom";

import arow from '../../assets/images/icons/setacima.svg';
import editar from '../../assets/images/icons/editar.svg';
import lixeira from '../../assets/images/icons/lixeira.svg';



export default function Home(){
  return (
    <Container>


       <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..."/>
      </InputSearchContainer>

      <Header>
        <strong>3 Contatos</strong>
        <Link to="/novo">Novo contato</Link>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arow} alt="Seta Direcional" />
          </button>
        </header>
      </ListContainer>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Alexander Ferreira</strong>
              <small>Instagram</small>
            </div>
            <span>devalexanderferreira@gmail.com</span>
            <span>(21) 96766-1148</span>
          </div>

            <div className="actions">
              <Link to="/editar/123">
                <img src={editar} alt="Editar" />
              </Link>
              <button type="button">
                <img src={lixeira} alt="Deletar" />
              </button>
            </div>
        </Card>
    </Container>
  )
}