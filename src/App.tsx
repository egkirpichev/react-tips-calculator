import styled from "styled-components";
import { Form } from "./components/Form/Form";
import { Color } from "./types";

const App = () => {
  return (
    <Wrapper>
			<Form />
		</Wrapper>
 );
}

const Wrapper = styled.div`
	background: ${Color.backround};
`

export default App;
