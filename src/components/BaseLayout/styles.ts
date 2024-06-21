import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  height: 64px;
  border: 0px, 0px, 1px, 0px;
  background-color: rgba(171, 255, 179, 1);
  border-bottom: 1px solid rgba(224, 224, 224, 1);
`;

export const Logo = styled.img`
  width: 123px;
  height: 43px;
  margin-top: 10px;
  margin-left: 52px;
`;

export const Main = styled.main`
  padding: 1rem;
  overflow-y: auto;
  flex: 1;
`;
