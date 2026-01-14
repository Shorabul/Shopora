import React from 'react';
import Container from './Container';
import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => {
    return (
        <div className=''>
            <Container>
                <nav className='w-full flex justify-between items-center py-4'>
                    <Logo />
                    <ul className='flex items-center gap-2'>
                        <Link href={"/"}>Home</Link>
                        <Link href={"/products"}>Products</Link>
                        <Link href={"/about"}>About</Link>
                    </ul>
                    <div className='flex items-center gap-2'>
                        <Link href={"/login"}>
                            <button
                                className='hover:bg-[#0c64a1] border border-[#0c64a1]
                                hover:border-transparent rounded-lg py-1.5 px-3 active:scale-95 transition-all ease-in-out'
                            >Login</button>
                        </Link>
                        <Link
                            className='bg-[#0c64a1] rounded-lg py-1.5 px-3 active:scale-95 transition-all ease-in-out'
                            href={"/register"}>
                            <button>Register</button>
                        </Link>
                    </div>
                </nav>
            </Container>
        </div>
    );
};

export default Navbar;