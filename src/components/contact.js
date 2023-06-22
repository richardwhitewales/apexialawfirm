import Link from "next/link";

export default function Contact() {
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-sm-6 my-4 primary">
                                <div className="m-2">
                                    <div className="d-flex justify-content-start">
                                        <img src="/map_icon.png" alt="contact" width="20%" />

                                        <div className="d-flex flex-column mx-2">
                                            <h5>OFFICE ADDRESS:</h5>
                                            <p>
                                                Wadsley Bridge, Sheffield S6 1QW, UK
                                            </p>
                                        </div>
                                    </div>

                                    <div className="d-flex my-5 justify-content-start">
                                        <img src="/phone_icon.png" alt="contact" width="20%" />

                                        <div className="d-flex flex-column mx-2">
                                            <h5>PHONE:</h5>
                                            <p>
                                                +00 000 000 0000
                                            </p>
                                        </div>
                                    </div>

                                    <div className="d-flex my-5 justify-content-start">
                                        <img src="/email_icon.png" alt="contact" width="20%" />

                                        <div className="d-flex flex-column mx-2">
                                            <h5>EMAIL:</h5>
                                            <p>info@apexialawfirm.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 mt-4">
                                <div className="m-2 text-center">
                                    <img src="/contact.png" alt="contact" width="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4 mt-4 primary">
                        <div className="m-2">
                            <div className="mb-3">
                                <input type="text" className="form-control bg_primary white border_none p-3" id="fullName" placeholder="John Doe" />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control bg_primary white border_none p-3" id="emailAddr" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control bg_primary white border_none p-3" id="message" rows="4"></textarea>
                            </div>

                            <Link href="#" className="btn border_none btn-lg btn_secondary">
                                SEND NOW
                            </Link>
                        </div>
                    </div>

                    <div className="col-sm-8 mt-4">
                        <div className="m-2 text-center">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152261.82943850296!2d-1.8112646267801398!3d53.395310512783475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48790aa9fae8be15%3A0x3e2827f5af06b078!2sSheffield%2C%20UK!5e0!3m2!1sen!2sbr!4v1687420896763!5m2!1sen!2sbr" width="100%" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
