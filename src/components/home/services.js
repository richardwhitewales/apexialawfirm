export default function Services() {
    return (
        <div className="container pt-5">
            <div className="row justify-content-center">
                <div className="col-sm-6">
                    <img src="/shaking.png" alt="logo" className="mt-5" width="100%" />
                </div>
                <div className="col-sm-6">
                    <div className="px-5">
                        <h1>Our Services</h1>

                        <p className="mt-5">
                            Our range of law services include but are not limited to,
                        </p>

                        <ul className="list-unstyled">
                            <li className="my-4 d-flex">
                                <img src="/home_service1.png" alt="images" width={50} height={50} />
                                <div className="mx-2 mr-0">
                                    <h6>THE CRIMINAL COURT</h6>
                                    <small className="text-muted">
                                        Charged with a criminal offence? Then our specialists can assist.
                                    </small>
                                </div>

                            </li>

                            <li className="my-4 d-flex">
                                <img src="/home_service2.png" alt="images" width={50} height={50} />
                                <div className="mx-2 mr-0">
                                    <h6>POWERS OF ATTORNEY</h6>
                                    <small className="text-muted">
                                        Do you want to delegate powers of attorney?
                                    </small>
                                </div>
                            </li>

                            <li className="my-4 d-flex">
                                <img src="/home_service3.png" alt="images" width={50} height={50} />
                                <div className="mx-2 mr-0">
                                    <h6>FAMILY & RELATIONSHIPS</h6>
                                    <small className="text-muted">
                                        If you starting or ending a relationship, you may need expert legal advice.
                                    </small>
                                </div>
                            </li>

                            <li className="my-4 d-flex">
                                <img src="/home_service4.png" alt="images" width={50} height={50} />
                                <div className="mx-2 mr-0">
                                    <h6>MINDING YOUR BUSINESS</h6>
                                    <small className="text-muted">
                                        Are you expanding your business or looking to merge?
                                    </small>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
