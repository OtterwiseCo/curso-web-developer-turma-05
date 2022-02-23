import { useMemo, useCallback } from "react";

const doSomethingExpensive = () => {};

function ExemploMemoECallback() {
  useCallback(() => {
    // Faz um calculo mto custoso
    doSomethingExpensive();
  }, []);

  const resultFromCalculate = useMemo(() => {
    return doSomethingExpensive();
  }, []);
  return <div>oi</div>;
}

export default ExemploMemoECallback;
