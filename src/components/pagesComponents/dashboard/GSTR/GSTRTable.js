export default function GSTRTable({ supplyData }) {
  return (
    <>
      <table className="border rounded-md">
        <thead>
          <tr className="bg-primary h-10">
            <th className="border font-semibold text-white">Supply Value</th>
            <th className="border font-semibold text-white">IGST</th>
            <th className="border font-semibold text-white">CGST</th>
            <th className="border font-semibold text-white">SGST</th>
            <th className="border font-semibold text-white">CESS</th>
          </tr>
        </thead>
        <tbody>
          {supplyData &&
            supplyData.map((el, key) => (
              <tr key={key} className="h-10">
                <td className="border p-2">{el[0]}</td>
                <td className="border p-2">{el[1]}</td>
                <td className="border p-2">{el[2]}</td>
                <td className="border p-2">{el[3]}</td>
                <td className="border p-2">{el[4]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
