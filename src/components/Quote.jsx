import { Col, Container, Row } from "react-bootstrap";

export default function Quote () {
    return (
        <section>
            <Container className = "quote-container bg-success">
                <Row className="text-center">
                    <Col>
                        <q>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio fuga voluptates deleniti in officiis a, quidem dolores? Praesentium porro iusto enim error sit modi id fuga, qui quibusdam hic deserunt.</q>
                        <p>Autor</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}