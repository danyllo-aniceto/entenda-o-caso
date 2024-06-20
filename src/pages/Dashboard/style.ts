import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.header`
  width: 1440px;
  height: 64px;
  border: 0px, 0px, 1px, 0px;
  background-color: rgba(171, 255, 179, 1);
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  position: fixed;
  z-index: 1000;
`;

export const Logo = styled.img`
  width: 123px;
  height: 43px;
  margin-top: 10px;
  margin-left: 52px;
`;

export const Main = styled.main`
  margin-top: 60px;
  padding: 1rem;
  overflow-y: auto;
  flex-grow: 1;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-inline: 189px;
`;

export const Button = styled.button`
  width: 93px;
  height: 40px;
  border-radius: 6px;
  border: 1px solid rgba(171, 255, 179, 1);
  background-color: rgba(171, 255, 179, 1);
  padding: 10.5px, 17.5px, 10.5px, 17.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  cursor: pointer;

  &:hover {
    background-color: #fc4a04;
    border-color: #fc4a04;
    color: white;
  }
`;

export const TextButton = styled.span`
  font-family: "Gabarito", sans-serif;
  font-weight: 700;
  font-size: 14px;
  // line-height: 16.8px;
`;

export const ImageButton = styled.img`
  width: 14px;
  height: 14px;
`;

export const ContentDivider = styled.div`
  padding-block: 36px;
`;

export const Divider = styled.div`
  //width: 1241px;
  height: 1px;
  background-color: rgba(229, 231, 235, 1);
  padding: 17.5px, 0px, 17.5px, 0px;
  display: flex;
`;

export const ImageCopy = styled.img`
  width: 14px;
  height: 14px;
`;

export const StyledButton = styled.button`
  position: absolute;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  right: 8px;
  top: 22%;
`;
