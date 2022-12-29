import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage) => <ListGroup.Item>{eachPackage}</ListGroup.Item>)

    return (
        <Container>
            <Card>
                <Card.Header className="blockquote mb-0 card-body">Packages</Card.Header>
                <Card.Body>
                    <ListGroup>
                        {displayPackages}
                    </ListGroup>
                </Card.Body>
            </Card>
        </Container>
    )
}
