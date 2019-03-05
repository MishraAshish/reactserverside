import React from "react";

export default function FooterHtml() {    
    return (
        <div id="rnasemfooter" className="footer-with-disclamier">
            <footer className="sem-seo footer">
            <div className="footer-top">
                <div className="container">
                <ul>
                    <li className="nav-lists">
                        <a href={global.domainName +"/information/about.aspx"} className="nav-text">About Us</a>
                        </li>
                        <li className="nav-lists">
                        <a href={global.domainName +"/information/termsofuse.aspx"} className="nav-text">Terms &amp; Conditions</a>
                        </li>
                        <li className="nav-lists">
                        <a href={global.domainName +"/information/privacy.aspx"} className="nav-text">Privacy Policy</a>
                        </li>
                        <li className="nav-lists">
                        <a href={global.domainName +"/contact-us"} className="nav-text">Contact Us</a>
                        </li>
                        <li className="nav-lists">
                            <a href={global.jobsLink} className="nav-text js-job-links">Jobs</a>
                        </li>
                </ul>
                <div className="disclaimer"><span className="sup left js-sub-text">*</span><span>Based on a survey of 300 respondents who canceled the
                    service because they had found a
                    job. Calculation was made based on average annual pay (pre-tax) and how much faster, in average,
                    respondents were able to get hired with Resume-Now's help.</span></div>
                </div>
        
            </div>
            <div className="footer-btm">
                <div className="container">
                <div className="title">
                    ©2019, Bold Limited. All rights reserved.
                </div>
                </div>
            </div>
            </footer>
        </div>     
    )
}