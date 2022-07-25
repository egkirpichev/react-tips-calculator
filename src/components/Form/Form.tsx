import {Button, StyledForm, Subtitle, Title, Total} from "./styles"
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";

const Form = () => {
	return (
		<StyledForm>
			<Title>Welcome to the App</Title>
			<Subtitle>Let’s go calculate your tips</Subtitle>
			<Input placeholder={"Enter bill"}></Input>
			<Input placeholder={"Enter persons"}></Input>
			<Select
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