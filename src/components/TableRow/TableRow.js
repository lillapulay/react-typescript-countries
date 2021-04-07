import React from "react";
import Flag from "../Flag/Flag";

function TableRow({
  flagUrl, 
  name, 
  population, 
  languages, 
  region
}) {
  return (
    <tr>
      <td><Flag flagUrl={flagUrl}/></td>
      <td>{name}</td>
      <td>{population}</td>
      <td>{languages.map(
        lang => lang.name).join(", ")}</td>
      <td>{region}</td>
    </tr>
  );
}

export default TableRow;
