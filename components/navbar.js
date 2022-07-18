import {Navbar as BootstrapNavbar, Nav as BootstrapNav, Container, Button} from 'react-bootstrap';
import Link from 'next/link'

export default function Navbar(){
    return (
        <BootstrapNavbar bg="light" expand="sm" className="border-bottom container-fluid navbar shadow-sm">
            <Container fluid>
            <BootstrapNavbar.Brand>
                <Link href="/"> 
                    <a className="text-decoration-none text-black">
                        Florgon Ads
                    </a>
                </Link>
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Collapse id="navbarCollapse">
                <BootstrapNav className="justify-content-end" style={{ width: "100%" }}>
                    <Link href="/profile"><Button variant="outline-primary">Dashboard</Button></Link>&nbsp;
                    <Link href="https://florgon.space"><Button variant="outline-primary">Go to Florgon</Button></Link>
                </BootstrapNav>
            </BootstrapNavbar.Collapse>
            <BootstrapNavbar.Toggle aria-controls="navbarCollapse" />
            </Container>
        </BootstrapNavbar>
    )
    z
}
