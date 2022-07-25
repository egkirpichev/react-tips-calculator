import styled from "styled-components"
import { Color } from "./types"

const Wrapper = styled.div`
max-width: 1512px;
height: 100vh;
margin: 0px auto;
padding-top: 203px;
background: ${Color.Wrapper};
overflow: hidden;

@media (max-width: 744px) {
	padding-top: 236px;
}

@media (max-width: 414px) {
	padding-top: 241px;
}	

&::before {
	content: "";
	position: absolute;
	transform: translate(-44px, -299px);
	display: block;
	width: 250px;
	height: 250px;
	background: ${Color.Green};
	border-radius: 125px;
	opacity: 0.31;

	@media (max-width: 744px) {
		transform: translate(-44px, -330px);
	}

	@media (max-width: 414px) {
		transform: translate(-44px, -335px);
}	
}

&::after {
	content: "";
	position: absolute;
	transform: translate(-108px,-878px);
	display: block;
	width: 250px;
	height: 250px;
	background: ${Color.Green};
	border-radius: 125px;
	opacity: 0.31;
	overflow: hidden;

	@media (max-width: 744px) {
		transform: translate(-108px,-839px)
	}

	@media (max-width: 414px) {
		transform: translate(-108px,-844px)
}	
}

`

const Background = styled.div`
background: ${Color.Backround};
`

export {Wrapper, Background}