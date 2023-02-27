import ReactDOM  from "react-dom";

import { Overlay, Container, Footer } from "./styles";

import Button from "../Button";

export default function Modal({ danger }){
  return ReactDOM.createPortal(
    <Overlay>
    <Container danger={danger}>
     <h1>a</h1>
     <p>a</p>

      <Footer>
       <button type="button" className="btn-cancelar">Cancelar</button>
       <Button type="button" danger={danger}>Deletar</Button>
      </Footer>
    </Container>
  </Overlay>,
      document.getElementById('modal-root'),
  );

}