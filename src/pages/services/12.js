import Head from 'next/head'
import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/navigation/footer'
import { getWSSchema, getWPSchema, getLBSchema } from '@/components/schema';
import Breadcrumb from '@/components/navigation/breadcrumb'

export default function Service12Page() {
    // page default data
    const pageName = "Apexia Law Firm - Services";
    const pageDesc = "Apexia Law Firm provide an expert legal counsel and representation for all your legal needs. Trust our experienced attorneys to provide personalized and cost-effective solutions. Contact us today.";
    const baseURL = "https://apexialawfirm.com/services/12";

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
            <Breadcrumb title="ABOUT CIVIL COURT" />

            <div className="container-fluid py-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-sm-6 my-4">
                                <div className="m-2 text-center">
                                    <div className="triangle-container">
                                        <div className="img">
                                            <img src="/service13.png" alt="about" width={400} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 my-4 primary">
                                <div className="m-2">
                                    <h5 className="secondary">ABOUT CIVIL COURT</h5>
                                    <p>
                                        Unfortunately, it is all too easy for people to unwittingly become
                                        involved in legal proceedings.  If that happens we can provide impartial
                                        and common sense advice.  We can often save you money by dealing with the
                                        problem quickly and efficiently. We will give you advice in a way that you
                                        can understand and will keep you informed of developments as they occur.
                                    </p>

                                    <p>
                                        We have particular expertise in disputes relating to wills, estates
                                        and inheritance and can guide you through your rights and obligations
                                        in a range of situations.  Below are some examples of questions we are often asked.
                                    </p>

                                    <p>
                                        A relative has passed away but his will does not accurately reflect his wishes. Is there a way around this?
                                        My partner passed away without leaving a will and I haven&lsquo;t been left with sufficient financial provision to live. Can I do anything?
                                        The Will Writer we used made an error which has caused us problems and financial loss. Do I have any redress?
                                        The executors of my relative&lsquo;s estate are not distributing the assets honestly. Can I stop them?
                                        What can I do if I want to contest a loved one&lsquo;s estate?
                                    </p>

                                    <p>
                                        In all of the above situations, there is always something you can do.
                                        There are tight time limits for bringing matters like this to Court, so please contact us as
                                        soon as possible and our experts will talk you through the process.
                                        Vanguest LLC can manage almost any dispute you may have, including the following areas:
                                    </p>

                                    <p>
                                        Wills, estates and inheritance
                                        <br />
                                        Landlord & Tenants
                                        <br />
                                        Property & building disputes
                                        <br />
                                        Debt Recovery and insolvency
                                        <br />
                                        Boundary disputes
                                        <br />
                                        Employment and settlement agreements
                                        <br />
                                        Professional negligence
                                        <br />
                                        Consumer disputes
                                        <br />
                                        Court actions and representation
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
