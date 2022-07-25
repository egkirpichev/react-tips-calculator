import styled from "styled-components"

const StyledInput = styled.input`
	display: block;
	width: 100%;
	padding: 21px 0px;
	margin-bottom: 33px;
	font-size: 18px;
	font-weight: 400;
	text-align: center;
	color: rgba(117, 108, 108, 0.6);
	border: none;
	border-radius: 30px;

	@media (max-width: 744px) {
		margin-bottom: 17px;
	};
`

export {StyledInput} 