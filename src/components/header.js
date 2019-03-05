import React from "react";

export default function HeaderHtml() {      
    return (
      <div id="rnasemheader">
      <header className="sem-seo header dynamicHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 header-left">
              <a href="/" className="header-logo js-header-logo">
                <img src="https://images.ctfassets.net/3m3qjq9w5z7d/4ifUx0PSdilyP9eJnJr6PD/09e442bf07792c86470084b59b238b99/resume-now-logo.svg"
                  alt="resume-now-logo" title="Resume Now logo" />
              </a>
              <div className="menu-wrapper">
                <span className="title icon icon-menu js-icon-menu">Menu</span>
                <input type="checkbox" className="menu-check-action"/>
                <div className="sidebar-menu">
                  <ul className="sub-header  many-option js-sub-header move">
                    <li className="nav-links">
                      <a href="/" className="js-header-logo">
                        <img src="https://images.ctfassets.net/3m3qjq9w5z7d/4ifUx0PSdilyP9eJnJr6PD/09e442bf07792c86470084b59b238b99/resume-now-logo.svg"
                          alt="resume-now-logo" title="Resume Now logo"/>
                      </a>
                    </li>
                    <li className="nav-links login ">
                      <a href={global.domainName +"/membership/signin.aspx?productid=10&ref=3"}>Login</a>
                    </li>
                    <li className="nav-links logout  auth-links">
                      <a href={global.domainName +"/membership/signout.aspx"}>Logout</a>
                    </li>
                    <li className="nav-links auth-links active">
                      <a id="lnkGoToDashboard" href={global.domainName +"/mobile/dashboard/documents"} className="icon icon-doc">Your Documents</a>
                    </li>
                    <li className="nav-links auth-links">
                      <a href={global.domainName +"/profile/my-settings-b.aspx"} className="icon icon-acc-setting">Account Settings</a>
                    </li>
                    <li className="nav-links">
                      <a href={global.domainName +"/contact-us"} className="icon icon-contact">Contact Us</a>
                    </li>    
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-9 header-right">
              <nav className="pull-right">
                <ul>
                  <li className="nav-links home-links">
                    <a href={global.domainName +"/templates"}>Resume</a>
                  </li>
                  <li className="nav-links home-links ">
                    <a className="js-job-links" href={global.jobsLink}>Jobs</a>
                  </li>
                  <li className="nav-links active login">
                    <a href={global.domainName +"/membership/signin.aspx?productid=10ref=3"}>LOGIN</a>
                  </li>
    
                  <li className="nav-links icon icon-user js-user-icon auth-links">
                    <div className="user-popup js-user-popup">
                      <div className="acc-detail">
                        <span className="user-name">Firstname Lastname</span>
                        <span className="user-id">useremail@email.com</span>
                      </div>
                      <ul className="acc-list">
                        <li className="icon icon-setting">
                          <a href={global.domainName +"/profile/my-settings-b.aspx"}>Settings</a>
                        </li>
                        <li className="icon icon-support">
                          <a href={global.domainName +"/contact-us"}>Help Support</a>
                        </li>
                        <li className="icon icon-logout auth-links">
                          <a href={global.domainName +"/membership/signout.aspx"}>Log out</a>
                        </li>
                      </ul>
                    </div>
                  </li>                  
                  <li className="nav-links icon icon-chat">
                    <a href={global.domainName +"/contact-us"}>CONTACT US</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="sem-seo header-seperator"></div>
    </div>    
  )
}