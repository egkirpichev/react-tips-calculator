import { ChangeEventHandler } from "react";
import { StyledInput } from "./styles";

interface IProps {
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ placeholder, value, onChange }: IProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
			type="number"
      value={value}
      onChange={onChange}
    ></StyledInput>
  );
};
