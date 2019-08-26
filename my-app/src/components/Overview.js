import React from 'react';
import { Link } from 'react-router-dom';

const printers = [
    {
      id: 1,
      name: 'chi-1'
    },
    {
      id: 2,
      name: 'chi-2'
    },
    {
      id: 3,
      name: 'chi-3'
    },
    {
      id: 4,
      name: 'chi-4'
    }
];


const Overview = () => (
  <div>
    <h1>MAIN LIST Overview view</h1>

    <ul>
      {
        printers.map((printer, index) => (
          <li key={index}>
            <Link to={`/printplanner/${printer.id}`}>{printer.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
);

export default Overview;
