import { SelectOptions } from "../../types"
import { StyledSelect } from "./styles"

interface IProps {
	classNamePrefix: string,
	options: SelectOptions
}

const Select = ({classNamePrefix, options}: IProps) => {
	return (
		<StyledSelect
			classNamePrefix = {classNamePrefix}
			options = {options}
		/>
	)
}

export {Select}