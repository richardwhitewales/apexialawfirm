import Head from 'next/head'
import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/navigation/footer'
import { getWSSchema, getWPSchema, getLBSchema } from '@/components/schema';
import Breadcrumb from '@/components/navigation/breadcrumb'

export default function Service3Page() {
    // page default data
    const pageName = "Apexia Law Firm LLC - Services";
    const pageDesc = "Apexia Law Firm LLC provide an expert legal counsel and representation for all your legal needs. Trust our experienced attorneys to provide personalized and cost-effective solutions. Contact us today.";
    const baseURL = "https://apexialawfirm.com/services/3";

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
                <meta name="author" content="Apexia Law Firm LLC" />
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
            <Breadcrumb title="ABOUT MOVING HOME" />

            <div className="container-fluid py-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-sm-6 my-4">
                                <div className="m-2 text-center">
                                    <div className="triangle-container">
                                        <div className="img">
                                            <img src="/service2.png" alt="about" width={400} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 my-4 primary">
                                <div className="m-2">
                                    <h5 className="secondary">ABOUT MOVING HOME</h5>
                                    <p>
                                        At Vanguest LLC we understand that buying and selling a home is a massive financial
                                        investment and the moving process can be extremely stressful. That is why we do not treat
                                        conveyancing as a mechanical process to be carried out in a call centre. We do not have
                                        conveyancing “teams”, we do not have automated call queues and we would not subject our clients
                                        to voicemail messages. It is personal and proactive performance that counts.
                                    </p>

                                    <p>
                                        When you instruct Vanguest LLC you can rest assured that your conveyancing will
                                        be carried out by a Conveyancer who will be with you every step of the way. We will make
                                        sure that you are fully protected throughout the transaction and you have the comfort of
                                        knowing that if any problems arise you can speak to an experienced professional immediately.
                                    </p>

                                    <b>We can help you with:</b>
                                    <p>
                                        • Sale and purchase of Houses and Flats
                                        <br />
                                        • Transfers of Houses and Flats between co-owners
                                        <br />
                                        • Property Disputes
                                        <br />
                                        • Purchases of Council Houses and Flats under the Right To Buy scheme
                                        <br />
                                        • Purchases and Sales of Properties under the Shared Ownership Scheme
                                        <br />
                                        • Remortgages
                                        <br />
                                        • Deeds of Trust between co-owners
                                        <br />
                                        • Grants of Leases, Rights of Way and claims to property
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
