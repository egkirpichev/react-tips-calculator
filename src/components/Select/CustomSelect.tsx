import Select, { SingleValue, StylesConfig } from "react-select";
import { ITipOption, Color } from "../../types";


interface IProps {
  options: ITipOption[];
	handleSelect: (option: SingleValue<ITipOption>) => void
}

const CustomSelect = ({ options, handleSelect }: IProps) => {

	const stylesConfig: StylesConfig<ITipOption, boolean>= {
		control: (styles) => ({
			...styles,
			padding: "10px 40px",
			marginBottom: "45px",
			fontSize: "18px",
			fontWeight: 400,
			border: "none",
			borderRadius: "30px",
			cursor: "pointer",
		}),

		valueContainer: (styles) => ({
			...styles,
			paddingLeft: "60px",
			textAlign: "center",
		}),

		indicatorSeparator: (styles) => ({
			...styles,
			display: "none",
		}),

		dropdownIndicator: (styles) => ({
			...styles,
			padding: "0px",
			color: `${Color.Grey}`,

			svg: {
				height: 40,
				width: 50,
			}
		})
	}

  return <Select options={options} isMulti={false} onChange={handleSelect} styles={stylesConfig}/>;
};

export { CustomSelect };
