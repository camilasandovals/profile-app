import {useState} from "react"
import { Col, Container, Row } from "react-bootstrap";

const quotes = [
    { saying: "You have power over your mind - not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius"},
    { saying: "Evil Never Dies.", author: "Meghann Stamper"},
    { saying: "Company is like fish, it starts to stink after 3 days.", author: "Benjamin Franklin"},
  ]
  

export default function Quote () {
    const [i, setI] = useState(0)

    const nextQuote = () => {
        if(i < quotes.length -1) setI(i + 1)
        else setI(0)
    }

    return (
        <section>
            <Container className = "quote-container"
            onClick={() => {nextQuote(setI)}}>
            {/* <Container className = "quote-container bg-success"> */}
                <Row className="text-center">
                    <Col>
                        <q>{quotes[i]['saying']}</q>
                        <p>{quotes[i]['author']}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}