import {BillInput, Button, PersonsInput, StyledForm, StyledSelect, Subtitle, Title, Total} from "./styles"
import Select from "react-select";

const Form = () => {
	return (
		<StyledForm>
			<Title>Welcome to the App</Title>
			<Subtitle>Let’s go calculate your tips</Subtitle>
			<BillInput></BillInput>
			<PersonsInput></PersonsInput>
			<StyledSelect
				classNamePrefix="select"
				options = {[
					{value: 10, label: '10%'},
					{value: 15, label: '15%'},
					{value: 20, label: '20%'}
				]}
			/>
			<Total>Total: 0.00$</Total>
			<Button type="submit">Calculate 🍻</Button>
		</StyledForm>
	)
}

export {Form} 