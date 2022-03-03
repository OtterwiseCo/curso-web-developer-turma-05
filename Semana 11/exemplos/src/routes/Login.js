const fakeLogin = () => ({
  token: "iHYAUIDIUSAUIDGOUIG!@#(!*DASYHGDIOUAGSUIOT&#)Q",
});

function Login() {
  const login = () => {
    // chamar a api
    const response = fakeLogin();
    console.log(response);
    localStorage.setItem("token", JSON.stringify(response));
  };

  console.log(JSON.parse(localStorage.getItem("token")));

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
