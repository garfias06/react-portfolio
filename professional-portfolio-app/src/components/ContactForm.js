import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './styles/Form.css'


export default function ContactForm() {
  return (
    <div className='form'>
      <Card text="white" bg="dark">
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control type="name" placeholder="" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter Email</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Enter Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="light" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>

  );
}
