import { Fragment, Component } from "react";
import "./App.css";
import EmployeeListItem from "./components/EmployeeListItem";

const name = <p>meu nome é joao</p>;

const H1 = () => <h1>Isso é um título</h1>;

const retornaParagrafo = (name) => <p>{name}</p>;

// class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         {retornaParagrafo("joao")}
//         <div className="div1"></div>
//         <div className="div2"></div>
//         <H1 />
//       </Fragment>
//     );
//   }
// }

function App() {
  return (
    <Fragment>
      <EmployeeListItem name="joao" role="professor">
        <p>Descrição do joão</p>
      </EmployeeListItem>
      <EmployeeListItem name="christian" role="aluno" />
      <EmployeeListItem name="tiago" role="aluno" />
      <EmployeeListItem name="rafael" role="aluno" />
      <EmployeeListItem name="mari" role="professora" />
      <EmployeeListItem name="vagner" role="aluno" />
    </Fragment>
  );
}

export default App;
