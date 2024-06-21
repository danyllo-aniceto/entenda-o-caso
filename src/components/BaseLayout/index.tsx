import { Container, Header, Logo, Main } from './styles';
import { IBaseLayoutProps } from './types';
import logo from '../../assets/logo.png';

export function BaseLayout({ children }: IBaseLayoutProps) {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>
      <Main>{children}</Main>
    </Container>
  );
}
