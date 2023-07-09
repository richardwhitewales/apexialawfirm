import Head from 'next/head'
import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/navigation/footer'
import { getWSSchema, getWPSchema, getLBSchema } from '@/components/schema';
import Breadcrumb from '@/components/navigation/breadcrumb'

export default function Service7Page() {
    // page default data
    const pageName = "Apexia Law Firm LLC - Services";
    const pageDesc = "Apexia Law Firm LLC provide an expert legal counsel and representation for all your legal needs. Trust our experienced attorneys to provide personalized and cost-effective solutions. Contact us today.";
    const baseURL = "https://apexialawfirm.com/services/7";

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
            <Breadcrumb title="ABOUT FAMILY + RELATIONSHIPS" />

            <div className="container-fluid py-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-sm-6 my-4">
                                <div className="m-2 text-center">
                                    <div className="triangle-container">
                                        <div className="img">
                                            <img src="/service8.png" alt="about" width={400} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 my-4 primary">
                                <div className="m-2">
                                    <h5 className="secondary">ABOUT FAMILY + RELATIONSHIPS</h5>
                                    <p>
                                        At Vanguest LLC we understand that the breakdown of any relationship can be very
                                        stressful and worrying.  During such a difficult time, important decisions usually need to
                                        be made concerning financial matters and future arrangements for any children involved.
                                    </p>

                                    <p>
                                        Vanguest LLC have a very experienced, sympathetic team of family lawyers to guide
                                        you through the legal process and achieve the best outcome for you.  If emergency action is
                                        required, we are able to act quickly to protect your interests.
                                    </p>

                                    <p>
                                        When you instruct Vanguest LLC, you can rest assured that you will have a fully
                                        qualified lawyer who will be with your every step of the way.
                                    </p>

                                    <p>
                                        We are happy to have an initial meeting with any new client free of charge.  In this way
                                        you can judge our approach for yourself and we can advise you as to our likely legal charges.
                                        In some cases applications can be made to the Court for a legal funding order to help you pay your legal fees.
                                    </p>

                                    <div>
                                        We can help you with:-

                                        <ul>
                                            <li>Pre-nuptial agreements</li>
                                            <li>Legal Separations</li>
                                            <li>What happens to pensions upon divorce</li>
                                            <li>Disputes over the ownership of property</li>
                                            <li>Mediation (a process of agreeing future arrangements for your children or in relation to your finances without the need for contests court proceedings)</li>
                                            <li>Cohabitation agreements</li>
                                            <li>Divorce and financial claims</li>
                                            <li>Problems between unmarried couples (including financial claims)</li>
                                            <li>Domestic Violence</li>
                                            <li>Child Arrangements Orders</li>
                                            <li>Specific issues Order (an order relating to a single matter upon which a child parents cannot agree i.e a child religious upbringing)</li>
                                            <li>Adoption</li>
                                            <li>Change of a child name</li>
                                            <li>Parental Responsibility Orders/Agreement (the grant of parental rights to the father of a child)</li>
                                            <li>Prohibited Steps Order (an order preventing certain steps being taken in relation to a child)</li>
                                        </ul>

                                        <br />
                                        With effect from 1 Jan 2019, the Family Department no longer undertakes public funding (formerly known as Legal Aid) work.
                                    </div>
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
