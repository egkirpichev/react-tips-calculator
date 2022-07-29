import { StyledForm, SubTitle, Title, Total } from "./styles";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { Button } from "../Button/Button";
import { useInput } from "../../hooks/useInput";

const Form = () => {
  const bill = useInput();
  const persons = useInput();

  return (
    <StyledForm>
      <Title>Welcome to the App</Title>
      <SubTitle>Let’s go calculate your tips</SubTitle>
      <Input placeholder={"Enter bill"} {...bill}></Input>
      <Input placeholder={"Enter persons"} {...persons}></Input>
      <Select
        classNamePrefix="select"
        options={[
          { value: 10, label: "10%" },
          { value: 15, label: "15%" },
          { value: 20, label: "20%" },
        ]}
      />
      <Total>Total: 0.00$</Total>
      <Button />
    </StyledForm>
  );
};

export { Form };
