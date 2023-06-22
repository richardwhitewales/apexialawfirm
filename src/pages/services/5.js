import Head from 'next/head'
import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/navigation/footer'
import { getWSSchema, getWPSchema, getLBSchema } from '@/components/schema';
import Breadcrumb from '@/components/navigation/breadcrumb'

export default function Service5Page() {
    // page default data
    const pageName = "Apexia Law Firm - Services";
    const pageDesc = "Apexia Law Firm provide an expert legal counsel and representation for all your legal needs. Trust our experienced attorneys to provide personalized and cost-effective solutions. Contact us today.";
    const baseURL = "https://apexialawfirm.com/services/5";

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
            <Breadcrumb title="IMMIGRATION LAWYERS" />

            <div className="container-fluid py-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-sm-6 my-4">
                                <div className="m-2 text-center">
                                    <div className="triangle-container">
                                        <div className="img">
                                            <img src="/service4.png" alt="about" width={400} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 my-4 primary">
                                <div className="m-2">
                                    <h5 className="secondary">EMPLOYMENT IMMIGRATION ATTORNEYS</h5>
                                    <p>
                                        The starting point to handle your immigration issue is the consultation.
                                        An experienced immigration attorney here at Vanguest LLC will start by learning your
                                        immigration story. Next you will discuss options and work through a plan to get the results
                                        you want. Together you will go over what to expect with fees, costs, timelines and what to do
                                        next. Everything you discuss is secure and confidential so it is necessary that you are
                                        completely open about all aspects of your situation. We are here to help you and information
                                        unknown to the attorney can hurt you.
                                    </p>

                                    <p>
                                        Going into the consultation you must be prepared to act on your options. You will be free to ask
                                        questions and the attorney will encourage you to take action after explaining our fees for each
                                        option available to you. Your consultation will generally last 30 minutes.
                                    </p>

                                    <p>
                                        If you are ready to take action after learning your options, please call and schedule a consultation
                                        today. We can meet with you in person, over the phone or via internet video conference.
                                        You can make payment by cash, credit card or equivalents. Its time to act, call us today.
                                    </p>

                                    <b>IMMIGRATION PRACTICE AREAS:</b>
                                    <br />
                                    Asylum
                                    <br />
                                    Business Immigration
                                    <br />
                                    Family
                                    <br />
                                    Student Visa
                                    <br />
                                    Waivers
                                    <br />
                                    Deportation Defense
                                    <br />
                                    Employment
                                    <br />
                                    Immigration Bond
                                    <br />
                                    Victims of Crime
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6 my-4 primary">
                                <div className="m-2">
                                    <h5 className="secondary">CUSTOMER SERVICE BENEFIT EMPLOYMENT IMMIGRATION EMPLOYMENT IMMIGRATION ATTORNEYS</h5>
                                    <p>
                                        There are several forms of employment immigration. The main divisions are non-temporary
                                        and temporary visas. Factors like qualifications, education, and type of employment
                                        affect the options available for you or your perspective employees. Employment visas
                                        are complex instruments that involving specific qualifications,  sponsors and an arduous application process.
                                    </p>

                                    <p>
                                        You need an experienced Vanguest LLC employment immigration attorney to get you
                                        the employment immigration visa you want, to get your business the employees you need.
                                        We understand the process, the requirements and the pitfalls.
                                    </p>

                                    <b>NON-TEMPORARY VISAS</b>
                                    <p>
                                        A: 1st Preference - Priority workers (immigrants with extraordinary abilities such as: top level researchers, execs and international managers)
                                        <br />
                                        <br />
                                        B: 2nd Preference - Persons with professions that have high level degrees or in the alternative have extraordinary abilities.
                                        <br />
                                        <br />
                                        C: 3rd Preference - Professionals (minimum bachelor degree or equivalent), workers with special skills (with at least 2 years of experience) and other workers with less than 2 years of on the job knowledge or special training.
                                        <br />
                                        <br />
                                        D: 4th Preference - Religious workers.
                                        <br />
                                        <br />
                                        E: 5th Preference - Investors who create jobs in American businesses.
                                    </p>

                                    <b>TEMPORARY EMPLOYMENT VISAS:</b>
                                    <p>
                                        When a non-temporary visa is not an option there are alternatives.
                                        Regrettably, there are a limited number (less than 140,000 per year) of temporary employment
                                        visas available. For this reason it is necessary to have an experienced employment visa
                                        attorney guide you through the process early on from the opening date. Applicants must
                                        start the process with an experienced attorney as early as the need arises. Vanguest
                                        LLC will understand your goals and develop a solid plan to bring in the people your company needs.
                                    </p>
                                </div>
                            </div>

                            <div className="col-sm-6 my-4">
                                <div className="m-2 text-center">
                                    <div className="triangle-container">
                                        <div className="img">
                                            <img src="/service5.png" alt="about" width={400} />
                                        </div>
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
