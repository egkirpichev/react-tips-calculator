import { StyledInput } from "./styles"

interface IProps {
	placeholder: string,
}

export const Input = ({placeholder}: IProps) => {
	return (
		<StyledInput placeholder={placeholder}></StyledInput>
	)
}
