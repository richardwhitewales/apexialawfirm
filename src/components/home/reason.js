import Link from 'next/link';

export default function Reason() {
    return (
        <div className="container-fluid">
            <div className="row py-5 justify-content-center">
                <div className="col-12 text-center primary">
                    <h2>Why Choose Us? We WIN!</h2>
                </div>

                <div className="col-sm-6 text-center primary">
                    <p>
                        At Apexia Law Firm, our success rate is over 99% and we have obtained
                        over €365 million in verdicts and settlements
                        in the past 5 years.
                    </p>

                    <Link href="/contact" className="btn btn-lg mt-4 btn_primary">
                        REQUEST FREE QUOTE
                    </Link>
                </div>
            </div>
        </div>
    )
}
