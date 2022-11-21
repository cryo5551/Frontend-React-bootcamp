import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import ThemeContext from '../context'





const Nevbarr = props => {

  const { mode, setMode } = useContext(ThemeContext);

  return (
    <Navbar bg={mode ? "light" : "dark"} variant={mode ? "light" : "dark"} >
      <Container>
        <Navbar.Brand href="#home">TextUtils</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#memes">

            <Form>
              <div className='nevbar'>
              <Form.Check
                type="switch"
                id="custom-switch"
                onClick={() => { setMode((prevState) => !prevState) }}
              />
              {/* <p>change to {mode ? "Dark" : "Light"} mode</p> */}
              </div>
            </Form>

          </Nav.Link>
        </Nav>


      </Container>
    </Navbar>
  );
}

export default Nevbarr;