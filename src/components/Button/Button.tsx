import { StyledButton } from "./styles";

interface IProps {
  isSubmitDisabled: boolean;
}

const Button = ({ isSubmitDisabled }: IProps) => {
  return (
    <StyledButton disabled={isSubmitDisabled} type="submit">
      Ohhhoooo 🍻
    </StyledButton>
  );
};

export { Button };
