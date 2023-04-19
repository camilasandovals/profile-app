import { Col, Row, Container } from "react-bootstrap";

export default function HeroBanner () {
    return(
        <section>
            <Container fluid className="bg-success">
                <Row>
                    <Col className="text-center">
                        Hero
                    </Col>
                </Row>
            </Container>
        </section>
    )
}