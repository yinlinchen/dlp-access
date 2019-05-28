import React from 'react';
import logo from './logo.svg';
import './Table.css';

const Row = ({name, values}) => {
  return (
    <tr>
      <th>{name}</th>
      <td><ul >{values.map((value, i) => <li key={i}>{value} </li>)}</ul></td>
    </tr>
  )
}

const Table = ({rows}) => {
  return (
    <table>
      <thead><tr><th>Name</th><th>Values</th></tr></thead>
      <tbody>
        {rows.map(
          (row, i) => <Row key={i} name={row.name} values={row.values} />
        )}
      </tbody>
    </table>
  )
}

export default Table;
