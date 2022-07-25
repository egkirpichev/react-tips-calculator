import styled from "styled-components";
import { Color} from "../../types";

const StyledForm = styled.form`
	max-width: 456px;
	margin: 0px auto;
	
	@media (max-width: 744px) {
		max-width: 321px;
	};
`
const Title = styled.h1`
	margin-bottom: 45px;
	text-align: center;
	font-size: 40px;
	font-weight: 400;

	@media (max-width: 744px) {
		font-size: 24px;
	};
`
const SubTitle = styled(Title)`
	font-size: 32px;
	color: ${Color.Grey};
	opacity: 0.57;

	@media (max-width: 744px) {
		font-size: 24px;
	};
`

const Total = styled.p`
	margin-bottom: 45px;
	font-size: 24px;
	font-weight: 500;

	@media (max-width: 414px) {
		font-size: 18px;
	};
`

export {StyledForm, Title, SubTitle, Total}