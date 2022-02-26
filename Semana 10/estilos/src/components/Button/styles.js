import styled from "styled-components";

const solid = `
  background-color: #319795;
  color: white;
  &:hover {
    background-color: #2c7a7b;
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    &:hover {
      background-color: #319795;
    }
  }
`;

const outlined = `
  color: #319795;
  background-color: transparent;
  border: 1px solid currentColor;
  &:hover {
    background-color: #e6fffa;
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    &:hover {
      background-color: transparent;
    }
  }
`;

const variants = {
  solid,
  outlined,
};

export const StyledButton = styled.button(
  (props) => `
  border: none;
  padding: 0 40px;
  border-radius: 5px;
  cursor: pointer;
  height: 2.5rem;
  width: 15rem;
  font-size: 1rem;
  font-weight: 700;
  ${variants[props.variant]}
`,
);
