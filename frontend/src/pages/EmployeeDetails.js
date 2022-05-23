import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Details } from "../components/Details";
import { Spinner } from "../components/Spinner";

const EmployeeDetails = () => {
  const [contract, setContract] = useState({});
  const [employee, setEmployee] = useState({});
  const [employeeInfo, setEmployeeInfo] = useState({});
  const [loading, setLoading] = useState(false);

  // Extracting parameter from URL
  const { slug } = useParams();

  // Fetching chosen contract data
  useEffect(() => {
    setLoading(true);
    fetch(`/contracts/${slug}`)
      .then((response) => response.json())
      .then((data) => setContract(data));
  }, [slug]);

  // Fetching chosen employee data
  useEffect(() => {
    fetch(`/employees/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data);
        setLoading(false);
      });
  }, [slug]);

  // Creating target employee info
  useEffect(() => {
    setEmployeeInfo({
      name: employee.name,
      position: employee.position,
      date: convertToData(employee.dateOfBirth),
      salary: contract.salary,
      currency: contract.salaryCurrency,
    });
  }, [contract, employee]);

  // Convert to data format
  const convertToData = (time) => {
    const data = new Date(time);
    return data.toString();
  };

  return (
    <>
      {!loading && <Details employee={employeeInfo} />}
      {loading && <Spinner />}
    </>
  );
};

export { EmployeeDetails };
