import { useState } from "react"
import { Col, Container, Row, Button, Modal } from "react-bootstrap";

const randomElement = (array) => {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

const imageList = [
  `https://picsum.photos/300/300/?random=2`,
  `https://picsum.photos/300/300/?random=4`,
  `https://picsum.photos/300/300/?random=6`,
  `https://picsum.photos/300/300/?random=8`,
]

const colors = ['red', 'blue', 'black', 'salmon']

export default function About() {
    const [imgUrl, setImgUrl] = useState(randomElement(imageList))
    const [nameColor, setNameColor] = useState(randomElement(colors))
    return (
        <main>
            <Container>
            {/* <Container className="bg-danger"> */}
                <Row className="text-center">
                    <Col>
                    <img src={imgUrl} onClick = {() => 
                        setImgUrl(randomElement(imageList))
                    } 
                    className="rounded-circle"
                    alt="Camila Sandoval" />
                    <p>click image </p>
                    </Col>
                    <Col sm={12} md={6} onClick={() => {setNameColor(randomElement(colors))}} >
                    <h1 className="mt-3" style={{ color: nameColor }}> Camila Sandoval </h1>
                    <small>Click text</small>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laboriosam, dolorum, delectus accusantium aspernatur id quis sapiente obcaecati odio neque alias repellendus sequi similique magnam veniam! Magni voluptas id nulla.</p>
                    <Button>My Video</Button>
                    
                    </Col>
                </Row>
            </Container>
        </main>
    )
}