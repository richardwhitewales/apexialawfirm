import Head from 'next/head'
import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/navigation/footer'
import { getWSSchema, getWPSchema, getLBSchema } from '@/components/schema';
import Breadcrumb from '@/components/navigation/breadcrumb'

export default function Service4Page() {
    // page default data
    const pageName = "Apexia Law Firm - Services";
    const pageDesc = "Apexia Law Firm provide an expert legal counsel and representation for all your legal needs. Trust our experienced attorneys to provide personalized and cost-effective solutions. Contact us today.";
    const baseURL = "https://apexialawfirm.com/services/4";

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
        "+00-000-000-0000",
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
            <Breadcrumb title="ALREADY LIVING TOGETHER" />

            <div className="container-fluid py-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-sm-6 my-4">
                                <div className="m-2 text-center">
                                    <div className="triangle-container">
                                        <div className="img">
                                            <img src="/service3.png" alt="about" width={400} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 my-4 primary">
                                <div className="m-2">
                                    <h5 className="secondary">ALREADY LIVING TOGETHER</h5>
                                    <p>
                                        If your name does not appear on the Title Deeds, you may have a financial interest in a property if:
                                    </p>

                                    <p>
                                        a - you have contributed towards the property in some way; or
                                        <br />
                                        b - you and the owner of the property have children together; or
                                        <br />
                                        c - you have been promised an interest in the property by the owner; or
                                        <br />
                                        d - you have an express declaration or agreement; or
                                        <br />
                                        e - you are married to or in a civil partnership with the owner of the property
                                    </p>
                                    <p>
                                        Should your relationship breakdown, Vanguest LLC can advise you upon your rights
                                        in respect of your home including your rights to live there and whether you have any financial
                                        claims against the property.
                                    </p>

                                    <p>
                                        Even if you do not have any financial claims against the property, you may be able to make
                                        financial claims on behalf of the children of your relationship.  Under the Children Act 1989,
                                        the Court has the power to transfer a property from the name of one parent to the name of the
                                        parent who is to provide a home for their children.  Alternatively, the Court can order one
                                        parent to pay the other a lump sum to enable a home to be bought for the children.
                                        The Court also has the power to make other financial settlements on behalf of children.
                                    </p>

                                    <p>
                                        If you have children, we can also advise you upon Parental Responsibility, the future living
                                        arrangements for your children and arrangements for contact between the children and the
                                        non-resident parent (known as Child Arrangement Orders).
                                    </p>

                                    <p>
                                        Disputes can be settled by negotiation or mediation.  If necessary, Court proceedings can be
                                        issued and pursued expeditiously.
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
