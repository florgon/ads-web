import {Navbar as BootstrapNavbar, Nav as BootstrapNav, Container, Button} from 'react-bootstrap';
import Link from 'next/link'
import useAuth from '../contexts/auth';

export default function Navbar(){
    const { user, loading, isAuthenticated } = useAuth();
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
                    {isAuthenticated && 
                        <Link href="/profile"><Button variant="outline-primary">Signed as {user.username}</Button></Link>
                    }
                    {!isAuthenticated &&
                        <Link href="/profile"><Button variant="outline-primary">Sign in</Button></Link>
                    }&nbsp;
                    <Link href="https://florgon.space"><Button variant="outline-primary">Go to Florgon</Button></Link>
                </BootstrapNav>
            </BootstrapNavbar.Collapse>
            <BootstrapNavbar.Toggle aria-controls="navbarCollapse" />
            </Container>
        </BootstrapNavbar>
    )
    z
}
