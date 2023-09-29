import Link from 'next/link'
import React from 'react'
// components/MyComponent.js
import 'bootstrap/dist/css/bootstrap.min.css';

// Rest of your component code



const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "About",
        url: "/about",
    },
    {
        id: 3,
        title: "Learn",
        url: "/learn",
    },
    {
        id: 4,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 5,
        title: "Login",
        url: "/login"
    }
];

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{fontSize:"30px",fontWeight:"700"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">about</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="/learn" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Learn
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" href="#">Action</Link></li>
                                <li><Link className="dropdown-item" href="#">Another action</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // <div className='nav-container'>
        //     <Link href="/">Portal</Link>

        //     <div className='nav-li'>
        //         {links.map(link => (
        //             <Link key={link.id} href={link.url} className='nav-ele'>
        //                 {link.title}
        //             </Link>
        //         ))}
        //     </div>
        // </div>
    )
}
