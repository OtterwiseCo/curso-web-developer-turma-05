import { useRef } from "react";

function ExemploUseRef() {
  const inputElement = useRef(null);

  const onFocus = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input ref={inputElement} type="text" />
      <button onClick={onFocus}>Focus no input</button>
    </>
  );
}

export default ExemploUseRef;
