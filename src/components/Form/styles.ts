import styled from "styled-components";
import { Color} from "../../types";

const StyledForm = styled.form`
	max-width: 456px;
	margin: 0px auto;
	
`
const Title = styled.h1`
	margin-bottom: 45px;
	text-align: center;
	font-size: 40px;
	font-weight: 400;
`
const Subtitle = styled(Title)`
	font-size: 32px;
	color: ${Color.Grey};
	opacity: 0.57;
`

const Total = styled.p`
	margin-bottom: 45px;
	font-size: 24px;
	font-weight: 500;
`

const Button = styled.button`
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


export {StyledForm, Title, Subtitle, Total, Button}