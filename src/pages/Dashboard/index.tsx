import {
  Button,
  Divider,
  Form,
  ImageButton,
  TextButton,
  TextTitle,
  Title,
  ContentDivider,
  ImageCopy,
  StyledButton,
  Wrapper,
  Content,
  Tooltip,
} from "./style";

import send from "./../../assets/send.png";
import copy from "./../../assets/copy.png";

import { Input } from "../../components/Input";

import React, { useState } from "react";
import { BaseLayout } from "../../components/BaseLayout";
import { copyToClipboard } from "../../utils/copyToClipBoard";
import { IForm } from "./types";
import { defaultValueForm } from "./utils/defaultValueForm";
import { generatedOutputs } from "./utils/generateOutputs";

export function Dashboard() {
  const [formData, setFormData] = useState<IForm>(defaultValueForm);
  const [outputs, setOutputs] = useState("");
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = generatedOutputs(formData);
    setOutputs(result);

    setFormData(defaultValueForm);
  };

  const handleCopyOutput = () => {
    copyToClipboard(outputs);
    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
    }, 2000); // Tooltip será visível por 2 segundos
  };

  return (
    <BaseLayout>
      <Content>
        <Title>
          <TextTitle>Entenda o Caso</TextTitle>
        </Title>
        <Form onSubmit={handleSubmit}>
          <Input
            label="Data de publicação da notícia"
            placeholder="Insira a data de publicação da notícia."
            name="publicationDate"
            value={formData.publicationDate}
            onChange={handleInputChange}
          />
          <Input
            label="Descreva o caso em poucas palavras"
            placeholder="Inclua informações básicas: o que aconteceu, com quem aconteceu, onde aconteceu, quando aconteceu e por que aconteceu"
            name="caseDescription"
            value={formData.caseDescription}
            onChange={handleInputChange}
            asTextarea
          />
          <Input
            label="Contexto e informação adicional"
            placeholder="Informações relevantes podem incluir dados relevantes para a economia brasileira ou algum setor industrial em específico, apurações adicionais e/ou análises de conjuntura entre outras."
            name="contextInformation"
            value={formData.contextInformation}
            onChange={handleInputChange}
            asTextarea
          />
          <Input
            label="Parte/Fonte:"
            placeholder="Insira a fonte ou parte envolvida..."
            name="partFont"
            value={formData.partFont}
            onChange={handleInputChange}
          />
          <Input
            label="Por que entender o caso em questão importa?"
            placeholder="Explique de forma sucinta por que o caso é relevante para o leitor."
            name="importanceCase"
            value={formData.importanceCase}
            onChange={handleInputChange}
            asTextarea
          />
          <Input
            label="Deseja incluir um link para um vídeo do Youtube?"
            placeholder="Insira o Link completo ex.: https://www.google.com/"
            name="linkYoutube"
            value={formData.linkYoutube}
            onChange={handleInputChange}
            isUrl
          />
          <Button type="submit">
            <TextButton>Gerar</TextButton>
            <ImageButton src={send} alt="send" />
          </Button>
          <ContentDivider>
            <Divider />
          </ContentDivider>
          <Wrapper>
            <Input
              label="Saídas Geradas"
              asTextarea
              readOnly
              labelFontSize="28px"
              labelFontFamily="Gabarito, sans-serif"
              value={outputs}
            />
            <StyledButton type="button" onClick={handleCopyOutput}>
              <ImageCopy src={copy} alt="copy" />
              <Tooltip visible={tooltipVisible}>Copiado</Tooltip>
            </StyledButton>
          </Wrapper>
        </Form>
      </Content>
    </BaseLayout>
  );
}
