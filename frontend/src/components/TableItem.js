import { useNavigate } from "react-router-dom";

const TableItem = (props) => {
  const navigate = useNavigate();

  return (
    <tr
      className="table__row"
      onClick={() => navigate("/employees/" + props.employee.id)}
    >
      <td className="table__cell">{props.employee.name}</td>
      <td className="table__cell">{props.employee.position}</td>
      <td className="table__cell">{props.employee.date}</td>
      <td className="table__cell">{props.employee.salary}</td>
      <td className="table__cell">{props.employee.contract}</td>
    </tr>
  );
};

export { TableItem };
