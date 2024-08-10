import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="sticky top-0 bg-bg border-b py-8 z-10">
            <div className="flex justify-between px-4">
                <div className="name">
                    <Link to="/" className="mx-2 font-semibold font-classic hover:text-blue-500">Andreas Lordos</Link>
                </div>
                <div className="navbar">
                    <Link to="/portfolio" className="mx-2 hover:text-blue-500">Portfolio</Link>
                    <Link to="https://docs.google.com/document/d/1krQDQF0vdmlpEbcMIqxd3jkJbStPEOVcz0mQPbAhSEw/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-blue-500">Resume</Link>
                    <Link to="/photo" className="mx-2 hover:text-blue-500">Photo</Link>
                </div>
            </div>
        </header>
    )
}