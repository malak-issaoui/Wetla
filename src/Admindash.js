import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';

const admindash = () => {
  return (
    <>
        <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#home">admindash</Navbar.Brand>
        </Container>
      </Navbar>

      
      <h1>Liste des clients</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>action</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>malak </td>
          <td>issaoui</td>
          <td>@malak</td>
          <td>62555</td>
          <td> <Button variant="dark" className='me-2' >Ajouter</Button>
          <Button variant="light">Modifier</Button>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>bisa</td>
          <td>basbous</td>
          <td>@basbousty</td>
          <td>62555</td>
          <td> <Button variant="dark" className='me-2'>Ajouter</Button>
          <Button variant="light">Modifier</Button>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>ay esm</td>
          <td>kfoulen</td>
          <td>@foulen</td>
          <td>62555</td>
          <td> <Button variant="dark" className='me-2'>Ajouter</Button>
          <Button variant="light">Modifier</Button>
          </td>
        </tr>
        
        
      </tbody>
    </Table>
    <h1>Liste des reservations</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Hotel Name</th>
          <th>Date START</th>
          <th>Date FIN</th>
          <th>Rooms</th>
          <th>action</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>MOURADI</td>
          <td>10/10/2022</td>
          <td>12/10/2022</td>
          <td>250</td>
          <td> <Button variant="dark" className='me-2' >Ajouter</Button>
          <Button variant="light">Modifier</Button>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>TEJ MARHABA</td>
          <td>13/11/2022</td>
          <td>17/11/2022</td>
          <td>62</td>
          <td> <Button variant="dark" className='me-2'>Ajouter</Button>
          <Button variant="light">Modifier</Button>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>TEJ MARHABA</td>
          <td>13/11/2022</td>
          <td>14/11/2020</td>
          <td>625</td>
          <td> <Button variant="dark" className='me-2'>Ajouter</Button>
          <Button variant="light">Modifier</Button>
          </td>
        </tr>
        
        
      </tbody>
    </Table>

    </>
  )
}

export default admindash