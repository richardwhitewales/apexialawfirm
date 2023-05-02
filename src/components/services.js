import Link from "next/link";

export default function Services() {
    return (
        <div className="container-fluid py-5 bg_white">
            <div className="row justify-content-center">
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="shadow m-2 py-4 px-2 border border-dark rounded text-center primary">
                                <h5>MINDING YOUR OWN BUSINESS</h5>
                                <hr />
                                <p>Are you expanding your business or looking to merge?</p>
                                <Link className="btn btn_secondary border_none" href="/services/2">Read More</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="shadow m-2 py-4 px-2 border border-dark rounded text-center primary">
                                <h5>ABOUT MOVING HOME</h5>
                                <hr />
                                <p>Are you looking at moving into a new property?</p>
                                <Link className="btn btn_secondary border_none" href="/services/3">Read More</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="shadow m-2 py-4 px-2 border border-dark rounded text-center primary">
                                <h5>ALREADY LIVING TOGETHER</h5>
                                <hr />
                                <p>If your relationship breaks down, we can advise you upon your rights.</p>
                                <Link className="btn btn_secondary border_none" href="/services/4">Read More</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="shadow m-2 py-4 px-2 border border-dark rounded text-center primary">
                                <h5>IMMIGRATION LAWYERS</h5>
                                <hr />
                                <p>Vanguest LLC is a full service immigration law firm.</p>
                                <Link className="btn btn_secondary border_none" href="/services/5">Read More</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="shadow m-2 py-4 px-2 border border-dark rounded text-center primary">
                                <h5>PROPERTY DISPUTES</h5>
                                <hr />
                                <p>If you starting or ending a relationship, you may need expert legal advice.</p>
                                <Link className="btn btn_secondary border_none" href="/services/6">Read More</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="shadow m-2 py-4 px-2 border border-dark rounded text-center primary">
                                <h5>ABOUT FAMILY + RELATIONSHIPS</h5>
                                <hr />
                                <p>If you starting or ending a relationship, you may need expert legal advice.</p>
                                <Link className="btn btn_secondary border_none" href="/services/7">Read More</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="shadow m-2 py-4 px-2 border border-dark rounded text-center primary">
                                <h5>PROBATE AND ADMINISTRATION OF DECEASED ESTATES</h5>
                                <hr />
                                <p>Do you need advice on administration of deceased estates?</p>
                                <Link className="btn btn_secondary border_none" href="/services/8">Read More</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="shadow m-2 py-4 px-2 border border-dark rounded text-center primary">
                                <h5>WILLS</h5>
                                <hr />
                                <p>Are you looking for assistance and advice about wills?</p>
                                <Link className="btn btn_secondary border_none" href="/services/9">Read More</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="shadow m-2 py-4 px-2 border border-dark rounded text-center primary">
                                <h5>POWERS OF ATTORNEY</h5>
                                <hr />
                                <p>Do you want to delegate powers of attorney?</p>
                                <Link className="btn btn_secondary border_none" href="/services/10">Read More</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="shadow m-2 py-4 px-2 border border-dark rounded text-center primary">
                                <h5>THE CRIMINAL COURT</h5>
                                <hr />
                                <p>If you have been charged with a criminal offence then our specialists can assist.</p>
                                <Link className="btn btn_secondary border_none" href="/services/11">Read More</Link>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="shadow m-2 py-4 px-2 border border-dark rounded text-center primary">
                                <h5>THE CIVIL COURTS</h5>
                                <hr />
                                <p>We offer advice and representation no matter the size of the business or dispute.</p>
                                <Link className="btn btn_secondary border_none" href="/services/12">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
