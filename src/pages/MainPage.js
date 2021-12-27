import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

export default function MainPage(){
    return (
        <React.Fragment>
            <div className='container'>
                {/* NavBar */}
                <Navbar expand="lg" className='mt-2'>
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <h5>Annette Poh</h5>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {/* <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link> */}
                        </Nav>
                            <div className='row'>
                                <div className='col-4 col-md'>Experiences</div>
                                <div className='col-4 col-md'>Projects</div>
                                <div className='col-4 col-md'>Businesses</div>
                                <div className='col-4 col-md'>Education</div>
                                <div className='col-4 col-md'>Skills</div>
                                <div className='col-4 col-md'>Article</div>
                                <div className='col-4 col-md'>YouTube</div>
                                <div className='col-4 col-md'>Contact</div>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>

        </React.Fragment>
    )
    
}