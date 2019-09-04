import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    let employeeList = this.props.data
    return (
      <div >
        <h3>EmployeeList</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone NO</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.gender}</td>
                  <td>{data.email}</td>
                  <td>{data.phoneNo}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data
  };
}
export default connect(mapStateToProps)(EmployeeList);
