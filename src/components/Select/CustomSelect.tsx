import Select, { SingleValue } from "react-select";
import { ITipOption } from "../../types";


interface IProps {
  options: ITipOption[];
	handleSelect: (option: SingleValue<ITipOption>) => void
}

const CustomSelect = ({ options, handleSelect }: IProps) => {
  return <Select options={options} onChange={handleSelect}/>;
};

export { CustomSelect };
