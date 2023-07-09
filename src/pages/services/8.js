import Head from 'next/head'
import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/navigation/footer'
import { getWSSchema, getWPSchema, getLBSchema } from '@/components/schema';
import Breadcrumb from '@/components/navigation/breadcrumb'

export default function Service8Page() {
    // page default data
    const pageName = "Apexia Law Firm LLC - Services";
    const pageDesc = "Apexia Law Firm LLC provide an expert legal counsel and representation for all your legal needs. Trust our experienced attorneys to provide personalized and cost-effective solutions. Contact us today.";
    const baseURL = "https://apexialawfirm.com/services/8";

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
            <Breadcrumb title="PROBATE & ADMINISTRATION" />

            <div className="container-fluid py-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-sm-6 my-4">
                                <div className="m-2 text-center">
                                    <div className="triangle-container">
                                        <div className="img">
                                            <img src="/service9.png" alt="about" width={400} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 my-4 primary">
                                <div className="m-2">
                                    <h5 className="secondary">PROBATE AND ADMINISTRATION OF DECEASED ESTATES</h5>
                                    <p>
                                        When somebody dies the assets which they owned at the time of their death become the
                                        responsibility of the “personal representative” of the person who died.  Where the
                                        deceased left a will the personal representative will usually have been appointed
                                        in the Will and is called an Executor.  If there was no Will the person entitled to
                                        become the personal representative will normally be the &quot;next of kin&quot; of the person
                                        who died and is called an Administrator.

                                        <br />
                                        Except in the case of quite small estates it is normally necessary to obtain a Grant
                                        of Representation from the Probate Registry before dealing with the estate assets.
                                    </p>

                                    <p>
                                        We can assist in all elements of the estate including advising on the appointment of 
                                        an Administrator where no will has been left, advising on the necessary duties of the 
                                        Executor or Administrator, obtaining the Grant and assisting you in carrying out the 
                                        terms of the Will.

                                        <br />
                                        We can also advise in regard to situations where tax saving or other arrangements may 
                                        be possible during the course of administration to best achieve the wishes of the 
                                        beneficiaries of the estate.  This can include creation of Deeds of Variation of Wills, 
                                        or settling claims against the estate.
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
