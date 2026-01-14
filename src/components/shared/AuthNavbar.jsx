import React from 'react';
import Container from './Container';
import Logo from './Logo';

const AuthNavbar = () => {
    return (
        <div>
            <Container>
                <nav className='flex justify-start'>
                    <Logo />
                </nav>
            </Container>
        </div>
    );
};

export default AuthNavbar;