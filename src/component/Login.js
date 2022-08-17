import React, { useState } from "react";

export function Login() {
  const [input, setInput] = useState({
    name: "",
    loginID: "",
  });

  const [error, setError] = useState({
    name: "",
    loginID: "",
  });

  const [test, setTest] = useState({
    user: [],
    name: "",
    emailID: "",
    loginID: "",
    password: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };
  /*const postuser = (e) => {
    //alert(input.emailID);
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
  };*/

  const loginUser = (e) => {
    var url = "http://localhost:5099/getuserbyid/admin1";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setTest({ user: data });
      });
    alert(test.password);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "loginID":
          if (!value) {
            stateObj[name] = "Please enter LoginID.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  return (
    <div className="app">
      <form>
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

        <button onClick={loginUser}>Login</button>
      </form>
    </div>
  );
}

export default Login;
