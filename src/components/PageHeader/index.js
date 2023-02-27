import { Link } from "react-router-dom";

import { Container } from "./styles";

import seta from "../../assets/images/icons/setacima.svg" ;


export default function PageHeader({title}){
return (
<Container>
  <Link to="/">
    <img src={seta} alt="seta" />
    <span>Voltar</span>
  </Link>
  <h1>{title}</h1>
</Container>
)
};
