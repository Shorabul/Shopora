import React from 'react';
import logo from '@/assets/images/shopora.png'
import Image from 'next/image';
const Logo = () => {
    return (
        <div className='flex items-center gap-2'>
            <Image src={logo} alt='shopora logo'
                className='rounded-lg w-8 h-8 border border-[#0c64a1]'
            />
            <h1>Shopora</h1>
        </div>
    );
};

export default Logo;