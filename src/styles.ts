import styled from "styled-components"
import { Color } from "./types"

const Wrapper = styled.div`
max-width: 1512px;
height: 100vh;
margin: 0px auto;
padding-top: 203px;
background: ${Color.Wrapper};
overflow: hidden;

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
}

`

const Background = styled.div`
background: ${Color.Backround};
`

export {Wrapper, Background}