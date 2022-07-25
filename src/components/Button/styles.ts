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
cursor: pointer;

&:hover {
	background: ${Color.DarkTurquoise};
}

&:active{
	box-shadow: inset 0px 0px 10px ${Color.Black};
}
`

export {StyledButton}