import styled from "styled-components";

interface TooltipProps {
  visible: boolean;
}

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

  @media (max-width: 420px) {
    margin-left: 0px;
  }
`;

export const Main = styled.main`
  margin-top: 60px;
  padding: 1rem;
  overflow-y: auto;
  flex-grow: 1;
`;

export const MainContent = styled.div`
  margin-inline: 189px;

  @media (max-width: 1000px) {
    margin-inline: 80px;
  }

  @media (max-width: 650px) {
    margin-inline: 40px;
  }
  @media (max-width: 420px) {
    margin-inline: 20px;
  }
`;

export const Title = styled.div`
  margin-top: 10px;
  height: 75px;
  @media (max-width: 420px) {
    margin-top: 2px;
  }
`;

export const TextTitle = styled.span`
  font-family: "Gabarito", sans-serif;
  font-weight: 400;
  font-size: 28px;
  line-height: 33.6px;

  @media (max-width: 420px) {
    font-size: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 420px) {
    gap: 5px;
  }
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
  @media (max-width: 420px) {
    padding-block: 18px;
  }
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

export const Tooltip = styled.div<TooltipProps>`
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  background-color: #fc4a04;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Position above the button */
  left: 50%;
  transform: translateX(-50%);
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.3s;
  width: 100px;
`;
