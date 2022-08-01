import { StyledForm, SubTitle, Title, Total } from "./styles";
import { Input } from "../Input/Input";
import { CustomSelect } from "../Select/CustomSelect";
import { Button } from "../Button/Button";
import { useInput } from "../../hooks/useInput";
import { ChangeEvent, useEffect, useState } from "react";
import { ITipOption } from "../../types";
import { SingleValue } from "react-select";

const Form = () => {
  const bill = useInput();
  const persons = useInput();
  const [tip, setTip] = useState<ITipOption>({ value: 0.1, label: "10%" });
  const [total, setTotal] = useState<string>("0.00");
  const [isSubmitDisabled, setisSubmitDisabled] = useState<boolean>(true);

  const calculateTip = () => {
    const billAmount = Number(bill.value);
    const personsAmount = Number(persons.value);
    const tipAmount = tip.value;

    return (billAmount * personsAmount * (1 + tipAmount)).toFixed(2);
  };

  const handleSelect = (option: SingleValue<ITipOption>): void => {
    if (option) {
      setTip(option);
    }
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTotal(calculateTip());
  };

  useEffect(() => {
    if (bill.value && persons.value) {
      setisSubmitDisabled(false);
    } else setisSubmitDisabled(true);
  }, [bill, persons]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to the App</Title>
      <SubTitle>Let’s go calculate your tips</SubTitle>
      <Input placeholder={"Enter bill"} {...bill}></Input>
      <Input placeholder={"Enter persons"} {...persons}></Input>
      <CustomSelect handleSelect={handleSelect} tip={tip} />
      <Total>Total: {total}$</Total>
      <Button isSubmitDisabled={isSubmitDisabled} />
    </StyledForm>
  );
};

export { Form };
