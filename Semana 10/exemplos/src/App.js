import { ThemeProvider } from "./components/context/theme-context";
import ExemploUseState from "./components/ExemploUseState";
import ExemploUseEffect from "./components/ExemploUseEffect";

function App() {
  return (
    <ThemeProvider>
      <ExemploUseState />
      <ExemploUseEffect userId={2} />
    </ThemeProvider>
  );
}

export default App;
