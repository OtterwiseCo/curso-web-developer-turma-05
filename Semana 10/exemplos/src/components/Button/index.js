import { useTheme } from "../context/theme-context";

function Button(props) {
  const theme = useTheme();
  console.log(theme);
  return <button {...props} />;
}

export default Button;
