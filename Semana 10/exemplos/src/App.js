import { ThemeProvider } from "./components/context/theme-context";
import ExemploUseState from "./components/ExemploUseState";
import ExemploUseEffect from "./components/ExemploUseEffect";
import ExercicioHooks from "./components/ExercicioHooks";
import ExemploUseRef from "./components/ExemploUseRef";
import ExemploMemoECallback from "./components/ExemploMemoECallback";
import ExemploUseReducer from "./components/ExemploUseReducer";

function App() {
  return (
    <ThemeProvider>
      {/* <ExemploUseState />
      <ExemploUseEffect userId={2} />
      <ExercicioHooks /> */}
      {/* <ExemploUseRef /> */}
      {/* <ExemploMemoECallback /> */}
      <ExemploUseReducer />
    </ThemeProvider>
  );
}

export default App;
