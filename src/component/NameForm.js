import React from "react";
import ReactDOM from "react-dom/client";
import { Register } from "./Register.js";
export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      emailID: "",
      loginID: "",
      password: "",
      confirmpassword: "",
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmailID = this.handleChangeEmailID.bind(this);
    this.handleChangeLoginID = this.handleChangeLoginID.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    //this.handleChangeConfirmPassword = this.handleChangeConfirmPassword(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeEmailID(event) {
    this.setState({ emailID: event.target.value });
  }
  handleChangeLoginID(event) {
    this.setState({ loginID: event.target.value });
  }
  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleChangeConfirmPassword(event) {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Register />);
  }

  handleSubmit(event) {
    var getUser = "http://localhost:5099/getuserbyid/".concat(
      this.state.loginID
    );

    <h1>{getUser}</h1>;
    fetch("http://localhost:5099/adduser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        emailID: this.state.emailID,
        loginID: this.state.loginID,
        password: this.state.password,
      }),
    });
    alert("A name was submitted: " + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <Register />
      </>
      /* <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Enter Name"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
        </label>
        <label>
          EmailID:
          <input
            type="text"
            placeholder="Enter EmailID"
            value={this.state.emailID}
            onChange={this.handleChangeEmailID}
          />
        </label>
        <label>
          LoginID:
          <input
            type="text"
            placeholder="Enter LoginID"
            value={this.state.loginID}
            onChange={this.handleChangeLoginID}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmpassword"
            value={this.state.confirmpassword}
            onChange={this.handleChangeConfirmPassword}
          />
        </label>
        
      </form>*/
    );
  }
}
