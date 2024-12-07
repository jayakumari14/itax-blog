import React from 'react';

const DataTable = ({ headers, rows }) => {
  return (
    <table className="border rounded-md">
      <thead>
        <tr className="bg-primary h-10">
          {headers.map((header) => (
            <th className="border font-semibold text-white" key={header}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr className="h-10" key={row[0]}>
            {row.map((cell) => (
              <td className="border p-2" key={cell}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
