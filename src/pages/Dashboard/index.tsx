import {
  Button,
  Container,
  Divider,
  Form,
  Header,
  ImageButton,
  Logo,
  TextButton,
  TextTitle,
  Title,
  ContentDivider,
} from "./style";

import logo from "./../../assets/logo.png";
import send from "./../../assets/send.png";
import { Input } from "../../components/Input";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>
      <Title>
        <TextTitle>Entenda o Caso</TextTitle>
      </Title>
      <Form>
        <Input
          label="Data de publicação da notícia"
          placeholder="Insira a data de publicação da notícia."
        />
        <Input
          label="Descreva o caso em poucas palavras"
          placeholder="Inclua informações básicas: o que aconteceu, com quem aconteceu, onde aconteceu, quando aconteceu e por que aconteceu"
          asTextarea
          rows={20}
        />
        <Input
          label="Contexto e informação adicional"
          placeholder="Informações relevantes podem incluir dados relevantes para a economia brasileira ou algum setor industrial em específico, apurações adicionais e/ou análises de conjuntura entre outras."
          asTextarea
          rows={20}
        />
        <Input
          label="Parte/Fonte:"
          placeholder="Insira a fonte ou parte envolvida..."
        />
        <Input
          label="Por que entender o caso em questão importa?"
          placeholder="Explique de forma sucinta por que a caso é relevante para o leitor. "
          asTextarea
          rows={20}
        />
        <Input
          label="Deseja incluir um link para um vídeo do Youtube?"
          placeholder="Insira a Insira o Link completo ex.: https://www.google.com/ de publicação da notícia."
          rows={4}
          asTextarea
        />
        <Button>
          <TextButton>Gerar</TextButton>
          <ImageButton src={send} alt="send" />
        </Button>
        <ContentDivider>
          <Divider />
        </ContentDivider>

        <Input
          label="Saídas Geradas"
          asTextarea
          readOnly
          rows={14}
          labelFontSize="28px"
          labelFontFamily="Gabarito, sans-serif"
        />
      </Form>
    </Container>
  );
}
