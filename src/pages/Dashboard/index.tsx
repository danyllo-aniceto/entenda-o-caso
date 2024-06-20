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
  Tooltip,
  MainContent,
} from "./style";

import logo from "./../../assets/logo.png";
import send from "./../../assets/send.png";
import copy from "./../../assets/copy.png";

import { Input } from "../../components/Input";

import React, { useState } from "react";

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

interface IFormData {
  dataPublicacao: string;
  descricaoCaso: string;
  contextoInformacao: string;
  parteFonte: string;
  importanciaCaso: string;
  linkYoutube: string;
}

export function Dashboard() {
  const [formData, setFormData] = useState<IFormData>({
    dataPublicacao: "",
    descricaoCaso: "",
    contextoInformacao: "",
    parteFonte: "",
    importanciaCaso: "",
    linkYoutube: "",
  });
  const [outputString, setOutputString] = useState<string>("");

  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const generatedOutputs = `
      Data de publicação da notícia: ${formData.dataPublicacao}\n
      Descrição do caso: ${formData.descricaoCaso}\n
      Contexto e informação adicional: ${formData.contextoInformacao}\n
      Parte/Fonte: ${formData.parteFonte}\n
      Importância do caso: ${formData.importanciaCaso}\n
      Link do Youtube: ${formData.linkYoutube}
    `;

    setOutputString(generatedOutputs);

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
    copyToClipboard(outputString);
    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
    }, 2000); // Tooltip será visível por 2 segundos
  };

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>
      <Main>
        <MainContent>
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
                value={outputString}
              />
              <StyledButton type="button" onClick={handleCopyOutput}>
                <ImageCopy src={copy} alt="copy" />
                <Tooltip visible={tooltipVisible}>Copiado</Tooltip>
              </StyledButton>
            </div>
          </Form>
        </MainContent>
      </Main>
    </Container>
  );
}
