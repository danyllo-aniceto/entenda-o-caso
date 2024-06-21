import styled from "styled-components";
import { ITooltipProps } from "./types";

export const Title = styled.div`
  margin-top: 10px;
  height: 75px;
`;

export const TextTitle = styled.span`
  font-family: "Gabarito", sans-serif;
  font-weight: 400;
  font-size: 28px;
  line-height: 33.6px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 1239px;
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
`;

export const ImageButton = styled.img`
  width: 14px;
  height: 14px;
`;

export const ContentDivider = styled.div`
  padding-block: 36px;
`;

export const Divider = styled.div`
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

export const Wrapper = styled.div`
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1239px;
  margin: 0 auto;
`;

export const Tooltip = styled.div<ITooltipProps>`
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
