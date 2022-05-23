import { TableItem } from "./TableItem";

function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr className="table__header">
          <td>Name</td>
          <td>Position</td>
          <td>Date</td>
          <td>Salary</td>
          <td>Contract</td>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((employee, key) => {
          return <TableItem employee={employee} key={key} />;
        })}
      </tbody>
    </table>
  );
}

export { Table };
