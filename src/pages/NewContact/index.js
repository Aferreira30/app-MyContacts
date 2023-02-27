import PageHeader from "../../components/PageHeader";
import ConatctForm from "../../components/ContactForm";


export default function NewContact(){
  return (
    <>
      <PageHeader title="Novo Contato"/>

      <ConatctForm buttonlabel='Cadastrar'/>

    </>
  )
}