import { Col, Row, Container } from "react-bootstrap";

export default function Grid() {
    return (
        <section>
        <Container fluid className="grid-container"> 
            <Row>
                <Col sm={12} md={4}>
                    <h2>Why BocaCode?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sit, veritatis sapiente labore cumque magnam sunt aliquam sint, perferendis quaerat saepe eveniet aut nisi ipsa accusamus deserunt possimus. Similique, autem!</p>
                </Col>
                <Col sm={12} md={4}>
                    <h2>Exciting Project?</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, assumenda. Voluptatem nemo quibusdam inventore, blanditiis vel quam ipsa. Neque, molestias quis. Cumque vel voluptates, nemo facilis nostrum adipisci illum sequi.</p>
                </Col>
                <Col>
                    <h2>Ideal Work Place?</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores delectus cupiditate animi quam, nulla nemo repellat eum sed dolorem sequi laborum beatae iure ipsa minima esse adipisci debitis, dolorum odit.</p>
                </Col>
            </Row>
        </Container>
        </section>
    )
}