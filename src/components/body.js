import React from "react";
import templateimage from "../../public/media/templates-img.png";
import tipsImg from "../../public/media/tips-img.png";
import formatingTool from "../../public/media/formating-tool-img.png";
import asseen from "../../public/media/as-seen-in.png";

export default function BodyHtml() {
    let rgu = global.domainName+global.rguPath;
    return (
<div>
    <div className="bnr-wrp">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 bnr-content">
                    <h1>Instantly Create a Resume<br />
                        that Employers Love</h1>
                    <div className="sub-title">Now with Cover Letters</div>
                    <ul className="feat-list">
                        <li><i className="fa fa-circle"></i>One-Click Designs</li>
                        <li><i className="fa fa-circle"></i>Multiple Formats</li>
                        <li><i className="fa fa-circle"></i>No More Writer's Block</li>
                    </ul> 
                    <a href={rgu} className="btn btn-lg btn-blue">Create Resume <i className="fa fa-angle-right"></i></a>                  
                </div>
            </div>
        </div>
    </div>    
    <div className="partner-wrp">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="partner text-center">
                        <h2>As Seen In</h2>
                        <img src={asseen} alt="" width="785" height="194" className="img-partner" />
                    </div>
                </div>
            </div>
        </div>
    </div>    
    <div className="ofr-feat-wrp">
        <div className="container">
            <div className="content-wrp">
                <div className="row">
                    <div className="feat-content">
                        <div className="feat-img col-sm-6 text-right col-sm-push-6">
                            <img src={templateimage} alt="Not sure how to get started?" width="235" height="246" />
                        </div>
                        <div className="col-sm-6 col-sm-pull-6">
                            <div className="feat-title">20 TEMPLATES</div>
                            <h2>Not sure how to get started?</h2>
                           <p>A good first step is selecting a design that meets your needs. We have over 20 design templates that make it easy to get started.</p>                            
                           <a href={rgu} target="_blank" className="view-link">View our Templates <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="feat-content">
                        <div className="col-sm-6 text-left feat-img">
                            <img src={tipsImg} alt="HELPFUL TIPS" width="294" height="220" />
                        </div>
                        <div className="col-sm-6">
                            <div className="feat-title">HELPFUL TIPS</div>
                            <h2>Don't know what employers are looking for?</h2>
                             <p>We offer expert advice and 1000s of career-specific writing examples you can add directly to your resume.</p>
                             <a href={rgu} target="_blank" className="view-link">Look at Tips and Sample Text <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="feat-content">
                        <div className="feat-img col-sm-6 text-right col-sm-push-6">
                            <img src={formatingTool} alt="FORMATTING TOOLS" width="223" height="256" />
                        </div>
                        <div className="col-sm-6 col-sm-pull-6">
                            <div className="feat-title">FORMATTING TOOLS</div>
                            <h2>Can't get the formatting right?</h2>
                            <p>We eliminate the frustration of trying to format in Word. Our designs and simple formatting tools make it easy to get you exact look you want.</p>
                            <a href={rgu} target="_blank" className="view-link">Try Our Formatting Tools <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    </div>        
    <div className="testimonial text-center">
        <div className="container">
            <h2 className="h2 text-center">Success Stories</h2>
            <small className="fa fa-quote-left"></small>
            <div data-ride="carousel" className="carousel slide" id="testimonal-carousel">
                <div className="carousel-inner">
                    <div className="item active">
                        <blockquote>
                            <p>It really works! In less than a week I got a new job, and they were impressed with my resume.</p>
                            <span>Russell S.</span>
                        </blockquote>
                    </div>
                    <div className="item">
                        <blockquote>
                            <p>I absolutely love this website! It makes creating a Resume as simple as 1 2 3! I would recommend this site to anyone!</p>
                            <span>Stacie F.</span>
                        </blockquote>
                    </div>
                    <div className="item">
                        <blockquote>
                            <p>LiveCareer is awesome. Signed up yesterday and got a call today to interview tomorrow.</p>
                            <span>Michelle S.</span>
                        </blockquote>
                    </div>
                </div>

                <ol className="carousel-indicators">
                    <li data-target="#testimonal-carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#testimonal-carousel" data-slide-to="1"></li>
                    <li data-target="#testimonal-carousel" data-slide-to="2"></li>
                </ol>
            </div>
        </div>
    </div>
    <div className="review-wrp">
        <div className="container">
            <div className="row">
                <div className="col-sm-7">
                    <p>Find out why Resume-Now is a top choice for job seekers. No risk and no obligation.</p>
                </div>
                <div className="col-sm-5 review-cta"><a href={rgu} className="btn btn-lg btn-blue">Create Resume <i className="fa fa-angle-right"></i></a></div>
            </div>
        </div>
    </div>
    <div className="testimonial text-center">
        <div className="container">
            <div className="trustpilot-widget" data-locale="en-US" data-template-id="539ad0ffdec7e10e686debd7" data-businessunit-id="4f83a0f20000640005144a70" data-style-height="350px" data-style-width="100%" data-theme="light" data-stars="4,5" data-schema-type="Organization"> 
                <a href="https://www.trustpilot.com/review/resume-now.com" target="_blank">Trustpilot</a>
            </div>
        </div>
    </div>
</div>
)}