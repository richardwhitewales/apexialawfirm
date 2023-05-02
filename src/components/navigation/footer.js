import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <footer>
            <div className="container-fluid p-md-5 bg_primary white">
                <div className="row justify-content-center">
                    <div className="col-sm-10">
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                <div className="my-3">

                                    <div className="display-6">
                                        SignUp To Our Newsletter!
                                    </div>
                                    <small className="white_50">
                                        Subscribe and Get Latest News & Events
                                    </small>
                                </div>
                            </div>
                            <div className="col-sm-6 text-center">
                                <div className="my-3 d-flex">
                                    <input type="email" className="form-control border_none p-3" id="emailAddr" placeholder="name@example.com" />

                                    <Link href="#" className="btn border_none btn-lg btn_secondary">
                                        SEND
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-5 pb-3 px-3 bg_primary">
                <div className="row">
                    <div className="col-sm-4 white">
                        <Link href="/">
                            <img
                                src="/logo_2.png"
                                alt="logo"
                                width={80}
                            />
                        </Link>
                        <div>
                            Apexia Law Firm is a premier legal practice that provides expert counsel and representation
                            in various areas of law. Our team of experienced attorneys is dedicated to achieving optimal
                            results for our clients through personalized and cost-effective solutions.

                            <ul className="mt-3 list-unstyled">
                                <li>
                                    <FontAwesomeIcon icon={faLocation} /> 
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faEnvelope} /> info@apexialawfirm.com
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPhone} /> +00 (000) 000 0000
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4 white">
                        <h3>Our Services</h3>

                        <ul className="list-unstyled">
                            <li className="nav-item py-2 px-0">
                                <Link className="nav-link" href="/">Home</Link>
                            </li>
                            <li className="nav-item py-2 px-0">
                                <Link className="nav-link" href="/about">About</Link>
                            </li>
                            <li className="nav-item py-2 px-0">
                                <Link className="nav-link" href="/services">Services</Link>
                            </li>
                            <li className="nav-item py-2 px-0">
                                <Link className="nav-link" href="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item py-2 px-0">
                                <Link className="nav-link" href="/team">Our Team</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-4 white">
                        <h3>Policies</h3>

                        <ul className="list-unstyled">
                            <li className="nav-item py-2 px-0">
                                <Link className="nav-link" href="/privacy">Privacy policy</Link>
                            </li>
                            <li className="nav-item py-2 px-0">
                                <Link className="nav-link" href="/terms">Terms & conditions</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 text-muted text-center">© Copyright {new Date().getFullYear()}, Apexia Law Firm | All Rights Reserved.</div>
                </div>
            </div>

        </footer>
    )
}
