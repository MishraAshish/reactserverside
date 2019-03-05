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
global.jobsLink = "https://qa-jobs.resume-now.com";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <head>
        <link rel="stylesheet" href="/css/main.css"/>
        <link rel="stylesheet" href="/css/gdpr.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"/>
        <link href="https://assets.ctfassets.net/3m3qjq9w5z7d/6M2SbxsqiWgYSukgwoSO6s/f4a2e147832bf5c3613e7272551d6285/headerfooterrncln.css" rel="stylesheet">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src='//cdn.optimizely.com/js/4720920055.js'></script>
        <script>var segmentScriptVal = {id:'segmentScript',type:"text/javascript",src:"/javascript/segment-io-dev-rna.js",enableUserService:'true',switchAccount:"1"}</script>
        <script>var segmentScriptValMain = {type:'text/javascript',src:'/javascript/segment.js'}</script>
        <script>
        var OnLoadScripts = function () { if (document.readyState == 'complete') { TrackEvents('identify', {'userId':'', 'email':'' }, '', '', false); TrackUTMEvents(null);TrackPageEvents(null, false); } }</script>
        <link href="//plus.google.com/105981997390781500933" rel="publisher" />
        <title>Free Resume Builder | Job Seeker Tools | Resume-Now</title>
        <link rel="canonical" href="https://www.resume-now.com" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="Instantly create a job-winning resume. Resume-Now's resume builder includes job-specific resume templates, resume examples and expert writing tips to help you get the job." />
        <meta name="keywords" content="LiveCareer Resume Builder, resume templates, resume samples, resume examples, resume, resumes, resume tips, online resume, resume writing, create resume" />
        <meta name="robots" content="NOODP" />
        <meta name="rating" content="General" />
        <meta name="language" content="english, EN" />
        <meta name="charset" content="US-ASCII" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta name="author" content="LiveCareer" />
        <meta name="publisher" content="LiveCareer.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" type="image/png" href="/media/favicon.ico" />
        <link href="CSS/lcr/bootstrap.min.css" rel="stylesheet" />
        <link href="//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900" rel="stylesheet" />
        <script src="https://assets.ctfassets.net/3m3qjq9w5z7d/1irMI3Ows7pQFtUbJQeTFJ/136637203efb4343ca71c806c2e20d88/custom.js"></script>
        <link href="https://contentful.blob.core.windows.net/rna/navigations/dev/css/style.css" rel="stylesheet"/>
        <!--[if lte IE 9]>
            <link rel="stylesheet" href="/css/lcr/bootstrap.min.css" />
            <script src="//cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="//cdn.jsdelivr.net/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
      
      <script src="https://api-sandbox-visitor.livecareer.com//tracking-v3.js"></script>
      <script>
          var _tsa = {};
        
          _tsa['accoundcd'] = 'RSMNA';
          
          _tsa['enmd'] = 'DEV';
          
          _tsa['pgcd'] = '';
          _tsa['prcd'] = 'RSM';

        _tsa['includeUseragent'] = false;
          _tsa['includeGeolocation'] = false;
        
          TS.Track( _tsa['prcd'],_tsa['accoundcd'],_tsa['includeUseragent'], _tsa['includeGeolocation']);
      </script>

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
                $('img[data-src]').each(function (index, element) {
                    $(element).attr('src', $(element).attr('data-src'));
                });                
        });        
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