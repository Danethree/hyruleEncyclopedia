
import {Navbar,Nav,Container} from 'react-bootstrap'


export default function Header()
{
    return(
        <Navbar bg="dark"variant = "dark">
            <Container>
                <Navbar.Brand href = "/">Hyrule Encyclopedia</Navbar.Brand>
                <Nav className="me-auto">
                    
                <Nav.Link href="/search">
           
                    Search
                </Nav.Link>
                <Nav.Link href="#home">About me</Nav.Link>
                </Nav>
            </Container>
    
    </Navbar>

    )
}