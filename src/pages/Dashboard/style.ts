import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  // width: 1440px;
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

export const Title = styled.div`
  margin-top: 10px;
  height: 75px;
`;

export const TextTitle = styled.span`
  margin-left: 189px;
  font-family: "Gabarito", sans-serif;
  font-weight: 400;
  font-size: 28px;
  line-height: 33.6px;
`;
