import { Link } from "react-router-dom";

const Details = (props) => {
  return (
    <div className="employees-details">
      <div className="employees-details__element">
        <span className="employees-details__element__name">Name:</span>
        <span className="employees-details__element__value">
          {props.employee.name}
        </span>
      </div>
      <div className="employees-details__element">
        <span className="employees-details__element__name">Position:</span>
        <span className="employees-details__element__value">
          {props.employee.position}
        </span>
      </div>
      <div className="employees-details__element">
        <span className="employees-details__element__name">Date of birth:</span>
        <span className="employees-details__element__value">
          {props.employee.date}
        </span>
      </div>
      <div className="employees-details__element">
        <span className="employees-details__element__name">Salary:</span>
        <span className="employees-details__element__value">
          {props.employee.salary}
        </span>
      </div>
      <div className="employees-details__element">
        <span className="employees-details__element__name">Currency:</span>
        <span className="employees-details__element__value">
          {props.employee.currency}
        </span>
      </div>

      <div className="link">
        <Link to={"/"}>Back to list</Link>
      </div>
    </div>
  );
};

export { Details };
