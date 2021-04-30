import React from "react";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";
import Table from 'react-bootstrap/Table';
import "./maintable.css";
import {Country} from "../../types";

type MainTableProps = {
  countries: Country[]
}

function MainTable({countries}: MainTableProps) {
  return (
    <div className="container">
    <Table striped bordered hover>
      <TableHeader />
      <tbody>
        {countries.map(country => (
          <TableRow 
          key={country.name}
          flag={country.flag}
          name={country.name}
          population={country.population}
          languages={country.languages}
          region={country.region}
          />
        ))}        
      </tbody>
    </Table>
    </div>
  );
}

export default MainTable;
