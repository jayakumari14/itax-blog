/**
 * ReactTable is a functional component that renders a table with the provided data and columns.
 *
 * @param {array} columns - An array of objects representing the table columns. Each object should have a 'text' property for the column header and an optional 'dataField' and 'formatter' property for customizing the cell content.
 * @param {array} data - An array of objects representing the table data. Each object should have properties corresponding to the 'dataField' of the columns.
 *
 * @returns {JSX.Element} - A JSX element representing a table with the provided data and columns.
 */

const ReactTable = ({ columns, data, id }) => {
  return (
    <div>
      <table className="w-full shadow-md" id={id}>
        <thead>
          <tr className="bg-primary h-10">
            {columns &&
              columns.map((column, index) => (
                <th
                  className="border-2 min-w-fit text-nowrap p-2 py-3 font-semibold text-white"
                  key={index}
                >
                  <div className="flex justify-start">
                    <span>{column.text}</span>
                  </div>
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row, rowIndex) => (
              <tr className="h-10" key={rowIndex}>
                {columns.map((column, colIndex) => {
                  return (
                    <td className="border-2 p-2" key={colIndex}>
                      {column.formatter
                        ? column.formatter(row[column.dataField], row)
                        : row[column.dataField]}
                    </td>
                  );
                })}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReactTable;
