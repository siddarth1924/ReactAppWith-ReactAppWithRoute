import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import { Home } from './component/Home';
import { Department } from './component/Department';
import { Employee } from './component/Employee';
import { Student } from './component/Student';
import { Navigation} from './component/Navigation';

function App() {
  return (   
    <div>
      <Navigation />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} exact />
            <Route path="/dept" element={<Department/>} />
            <Route path="/emp" element={<Employee/>} />
            <Route path='/student' element={<Student/>}/>
          </Routes>      
    
          </BrowserRouter>

          </div>
  );
}

export default App;
