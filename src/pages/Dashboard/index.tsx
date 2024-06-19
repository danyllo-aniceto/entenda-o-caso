import { Container, Header, Logo, TextTitle, Title } from "./style";

import logo from "./../../assets/logo.png";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>
      <Title>
        <TextTitle>Entenda o Caso</TextTitle>
      </Title>
    </Container>
  );
}
