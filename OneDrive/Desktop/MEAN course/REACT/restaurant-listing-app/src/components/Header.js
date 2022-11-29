import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://thumbs.dreamstime.com/b/plate-fork-spoon-logo-restaurant-menu-black-background-eps-plate-fork-spoon-logo-restaurant-menu-193129080.jpg"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />{' '}
           Cafe De Belle
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header