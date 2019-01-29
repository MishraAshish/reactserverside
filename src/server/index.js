import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../shared/App";

/* code for https
import fs from "fs";
import http from "http";
import https from "https";
let privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
let certificate = fs.readFileSync('sslcert/server.crt', 'utf8');
let credentials = {key: privateKey, cert: certificate};
 code for https end*/

global.domainName = "https://local.resume-now.com";
global.rguPath = "/membership/RegisterGuestUser.aspx?ref=3";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <head>
        <title>Universal React</title>
        <link rel="stylesheet" href="/css/main.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"/>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" type="text/javascript"></script>  
        <script src="https://assets.ctfassets.net/zg138yds72up/6TFNLgyymQeEg2EKYowsaE/5f566e923a67d7fd6e91406568a7eb78/rnclnheader.js"></script>
        <link href="https://assets.ctfassets.net/3m3qjq9w5z7d/6M2SbxsqiWgYSukgwoSO6s/f4a2e147832bf5c3613e7272551d6285/headerfooterrncln.css" rel="stylesheet">
              
        <!--<script src="/bundle.js" defer></script> -->
      </head>
      <body>
        <div id="root">${renderToString(<App />)}</div>
      </body>
      <script>
          function loadScript(url, callback) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            if (script.readyState) {  //IE
                script.onreadystatechange = function () {
                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        callback && callback();
                    }
                };
            } else {
                script.onload = function () {
                    callback && callback();
                };
            }
            script.src = url;
            document.getElementsByTagName("head")[0].appendChild(script);
        };       
        function loadStyleSheet(path) {
            var sheet, cssRules;
            var head = document.getElementsByTagName('head')[0], 
            link = document.createElement('link');           
            link.setAttribute('href', path);
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('type', 'text/css');
            head.appendChild(link);
        };
        $(window).load(function () {
                loadStyleSheet('//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800|Montserrat:400,500,600,700');
                loadStyleSheet('//cdn.jsdelivr.net/fontawesome/4.2.0/css/font-awesome.min.css');
                loadScript("//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js", function () {});
                loadScript("//wchat.freshchat.com/js/widget.js", function () {});
                $('img[data-src]').each(function (index, element) {
                    $(element).attr('src', $(element).attr('data-src'));
                });                
        });
        // var strCall = "<a onclick ='javascript:OpenFreshChat();return false;' href='#' class='liveHelpNow chatLive'>";
        //   $(document).ready(function () {
        //           var popupStr = "<div class='contact-box-wrap'><div class='contact-box text-center'>" +
        //                           "        <h2> Need help with anything? </h2> " +
        //           "        <p> <img src='/images/lcr/contact-icon.png' alt='contact icon'/></p>" +
        //           "        <p> 844-351-7484 " +
        //           "            <br> Mon-Fri 8am to 8pm CST" +
        //           "            <br> Sat 8am to 5pm / Sun 10am-6pm CST " +
        //           "            <a href='mailto:customerservice@resume-now.com'>customerservice@resume-now.com</a>" +                        
        //           "        </p>" +
        //           "        <div class='chat-bx'><span id='chat_link'></span></div>" +
        //           "    </div>"+
        //           "$('span[id^=chat_link]').find(function () {" +
        //             "var input ='" + strCall + " LIVE CHAT </a>';" +
        //             "var newRow = input; $('#chat_link').append(newRow);" +
        //           "});" +
        //         " $('.chat-wrp').append(popupStr);"
        // });

        function OpenFreshChat() {if (window.fcWidget.isInitialized() != true) 
          {window.fcWidget.init({token: "9a3e50a0-da60-4527-a92d-b475b91588b5",host: "https://wchat.freshchat.com",tags: ["13"],siteid: "Resume-Now" ,locale: "en",open: true});}}
        </script>
    </html>
  `);
});

/* code for https
// your express configuration here
  var httpServer = http.createServer(app);
  var httpsServer = https.createServer(credentials, app);

  httpServer.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening");
  });
  httpsServer.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening");
  });
code for https end*/

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});