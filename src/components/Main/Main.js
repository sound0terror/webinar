import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Main = ({people}) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Hobby</th>
      </tr>
      </thead>
      <tbody>
      {people.map(person => {
        return (
          <tr>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.surname}</td>
            <td>{person.age}</td>
            <td>{person.hobby}</td>
          </tr>
        )
      })}
      </tbody>
    </Table>
  )
}

export default Main;
