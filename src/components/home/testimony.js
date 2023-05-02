import styles from '@/components/home/Home.module.css'

export default function Testimony() {
    return (
            <div className={`mt-5 ${styles.testimony}`} >
                <div className={styles.testimony_header}>
                    <div className="row my-5 justify-content-center">
                        <div className="col-sm-12 text-center white">
                            <h1>Feedback from Clients</h1>
                            <p>Why you should hire our firm.</p>
                        </div>

                        <div className="col-sm-4 white">
                            <div className="m-2 p-2 border">
                                <p>
                                    I had the pleasure of working with this law firm on a complex business
                                    litigation case, and I must say I was thoroughly impressed with their
                                    professionalism, expertise, and attention to detail. The attorneys at
                                    the firm were very responsive to my needs and concerns, and they kept me
                                    informed every step of the way. Their dedication to achieving the best possible
                                    outcome for their clients is unmatched, and I would not hesitate to recommend
                                    this firm to anyone looking for top-notch legal representation.
                                </p>
                                <h6 className="text-warning">Hannah Morales</h6>
                            </div>
                        </div>

                        <div className="col-sm-4 white">
                            <div className="m-2 p-2 border">
                                <p>
                                    I have been working with this law firm for several years now, and I am continually
                                    impressed by their knowledge and expertise in the areas of corporate and commercial law.
                                    They have helped me with everything from contract drafting and negotiation to intellectual
                                    property matters, and they always provide practical and strategic advice that is tailored to
                                    my business needs. Their attention to detail and commitment to excellence is second to none,
                                    and I highly recommend them to anyone looking for a reliable and trustworthy legal partner.
                                </p>
                                <h6 className="text-warning">Teddy Yuhui</h6>
                            </div>
                        </div>

                        <div className="col-sm-4 white">
                            <div className="m-2 p-2 border">
                                <p>
                                    I had the pleasure of working with this law firm on a complex employment law matter, and I
                                    cannot speak highly enough of their professionalism and dedication to achieving a
                                    positive outcome. Their attorneys were extremely knowledgeable and well-prepared,
                                    and they took the time to explain the legal process to me in a way that was easy to
                                    understand. I felt confident and reassured throughout the entire process, knowing that
                                    I had the best legal team on my side. I would highly recommend this law firm to anyone
                                    seeking top-quality legal representation.
                                </p>
                                <h6 className="text-warning">Lorna Alvarado</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
