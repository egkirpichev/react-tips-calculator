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
      value={value}
      onChange={onChange}
    ></StyledInput>
  );
};
