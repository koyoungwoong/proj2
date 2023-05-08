import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import data from './data.js';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  let [animal] = useState(data);


  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Features">Features</Nav.Link>
            <Nav.Link href="/Pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/Home" element={ <div>Home page</div> } />
        <Route path="/Features" element={ <div>Feature page</div> } />
        <Route path="/Pricing" element={ <div>Price page</div> } />
     </Routes>

      <div className="container">
        <div className="row">
          <Animal animal={animal[0]} i={1} />
          <Animal animal={animal[1]} i={2}/>
          <Animal animal={animal[2]} i={3}/>
        </div>
      </div>

    </div>

  );
}

function Animal(props){
  return (
    <div className="col-md-4">
      <img src={'http://210.115.229.18/00' + props.i +'.jpg'} width="80%" />
      <h4>{props.animal.title}</h4>
      <p>{props.animal.where}</p>
      <p>{props.animal.age}</p>
  </div>
  )
}


export default App;
