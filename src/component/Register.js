import React, { useState } from "react";

export function Register() {
  const [input, setInput] = useState({
    name: "",
    emailID: "",
    loginID: "",
    password: "",
    confirmPassword: "",
  });

  const [test, setTest] = useState([]);
  const [bool, setBool] = useState({
    flag: false,
  });
  const [error, setError] = useState({
    name: "",
    emailID: "",
    loginID: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const userByID = (e) => {
    e.preventDefault();
    var x;
    fetch("http://localhost:5099/getuserbyid/admin1")
      .then((response) => response.json())
      .then((json) => setTest(json));
    alert(JSON.stringify(test));
  };
  const registerUser = (e) => {
    fetch("http://localhost:5099/adduser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: input.name,
        emailID: input.emailID,
        loginID: input.loginID,
        password: input.password,
      }),
    });
  };
  const validateSubmitbutton = (e) => {
    if (bool.flag) return <button onClick={registerUser}>Submit</button>;
    else return "Enter all fields";
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "name":
          if (!value) {
            stateObj[name] = "Please enter Name.";
          }
          break;

        case "emailID":
          if (!value) {
            stateObj[name] = "Please enter EmailID.";
          }
          break;

        case "loginID":
          if (!value) {
            stateObj[name] = "Please enter LoginID.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      if (
        input.name !== "" &&
        input.emailID !== "" &&
        input.loginID !== "" &&
        input.password !== "" &&
        input.confirmPassword !== "" &&
        input.confirmPassword === input.password
      )
        bool.flag = true;
      else bool.flag = false;
      return stateObj;
    });
  };

  return (
    <div className="Register">
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={input.name}
          onChange={onInputChange}
          onBlur={validateInput}
        ></input>
        {error.name && <span className="err">{error.name}</span>}

        <input
          type="text"
          name="emailID"
          placeholder="Enter emailID"
          value={input.emailID}
          onChange={onInputChange}
          onBlur={validateInput}
        ></input>
        {error.emailID && <span className="err">{error.emailID}</span>}

        <input
          type="text"
          name="loginID"
          placeholder="Enter loginID"
          value={input.loginID}
          onChange={onInputChange}
          onBlur={validateInput}
        ></input>
        {error.loginID && <span className="err">{error.loginID}</span>}

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={input.password}
          onChange={onInputChange}
          onBlur={validateInput}
        ></input>
        {error.password && <span className="err">{error.password}</span>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Enter Confirm Password"
          value={input.confirmPassword}
          onChange={onInputChange}
          onBlur={validateInput}
        ></input>
        {error.confirmPassword && (
          <span className="err">{error.confirmPassword}</span>
        )}

        {validateSubmitbutton()}
        <button onClick={userByID}>fetch</button>
        {JSON.stringify(test)}
      </form>
    </div>
  );
}

export default Register;
