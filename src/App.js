import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./component/Home";
import { Department } from "./component/Department";
import { Employee } from "./component/Employee";
import { Student } from "./component/Student";
import { Navigation } from "./component/Navigation";
import { Input } from "./component/Input";
import { NameForm } from "./component/NameForm";
import { LoginPage } from "./component/LoginPage";

function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/dept" element={<Department />} />
          <Route path="/emp" element={<Employee />} />
          <Route path="/student" element={<Student />} />
          <Route path="/input" element={<Input />} />
          <Route path="/nameform" element={<NameForm />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
