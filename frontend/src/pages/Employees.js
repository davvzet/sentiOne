import React, { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner";
import { Pagination } from "../components/Pagination";

const PAGE_SIZE = 5;

const Employees = () => {
  const [contracts, setContracts] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [employeesInfo, setEmployeesInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetching employees data
  useEffect(() => {
    setLoading(true);
    fetch("/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  // Fetching contracts data
  useEffect(() => {
    fetch("/contracts")
      .then((response) => response.json())
      .then((data) => {
        setContracts(data);
        setLoading(false);
      });
  }, []);

  // Creating target employees info
  useEffect(() => {
    setEmployeesInfo(
      employees.map((employee, key) => {
        return {
          id: employee.id,
          name: employee.name,
          position: employee.position,
          date: convertToData(employee.dateOfBirth),
          salary: contracts[key].salary,
          contract: convertToData(contracts[key].contractValidUntil),
        };
      })
    );
  }, [contracts]);

  // Convert miliseconds to data format day/month/year
  const convertToData = (time) => {
    const date = new Date(time);
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  return (
    <div className={"app__container app__containter--fixed"}>
      {!loading && (
        <Pagination employees={employeesInfo} pageSize={PAGE_SIZE} />
      )}
      {loading && <Spinner />}
    </div>
  );
};

export { Employees };
