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
  Main,
  ImageCopy,
  StyledButton,
} from "./style";

import logo from "./../../assets/logo.png";
import send from "./../../assets/send.png";
import copy from "./../../assets/copy.png";

import { Input } from "../../components/Input";

import React, { useState } from "react";

function copyToClipboard(text: string) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Conteúdo copiado para a área de transferência!");
    })
    .catch((err) => {
      console.error("Falha ao copiar: ", err);
    });
}

export function Dashboard() {
  const [formData, setFormData] = useState({
    dataPublicacao: "",
    descricaoCaso: "",
    contextoInformacao: "",
    parteFonte: "",
    importanciaCaso: "",
    linkYoutube: "",
  });

  const [outputs, setOutputs] = useState<string>("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const generatedOutputs = `
      Data de publicação da notícia: ${formData.dataPublicacao}
      Descrição do caso: ${formData.descricaoCaso}
      Contexto e informação adicional: ${formData.contextoInformacao}
      Parte/Fonte: ${formData.parteFonte}
      Importância do caso: ${formData.importanciaCaso}
      Link do Youtube: ${formData.linkYoutube}
    `;
    setOutputs(generatedOutputs);

    setFormData({
      dataPublicacao: "",
      descricaoCaso: "",
      contextoInformacao: "",
      parteFonte: "",
      importanciaCaso: "",
      linkYoutube: "",
    });
  };

  const handleCopyOutput = () => {
    copyToClipboard(outputs);
  };
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>
      <Main>
        <Title>
          <TextTitle>Entenda o Caso</TextTitle>
        </Title>
        <Form onSubmit={handleSubmit}>
          <Input
            label="Data de publicação da notícia"
            placeholder="Insira a data de publicação da notícia."
            name="dataPublicacao"
            value={formData.dataPublicacao}
            onChange={handleInputChange}
          />
          <Input
            label="Descreva o caso em poucas palavras"
            placeholder="Inclua informações básicas: o que aconteceu, com quem aconteceu, onde aconteceu, quando aconteceu e por que aconteceu"
            name="descricaoCaso"
            value={formData.descricaoCaso}
            onChange={handleInputChange}
            asTextarea
            rows={14}
          />
          <Input
            label="Contexto e informação adicional"
            placeholder="Informações relevantes podem incluir dados relevantes para a economia brasileira ou algum setor industrial em específico, apurações adicionais e/ou análises de conjuntura entre outras."
            name="contextoInformacao"
            value={formData.contextoInformacao}
            onChange={handleInputChange}
            asTextarea
            rows={14}
          />
          <Input
            label="Parte/Fonte:"
            placeholder="Insira a fonte ou parte envolvida..."
            name="parteFonte"
            value={formData.parteFonte}
            onChange={handleInputChange}
          />
          <Input
            label="Por que entender o caso em questão importa?"
            placeholder="Explique de forma sucinta por que o caso é relevante para o leitor."
            name="importanciaCaso"
            value={formData.importanciaCaso}
            onChange={handleInputChange}
            asTextarea
            rows={14}
          />
          <Input
            label="Deseja incluir um link para um vídeo do Youtube?"
            placeholder="Insira o Link completo ex.: https://www.google.com/"
            name="linkYoutube"
            value={formData.linkYoutube}
            onChange={handleInputChange}
          />
          <Button type="submit">
            <TextButton>Gerar</TextButton>
            <ImageButton src={send} alt="send" />
          </Button>
          <ContentDivider>
            <Divider />
          </ContentDivider>
          <div style={{ position: "relative" }}>
            <Input
              label="Saídas Geradas"
              asTextarea
              readOnly
              rows={14}
              labelFontSize="28px"
              labelFontFamily="Gabarito, sans-serif"
              value={outputs}
            />
            <StyledButton type="button" onClick={handleCopyOutput}>
              <ImageCopy src={copy} alt="copy" />
            </StyledButton>
          </div>
        </Form>
      </Main>
    </Container>
  );
}
