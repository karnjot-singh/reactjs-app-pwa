import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import logo from '../assets/smu-logo.png'

export const Header = () => {
    return(
        <>
            <Navbar bg='secondary' variant='light'>
                <Container>
                    <Navbar.Brand>
                    <h1><img alt=''
                            src={logo}
                            className="d-inline-block align-top"
                            width="50"
                            height="50"
                        />&emsp;
                    Todo List <small className='fs-6 text-uppercase'>By Karnjot Singh</small></h1>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}