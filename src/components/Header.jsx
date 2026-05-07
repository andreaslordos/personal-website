import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="sticky top-0 bg-bg/90 backdrop-blur-sm py-6 z-10 font-sans">
            <div className="max-w-[38rem] mx-auto flex justify-between items-center px-6 tracking-tight">
                <div className="name">
                    <Link to="/" className="font-semibold hover:text-link transition-colors">Andreas Lordos</Link>
                </div>
                <div className="navbar text-[0.95rem]">
                    <Link to="/portfolio" className="ml-6 hover:text-link transition-colors">Portfolio</Link>
                    <Link to="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1krQDQF0vdmlpEbcMIqxd3jkJbStPEOVcz0mQPbAhSEw/export?format=pdf" target="_blank" rel="noopener noreferrer" className="ml-6 hover:text-link transition-colors">Resume</Link>
                    <Link to="/photo" className="ml-6 hover:text-link transition-colors">Photo</Link>
                </div>
            </div>
        </header>
    )
}