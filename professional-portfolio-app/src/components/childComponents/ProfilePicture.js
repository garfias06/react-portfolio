import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import picture from '../styles/Profile_Picture.jpeg'

export default function ProfilePicture() {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Image src={picture} roundedCircle />
                </Col>
            </Row>
        </Container>
    );
}
