
const { Component } = require("react");

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Alldata: this.props.data
    }
  }
  render() {
    return (
      <center>
        <h1>Employy Data</h1>
        <table border={1}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Country</th>
            <th scope="col">State</th>
            <th scope="col">City</th>
            <th scope="col">Area</th>
            <th scope="col">Degree</th>
            <th scope="col">Salary</th>
            <th scope="col">Department</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.Alldata.map((val) => {
              return (
                <tr>
                  <td style={{ background: val.color }}>{val.empid}</td>
                  <td style={{ background: val.color }}>{val.empname}</td>
                  <td style={{ background: val.color }}>{val.empemail}</td>
                  <td style={{ background: val.color }}>{val.empphone}</td>
                  <td style={{ background: val.color }}>{val.empaddress.country}</td>
                  <td style={{ background: val.color }}>{val.empaddress.state}</td>
                  <td style={{ background: val.color }}>{val.empaddress.city}</td>
                  <td style={{ background: val.color }}>{val.empaddress.area}</td>
                  <td style={{ background: val.color }}>{val.empdeg}</td>
                  <td style={{ background: val.color }}>{val.empsalary}</td>
                  <td style={{ background: val.color }}>{val.empdepartment}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      </center>
    )
  }
}

export default Child;