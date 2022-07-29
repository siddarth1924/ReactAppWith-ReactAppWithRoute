import React,{Component} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export class Navigation extends Component{
    render(){
        return(
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="me-auto">              
              <Nav.Link href="/dept">Department</Nav.Link>
              <Nav.Link href="/emp">Employee</Nav.Link>
              <Nav.Link href='/student'>Student</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />        
      </>    
    )}    
}
