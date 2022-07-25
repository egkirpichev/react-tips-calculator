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

export {StyledForm, Title, Subtitle, Total}