import Select from "react-select";
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

const BillInput = styled.input`
	display: block;
	width: 100%;
	padding: 21px 0px;
	margin-bottom: 33px;
	font-size: 18px;
	font-weight: 400;
	color: rgba(117, 108, 108, 0.6);
	opacity: 0.6;
	border: none;
	border-radius: 30px
`

const PersonsInput = styled(BillInput)`
`
const StyledSelect = styled(Select)`
	.select__control {
    width: 100%;
		padding: 15px 40px;
		margin-bottom: 45px;
		font-size: 18px;
    font-weight: 400;
    border: none;
    border-radius: 30px;
    cursor: pointer;
  }

	.select__value-container {
		padding: 0px;
		text-align: center;
  }

	.select__indicator-separator {
		display: none;
  }

	.select__dropdown-indicator {
		color: ${Color.Grey};
		height: 40;
		width: 50;
	}
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


export {StyledForm, Title, Subtitle, BillInput, PersonsInput, StyledSelect, Total, Button}