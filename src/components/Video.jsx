import { Row, Col, Container } from "react-bootstrap";

export default function Video () {
    return (
        <section>
            <Container className="video-container">
            {/* <Container className="bg-secondary video-container"> */}
                <Row>
                    <Col >
                        <h2 className="text-center">Video</h2>
                        <p className="text-center">Bunnies are amazing</p>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/2SCztsWvML8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}