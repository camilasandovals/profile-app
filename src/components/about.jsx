import { Col, Container, Row, Button, Modal } from "react-bootstrap";

export default function About() {
    return (
        <main>
            <Container>
            {/* <Container className="bg-danger"> */}
                <Row className="text-center">
                    <Col>
                    <img src="https://picsum.photos/seed/picsum/300/300" 
                    className="rounded-circle"
                    alt="Camila Sandoval" />
                    </Col>
                    <Col sm={12} md={6}>
                    <h1 className="mt-3"> Camila Sandoval </h1>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laboriosam, dolorum, delectus accusantium aspernatur id quis sapiente obcaecati odio neque alias repellendus sequi similique magnam veniam! Magni voluptas id nulla.</p>
                    <Button>My Video</Button>
                    
                    </Col>
                </Row>
            </Container>
        </main>
    )
}