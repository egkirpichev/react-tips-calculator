import { StyledForm, SubTitle, Title, Total } from "./styles";
import { Input } from "../Input/Input";
import { CustomSelect } from "../Select/CustomSelect";
import { Button } from "../Button/Button";
import { useInput } from "../../hooks/useInput";
import { ChangeEvent, useState } from "react";
import { ITipOption } from "../../types";

const Form = () => {
  const bill = useInput();
  const persons = useInput();

	const [tip, setTip] = useState<ITipOption>({ value: 0.1, label: "10%" });

	console.log(tip);
	
	const handleSelect = (option: ITipOption | null): void => {
		if (option) {
			setTip(option)
		}
	}

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to the App</Title>
      <SubTitle>Let’s go calculate your tips</SubTitle>
      <Input placeholder={"Enter bill"} {...bill}></Input>
      <Input placeholder={"Enter persons"} {...persons}></Input>
      <CustomSelect
        options={[
          { value: 0.1, label: "10%" },
          { value: 0.15, label: "15%" },
          { value: 0.2, label: "20%" },
        ]}
				handleSelect={handleSelect}
      />
      <Total>Total: 0.00$</Total>
      <Button />
    </StyledForm>
  );
};

export { Form };
