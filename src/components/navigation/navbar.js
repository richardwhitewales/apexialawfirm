import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg_primary">
            <div className="container">
                <Link className="navbar-brand" href="/">
                    <img
                        src="/favicon_2.png"
                        alt="logo"
                        className="rounded"
                        width={70}
                    />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0 px-md-5">
                        <li className="nav-item">
                            <Link className={`nav-link ${router.asPath == "/" ? "secondary" : "white"}`} href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${router.asPath == "/about" ? "secondary" : "white"}`} href="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${router.asPath == "/team" ? "secondary" : "white"}`} href="/team">Our Team</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link  white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </Link>

                            <ul className="dropdown-menu bg_secondary">
                                <li>
                                    <Link className="dropdown-item py-2" href="/services">Services</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item py-2" href="/services/2">Minding Your Own Business</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item py-2" href="/services/3">About Moving Home</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item py-2" href="/services/4">Already Living Together</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item py-2" href="/services/5">Immigration Lawyers</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item py-2" href="/services/6">Property Disputes</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item py-2" href="/services/7">About Family + Relationships</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item py-2" href="/services/8">Probate and Administration of Deceased Estates</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item py-2" href="/services/9">Wills</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item py-2" href="/services/10">Powers of Attorney</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item py-2" href="/services/11">The Criminal Court</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item py-2" href="/services/12">The Civil Courts</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className={`nav-link ${router.asPath == "/contact" ? "secondary" : "white"}`} href="/contact">Contact</Link>
                        </li>
                    </ul>

                    <div className="d-flex">
                        <Link className="btn btn-sm btn_secondary m-1" href="tel:+447418363302">
                            <FontAwesomeIcon icon={faPhone} /> +44 (741) 836 3302
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
