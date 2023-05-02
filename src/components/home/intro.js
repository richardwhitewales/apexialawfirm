import Link from 'next/link'

export default function Intro() {
    return (
        <div className="container pt-5">
            <div className="row justify-content-center">
                <div className="col-sm-6">
                    <div className="px-5">
                        <h1>How we deal with the law</h1>

                        <p className="mt-5">
                            At our company, we understand that our clients&apos; success is directly linked to our own success.
                            That&apos;s why we prioritize their bottom line above everything else. We work closely with each
                            client to gain a deep understanding of their unique needs and preferences, and we are dedicated
                            to addressing their immediate concerns as quickly and effectively as possible.
                        </p>
                        <p className="mt-2">
                            Our team is made up of highly skilled professionals who are passionate about delivering exceptional
                            service to our clients. We work tirelessly to ensure that every client receives the attention and care
                            they deserve, and we are always looking for ways to improve our services and support.
                        </p>

                        <p className="mt-2">
                            Whether it&apos;s troubleshooting a technical issue, providing strategic guidance, or simply being a sounding
                            board for new ideas, we are committed to helping our clients achieve their goals. Our team is available
                            24/7 to provide the support and guidance our clients need, whenever they need it. With our client&apos;s
                            success as our top priority, we will continue to go above and beyond to exceed their expectations
                            and deliver exceptional value.
                        </p>

                        <Link href="/contact" className="btn btn-lg mt-5 border_none btn_secondary">
                            GET IN TOUCH
                        </Link>
                    </div>
                </div>
                <div className="col-sm-6 text-center">
                    <img src="/intro.png" alt="logo" className="mt-5" width="350" />
                </div>
            </div>
        </div>
    )
}
