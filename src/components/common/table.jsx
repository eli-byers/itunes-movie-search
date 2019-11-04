import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ data, columns, sortColumn, onSort, rowKeyProperty }) => {
  return (
    <table className="table overflow-scroll">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody
        columns={columns}
        data={data}
        rowKeyProperty={rowKeyProperty}
      />
    </table>
  );
};

export default Table;
