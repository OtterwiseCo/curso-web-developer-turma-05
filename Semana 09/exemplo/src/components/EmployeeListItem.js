import "./EmployeeListItem.css";

const EmployeeListItem = (props) => {
  console.log(props);
  const { name, role, children } = props;
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{role}</p>
      {children}
      {children ? (
        <span>ó, esse componente tem um children</span>
      ) : (
        <span> Não tem children</span>
      )}
    </div>
  );
};

export default EmployeeListItem;
