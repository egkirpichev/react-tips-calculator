import Select, { SingleValue, StylesConfig } from "react-select";
import { ITipOption, Color } from "../../types";

interface IProps {
  handleSelect: (option: SingleValue<ITipOption>) => void;
  tip: ITipOption;
}

const CustomSelect = ({ handleSelect, tip }: IProps) => {
  const tipOptions: ITipOption[] = [
    { value: 0.1, label: "10%" },
    { value: 0.15, label: "15%" },
    { value: 0.2, label: "20%" },
  ];

  const stylesConfig: StylesConfig<ITipOption, boolean> = {
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
      paddingLeft: "50px",
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
      },
    }),
  };

  return (
    <Select
      options={tipOptions}
      isMulti={false}
      onChange={handleSelect}
      styles={stylesConfig}
      defaultValue={tip}
    />
  );
};

export { CustomSelect };
