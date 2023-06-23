import Head from 'next/head'
import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/navigation/footer'
import { getWSSchema, getWPSchema, getLBSchema } from '@/components/schema';
import Breadcrumb from '@/components/navigation/breadcrumb'

export default function Service2Page() {
    // page default data
    const pageName = "Apexia Law Firm - Services";
    const pageDesc = "Apexia Law Firm provide an expert legal counsel and representation for all your legal needs. Trust our experienced attorneys to provide personalized and cost-effective solutions. Contact us today.";
    const baseURL = "https://apexialawfirm.com/services/2";

    // web site schema
    const wSSchema = getWSSchema(baseURL);

    // web page schema
    const wPSchema = getWPSchema(
        pageName,
        pageDesc,
        baseURL,
        [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Services",
                "item": baseURL
            }
        ]
    );

    // local business schema
    const lBSchema = getLBSchema(
        pageName,
        {
            streetAddress: "Wadsley Bridge, Sheffield S6 1QW, UK",
            addressLocality: "Wadsley Bridge",
            addressRegion: "Sheffield",
            postalCode: "S6 1QW",
            addressCountry: "UK"
        },
        "+44 741 836 3302",
        "info@apexialawfirm.com",
        baseURL,
        `${baseURL}/logo.png`,
        "Cash, Credit Card, Transfer",
        "NGN, USD, EURO",
        "Mo-Fr 09:00-17:00",
        {
            latitude: "53.381129",
            longitude: "-1.470085"
        }
    );

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content={pageDesc} />
                <meta name="keywords" content="law firm, england, lawyer" />
                <meta name="theme-color" content="#0D2329" />
                <link rel="icon" type="image/png" href="/favicon_2.png" />
                <meta name="author" content="Apexia Law Firm" />
                <title>{pageName}</title>

                <meta property="og:title" content={pageName} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/logo_2.png" />
                <meta property="og:image:width" content="1277" />
                <meta property="og:image:height" content="473" />
                <meta property="og:url" content={baseURL} />
                <meta property="og:description" content={pageDesc} />
                <meta property="og:site_name" content={pageName} />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wSSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wPSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lBSchema) }} />
            </Head>

            <Navbar />

            <Navbar />
            <Breadcrumb title="MINDING YOUR OWN BUSINESS" />

            <div className="container-fluid py-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-sm-6 my-4">
                                <div className="m-2 text-center">
                                    <div className="triangle-container">
                                        <div className="img">
                                            <img src="/service1.png" alt="about" width={400} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 my-4 primary">
                                <div className="m-2">
                                    <h5 className="secondary">MINDING YOUR OWN BUSINESS</h5>
                                    <p>
                                        Are you expanding your business or looking to merge? We advise business
                                        people and small and medium size companies, partnerships and charities about:
                                    </p>

                                    <b>Corporate and Commercial</b>
                                    <p>
                                        • Start-ups
                                        <br />
                                        • Company reorganisation and Re-structuring
                                        <br />
                                        • Asset acquisitions and disposals
                                        <br />
                                        • Shareholders Agreements
                                        <br />
                                        • Intellectual property issues
                                        <br />
                                        • Contracts
                                        <br />
                                        • Partnerships - and dispute resolution
                                        <br />
                                        • Terms & conditions of trade
                                        <br />
                                        • Joint ventures, take-overs and mergers
                                    </p>

                                    <b>Employment</b>
                                    <p>
                                        • Contracts - Employment or Services (staff and Directors)
                                        <br />
                                        • Employers Liabilities
                                        <br />
                                        • Internal procedures
                                        <br />
                                        • Redundancy
                                        <br />
                                        • Transfer (TUPE) regulations
                                        <br />
                                        • Protecting intellectual property and trade secrets
                                    </p>

                                    <b>Commercial Property</b>
                                    <p>
                                        • Buying and Selling freeholds
                                        <br />
                                        • Property Development
                                        <br />
                                        • Collateral warranties
                                        <br />
                                        • Sales and Lease backs
                                        <br />
                                        • Buying and assignment of Leases
                                    </p>

                                    <b>Commercial Litigation and Dispute Resolution</b>
                                    <p>
                                        • Contract disputes
                                        <br />
                                        • Debt collection
                                        <br />
                                        • Adjudication cases
                                        <br />
                                        • Enforcing Restrictive covenants
                                        <br />
                                        • Construction and collateral warranties
                                        <br />
                                        • Insurance policy disputes
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
