import { useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "./Table";

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate items to show on the current page
  const indexOfLastItem = currentPage * props.pageSize;
  const indexOfFirstItem = indexOfLastItem - props.pageSize;
  const currentItems = props.employees.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate page numbers
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(props.employees.length / props.pageSize);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Table employees={currentItems} />
      <div className={"pagination"}>
        <div className={"pagination__title"}>
          Pages:
          {pageNumbers.map((number, key) => (
            <Link to="#" onClick={() => setCurrentPage(number)} key={key}>
              <div className="pagination__number">{number}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export { Pagination };
