import styles from '@/components/home/Home.module.css'

export default function Team() {
    return (
        <div className={`container-fluid py-5 ${styles.anttorney}`}>
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <h2>Our Attorneys</h2>
                </div>

                <div className="col-md-9 mt-5">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <div className="m-2">
                                <img src="/team1.png" alt="images" className={`${styles.service_img} border`} />
                                <div className="mt-3">
                                    <h5>Harry Brooks</h5>
                                    <p>
                                        Harry Brooks is a highly regarded barrister, who is recognised for his expertise
                                        in private client, real estate, charities and business disputes. He also acts in
                                        professional negligence claims in those areas. He regularly appears in litigation
                                        in the High Court and Court of Appeal.
                                    </p>
                                    <b>brooks@apexialawfirm.com</b>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 text-center">
                            <div className="m-2">
                                <img src="/team2.png" alt="images" className={`${styles.service_img} border`} />
                                <div className="mt-3">
                                    <h5>Wayne Stones</h5>
                                    <p>
                                        Wayne Stones represents both claimants and defendants in contested probate claims and
                                        claims for family provision under the Inheritance (Provision for Family and Dependants)
                                        Act 1975. Wayne Stones regularly acts for teamal representatives and beneficiaries,
                                        including well-known charities.
                                    </p>
                                    <b>stones@apexialawfirm.com</b>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 text-center">
                            <div className="m-2">
                                <img src="/team3.png" alt="images" className={`${styles.service_img} border`} />
                                <div className="mt-3">
                                    <h5>Samuel Park</h5>
                                    <p>
                                        David expertise in this area developed from his early years at the Bar. As a company law
                                        specialist, he soon ventured into the neighbouring field of partnership law and indeed,
                                        in his early years of lecturing at Holborn Law Tutors, the course which he lectured was a
                                        combined Company Law and Partnership course.
                                    </p>
                                    <b>samuel@apexialawfirm.com</b>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 text-center">
                            <div className="m-2">
                                <img src="/team4.png" alt="images" className={`${styles.service_img} border`} />
                                <div className="mt-3">
                                    <h5>Jacob Thompson</h5>
                                    <p>
                                        As a member of the Apexia Law Firm team, Jacob specializes in providing legal counsel on matters
                                        relating to corporate law, contract negotiations, intellectual property, and regulatory compliance.
                                        He is known for his meticulous attention to detail, strategic thinking, and ability to navigate
                                        complex legal issues with ease.
                                    </p>
                                    <b>jacob@apexialawfirm.com</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
