import { StyledButton } from "./styles";

const Button = (props) => {
  const { children, variant, isLoading, disabled, ...rest } = props;

  console.log(rest); // {onClick:function}

  return (
    <StyledButton
      disabled={disabled || isLoading}
      variant={variant}
      {...rest} //onClick = {onClick}
    >
      {isLoading ? "carregando..." : children}
    </StyledButton>
  );
};

export default Button;
