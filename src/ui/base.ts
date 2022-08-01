import styled from "styled-components";
import { Color } from "../types";
import circles from "../assets/circles.svg"

const Wrapper = styled.div`
  max-width: 1512px;
  min-height: 100vh;
  margin: 0px auto;
	padding-top: 203px;
  background: no-repeat url(${circles}) ${Color.Wrapper};
	overflow-x: hidden;

  @media (max-width: 744px) {
    padding-top: 236px;
  }

  @media (max-width: 414px) {
    padding-top: 241px;
  }
`;

const Background = styled.div`
  background: ${Color.Backround};
`;

export { Wrapper, Background };
