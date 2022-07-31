import { ITipOption } from "../../types";
import { StyledSelect } from "./styles";

interface IProps {
  classNamePrefix: string;
  options: ITipOption[];
	handleSelect: (option: ITipOption | null) => void
}

const Select = ({ classNamePrefix, options, handleSelect }: IProps) => {
  return <StyledSelect classNamePrefix={classNamePrefix} options={options} onChange={handleSelect}/>;
};

export { Select };
