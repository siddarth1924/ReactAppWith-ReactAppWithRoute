import React, { Component } from "react";
import { Navigation } from "./Navigation";
import { variables } from "../Variables";
import { useState } from "react";
export class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: [],
      id: "",
      firstName: "",
      lastName: "",
      age: "",
      city: "",
    };
  }
  refreshList() {
    fetch(variables.API_URL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ student: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }
  render() {
    const { student } = this.state;
    return (
      <div>
        <table className="table-table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {student.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.firstName}</td>
                <td>{b.lastName}</td>
                <td>{b.age}</td>
                <td>{b.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
