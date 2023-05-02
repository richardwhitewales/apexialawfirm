import Head from 'next/head'
import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/navigation/footer'
import { getWSSchema, getWPSchema, getLBSchema } from '@/components/schema';
import Breadcrumb from '@/components/navigation/breadcrumb'

export default function Service11Page() {
    // page default data
    const pageName = "Apexia Law Firm - Services";
    const pageDesc = "Apexia Law Firm provide an expert legal counsel and representation for all your legal needs. Trust our experienced attorneys to provide personalized and cost-effective solutions. Contact us today.";
    const baseURL = "https://apexialawfirm.com/services/11";

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
            streetAddress: "",
            addressLocality: "",
            addressRegion: "",
            postalCode: "",
            addressCountry: ""
        },
        "+00-000-000-0000",
        "info@apexialawfirm.com",
        baseURL,
        `${baseURL}/logo.png`,
        "Cash, Credit Card, Transfer",
        "NGN, USD, EURO",
        "Mo-Fr 09:00-17:00",
        {
            latitude: "",
            longitude: ""
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
            <Breadcrumb title="ABOUT CRIMINAL COURT" />

            <div className="container-fluid py-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-sm-6 my-4">
                                <div className="m-2 text-center">
                                    <div className="triangle-container">
                                        <div className="img">
                                            <img src="/service12.png" alt="about" width={400} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 my-4 primary">
                                <div className="m-2">
                                    <h5 className="secondary">ABOUT CRIMINAL COURT</h5>
                                    <p>
                                        We have a team of Solicitors, Legal Executives and support staff who are
                                        on hand to assist you if you are summoned or charged with a criminal offence.
                                        Representation can be provided at the Police Station, Magistrates Court, Youth Court
                                        and Crown Court.  We cover a wide range of issues including private client work
                                        and publicly funded work (Legal Aid).   An example of some of the matters which
                                        we deal with are:-
                                    </p>

                                    <p>
                                        Should a Police Officer attend at your home and interview you under Caution;
                                        If you are interviewed under Caution at a DSS Office;
                                        If you have been arrested and are to be interviewed by either Custom & Excise or
                                        Immigration Officers or Ministry of Defence Police, Special Investigation Branch
                                        or Royal Military Police, RAF Police or Naval Provost;
                                        Exercise your right to free independent legal advice. Everyone who is detained
                                        at a Police Station is entitled to receive free independent legal advice.
                                    </p>

                                    <b>We are available 24 hours a day, 365 days a year should you require representation.</b>
                                    <p>
                                        Do not hesitate to call us if you are interviewed at a Police Station as legal
                                        representation is crucial at an early stage.
                                    </p>

                                    <b>Free initial appointment</b>
                                    <p>
                                        We offer a free initial half hour interview so that we can give you free advice.
                                    </p>

                                    <b>Persons under 18 years</b>
                                    <p>
                                        If you are under 18 and charged with a criminal offence you will be brought before the 
                                        local Youth Court, unless you are jointly charged with an adult.   In most cases, 
                                        representation at the Youth Court will be free of charge so please call us to see whether 
                                        this applies to you.
                                        We also deal with serious criminal cases which are heard in the Crown Court. 
                                        At Vanguest LLC we have a Specialist Crown Court Department and can arrange 
                                        for highly qualified Barristers to represent you.
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
