import styled from "styled-components";
import { Color } from "../../types";

const StyledButton = styled.button`
  width: 100%;
  padding: 13px;
  font-size: 24px;
  font-weight: 400;
  color: ${Color.White};
  background: ${Color.Turquoise};
  border: none;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover {
    background: ${(props) =>
      props.disabled ? Color.Turquoise : Color.DarkTurquoise};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }

  &:active {
    box-shadow: ${(props) =>
      props.disabled ? "none" : `inset 0px 0px 10px ${Color.Black}`};
  }
`;

export { StyledButton };
