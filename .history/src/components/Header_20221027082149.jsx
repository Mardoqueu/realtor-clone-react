import React from 'react';

const Header = () => {
    return (
        <div className='bg-white border-b shadow-sm sha'>
            <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
                <div>
                    <img src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg' alt='logo'
                    className='h-5 cursor-pointer'></img>
                </div>
                <div>
                    <ul className='flex space-x-10'>
                        <li>Home</li>
                        <li>Offers</li>
                        <li>Sign In</li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;
