import styled from "styled-components";
import { Color } from "./types";

const Wrapper = styled.div`
  max-width: 1512px;
  height: 100vh;
  margin: 0px auto;
  background: ${Color.Wrapper};
	overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: 744px) {
    padding-top: 41px;
  }

  @media (max-width: 414px) {
    padding-top: 46px;
  }

  &::before {
    content: "";
    position: relative;
    transform: translate(-10px, -100px);
    display: block;
    width: 250px;
    height: 250px;
    background: ${Color.Green};
    border-radius: 125px;
    opacity: 0.31;

    @media (max-width: 744px) {
      transform: translate(-20px, -140px);
    }
  }

  &::after {
    content: "";
    position: relative;
    transform: translate(-100px, -900px);
    display: block;
    width: 250px;
    height: 250px;
    background: ${Color.Green};
    border-radius: 125px;
    opacity: 0.31;

    @media (max-width: 744px) {
      transform: translate(-110px, -870px);
    }
  }
`;

const Background = styled.div`
  background: ${Color.Backround};
`;

export { Wrapper, Background };
