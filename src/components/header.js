import React from "react";

export default function HeaderHtml() {    
  function OpenFreshChat(){
    debugger;
    if (window.fcWidget.isInitialized() != true) 
      { 
        window.fcWidget.init({ 
            token: "9a3e50a0-da60-4527-a92d-b475b91588b5",
            host: "https://wchat.freshchat.com",
            tags: ["13"],siteid: "Resume-Now" ,
            locale: "en",
            open: true
          });
    }
  }
    return (
          <div id="rnaseoheader">
    <div className="rnheader78-inner-wrapper">
  <header className="fixed-header-78-cntr rna-fixed-header-78-cntr">
    <div className="top-header-78 hidden-xs">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="chat-cntr pull-right"> 
              <div className="chat-support-cntr">
                <span className="comment-icon pull-left">
                <img src="https://images.ctfassets.net/zg138yds72up/Z6rtFMNyUeicmYyci6GQa/3ef7450fde0d195ba6ae88c51ac114d4/comment-icon.png" alt=""/></span>
                    <div className="chat-inner-cntr pull-right"> <strong>SUPPORT 7 DAYS A WEEK</strong>
                      <div className="clear"> 
                        <a href={global.domainName+"/information/contact.aspx"}>PHONE</a>,
                        <a href={global.domainName+"/information/contact.aspx"}>EMAIL & </a>
                        <a href={global.domainName+"/information/contact.aspx"}>LIVE CHAT</a> 
                      </div>
                    </div>
              </div>
              <div className="contact-box-wrap-78">
            <div className="contact-box-78 text-center">        
              <h2> Need help with anything? </h2>         
              <p> <img className="headcontacticon" alt="contact icon" src="https://images.ctfassets.net/zg138yds72up/1gYa6tCbwseOciuK2QcUe/e47f868f944c567bd8ac622a9c17cbae/contact-icon.png"/></p>        
              <p> 844-351-7484 <br/> Mon-Fri 8am to 8pm CST <br/> Sat 8am to 5pm / Sun 10am-6pm CST <br/> 
                <a href="mailto:customerservice@resume-now.com">customerservice@resume-now.com</a>  
              </p>        
              <div className="chat-bx">
                <span id="chat_link"><a onClick={OpenFreshChat} href="#" className="liveHelpNow chatLive"> LIVE CHAT </a></span>
                <span id="chat-widget"></span>
              </div>    
            </div>
        </div>
            </div>
          </div>
        </div>
      </div>
              
          <div className="bottom-header-78">
              <div className="container">
              <div className="row">	  
                  <div className="navbar-header">		 
        <div className="pull-left">
          <a id="rna-seo-logo" href={global.domainName+"/membership/RegisterGuestUser.aspx"} className="navbar-brand-78">
            <img src="https://content.livecareer.com/rna/images/desktop/logo.png" alt="Resume-Now" title="Resume-Now"/>
          </a>
        </div>
        <div className="pull-right">
          <span className="comment-icon pull-left hidden-sm hidden-md hidden-lg">
          <img src="https://images.ctfassets.net/zg138yds72up/Z6rtFMNyUeicmYyci6GQa/3ef7450fde0d195ba6ae88c51ac114d4/comment-icon.png" alt=""/></span>
          <button data-toggle="collapse" className="navbar-toggle-78 collapsed" type="button">
            <span id="fixed-open-nav" className="open-nav"><i className="fa fa-bars"></i> Menu</span>
            <span id="fixed-close-nav" className="hidden-xs"><i className="fa fa-times"></i> Close</span>
          </button>				
      </div>
      
      <div className="contact-box-wrap-78">
          <div className="contact-box-78 text-center">        
                  <h2> Need help with anything? </h2>         
                  <p> <img className="headcontacticon" alt="contact icon" src="https://images.ctfassets.net/zg138yds72up/1gYa6tCbwseOciuK2QcUe/e47f868f944c567bd8ac622a9c17cbae/contact-icon.png"/></p>        
                  <p> 844-351-7484 <br/> Mon-Fri 8am to 8pm CST <br/> Sat 8am to 5pm / Sun 10am-6pm CST  <br/>
                  <a href="mailto:customerservice@resume-now.com">customerservice@resume-now.com</a>  
                  </p>        
                  <div className="chat-bx">
                      <span id="chat_link_sec"><a onClick="javascript:OpenFreshChat();return false;" href="#" className="liveHelpNow chatLive"> LIVE CHAT </a></span>
                  </div>    
          </div>
      </div>
      
      </div>	
      
          <div className="navbar-collapse collapse pull-right navbar-collapse-78">         
            <ul className="nav navbar-nav navbar-right nav-pills header-right-nav-78">	    
              <li><a href={global.domainName+"/templates"}>Resume Templates</a></li>
              <li><a href="//jobs.resume-now.com">Jobs</a></li>
              <li className="hidden-sm hidden-md hidden-lg"><a href={global.domainName+"/information/contact.aspx"}>Contact Us</a></li> 
              <li><a href={global.domainName+"/membership/signin.aspx?productid=10&amp;ref=3"} className="login-link">Login</a></li>			           
            </ul>		  
          </div>
        </div>
      </div>
    </div>
    </div>

  </header>
  </div></div>
  )
}