---
description: >-
  WebDAV running on a Netwrix Privilege Secure server can cause UI errors and
  loss of functionality. This article shows how to disable WebDAV in the IIS
  web.config for Netwrix Privilege Secure.
keywords:
  - WebDAV
  - IIS
  - web.config
  - Netwrix Privilege Secure
  - HTTP 405
  - Method Not Allowed
  - iisreset
  - Privilege Secure
products:
  - privilege-secure-access-management
sidebar_label: 'User Interface Errors Due to Incompatibility With '
tags: []
title: "User Interface Errors Due to Incompatibility With WebDAV"
knowledge_article_id: kA04u000000PdKyCAK
---

# User Interface Errors Due to Incompatibility With WebDAV

## Summary

Running WebDAV on a Netwrix Privilege Secure server will lead to various errors in the Netwrix Privilege Secure UI, and loss of certain UI functionality.

## Issue

For example, after WebDAV is installed on a Netwrix Privilege Secure server, the following error displays in the UI when adding a service account:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> <html xmlns="http://www.w3.org/1999/xhtml"> <head> <title>IIS 8.5 Detailed Error - 405.0 - Method Not Allowed</title> <style type="text/css"> <!-- body{margin:0;font-size:.7em;font-family:Verdana,Arial,Helvetica,sans-serif;} code{margin:0;color:#006600;font-size:1.1em;font-weight:bold;} .config_source code{font-size:.8em;color:#000000;} pre{margin:0;font-size:1.4em;word-wrap:break-word;} ul,ol{margin:10px 0 10px 5px;} ul.first,ol.first{margin-top:5px;} fieldset{padding:0 15px 10px 15px;word-break:break-all;} .summary-container fieldset{padding-bottom:5px;margin-top:4px;} legend.no-expand-all{padding:2px 15px 4px 10px;margin:0 0 0 -12px;} legend{color:#333333;;margin:4px 0 8px -12px;_margin-top:0px; font-weight:bold;font-size:1em;} a:link,a:visited{color:#007EFF;font-weight:bold;} a:hover{text-decoration:none;} h1{font-size:2.4em;margin:0;color:#FFF;} h2{font-size:1.7em;margin:0;color:#CC0000;} h3{font-size:1.4em;margin:10px 0 0 0;color:#CC0000;} h4{font-size:1.2em;margin:10px 0 5px 0; }#header{width:96%;margin:0 0 0 0;padding:6px 2% 6px 2%;font-family:"trebuchet MS",Verdana,sans-serif; color:#FFF;background-color:#5C87B2; }#content{margin:0 0 0 2%;position:relative;} .summary-container,.content-container{background:#FFF;width:96%;margin-top:8px;padding:10px;position:relative;} .content-container p{margin:0 0 10px 0; }#details-left{width:35%;float:left;margin-right:2%; }#details-right{width:63%;float:left;overflow:hidden; }#server_version{width:96%;_height:1px;min-height:1px;margin:0 0 5px 0;padding:11px 2% 8px 2%;color:#FFFFFF; background-color:#5A7FA5;border-bottom:1px solid #C1CFDD;border-top:1px solid #4A6C8E;font-weight:normal; font-size:1em;color:#FFF;text-align:right; }#server_version p{margin:5px 0;} table{margin:4px 0 4px 0;width:100%;border:none;} td,th{vertical-align:top;padding:3px 0;text-align:left;font-weight:normal;border:none;} th{width:30%;text-align:right;padding-right:2%;font-weight:bold;} thead th{background-color:#ebebeb;width:25%; }#details-right th{width:20%;} table tr.alt td,table tr.alt th{} .highlight-code{color:#CC0000;font-weight:bold;font-style:italic;} .clear{clear:both;} .preferred{padding:0 5px 2px 5px;font-weight:normal;background:#006633;color:#FFF;font-size:.8em;} --> </style> </head> <body> <div id="content"> <div class="content-container"> <h3>HTTP Error 405.0 - Method Not Allowed</h3> <h4>The page you are looking for cannot be displayed because an invalid method (HTTP verb) is being used.</h4> </div> <div class="content-container"> <fieldset><h4>Most likely causes:</h4> <ul> <li>The request sent to the Web server used an HTTP verb that is not allowed by the module configured to handle the request.</li> <li>A request was sent to the server that contained an invalid HTTP verb.</li> <li>The request is for static content and contains an HTTP verb other than GET or HEAD.</li> <li>A request was sent to a virtual directory using the HTTP verb POST and the default document is a static file that does not support HTTP verbs other than GET or HEAD.</li> </ul> </fieldset> </div> <div class="content-container"> <fieldset><h4>Things you can try:</h4> <ul> <li>Verify the list of verbs enabled for the module handler this request was sent to, and ensure that this verb should be allowed for the Web site.</li> <li>Check the IIS log file to see which verb is not allowed for the request.</li> <li>Create a tracing rule to track failed requests for this HTTP status code. For more information about creating a tracing rule for failed requests, click <a href="http://go.microsoft.com/fwlink/?LinkID=66439">here</a>. </li> </ul> </fieldset> </div> <div class="content-container"> <fieldset><h4>Detailed Error Information:</h4> <div id="details-left"> <table border="0" cellpadding="0" cellspacing="0"> <tr class="alt"><th>Module</th><td>   WebDAVModule</td></tr> <tr><th>Notification</th><td>   MapRequestHandler</td></tr> <tr class="alt"><th>Handler</th><td>   aspNetCore</td></tr> <tr><th>Error Code</th><td>   0x00000000</td></tr> </table> </div> <div id="details-right"> <table border="0" cellpadding="0" cellspacing="0"> <tr class="alt"><th>Requested URL</th><td>   https://cm-sa-vm.cm-vm.com:6500/api/v1/Credential/3c7bad4e-a66a-4928-87b5-706d6220d52d</td></tr> <tr><th>Physical Path</th><td>   C:\Program Files\Stealthbits\PAM\Web\api\v1\Credential\3c7bad4e-a66a-4928-87b5-706d6220d52d</td></tr> <tr class="alt"><th>Logon Method</th><td>   Anonymous</td></tr> <tr><th>Logon User</th><td>   Anonymous</td></tr> </table> <div class="clear"></div> </div> </fieldset> </div> <div class="content-container"> <fieldset><h4>More Information:</h4> This error means that the request sent to the Web server contained an HTTP verb that is not allowed by the configured module handler for the request. <p><a href="http://go.microsoft.com/fwlink/?LinkID=62293&amp;IIS70Error=405,0,0x00000000,9600">View more information &raquo;</a></p> </fieldset> </div> </div> </body> </html>
```

## Instructions

Netwrix Privilege Secure's incompatibility with WebDAV can be mitigated by disabling WebDAV for Netwrix Privilege Secure's Internet Information Services (IIS) web.config.

1. Back up the following file, then open the original file in a text editor:

```text
%PROGRAMFILES%\Stealthbits\PAM\Web\web.config
```

2. In `web.config`, under `<system.webServer>` add the following:

```xml
<modules>
  <remove name="WebDAVModule" />
</modules>
```

3. Then, under `<handlers>` (which is a child field of `<system.webServer>`) add the following:

```xml
<remove name="WebDAV" />
```

4. Save the file, open an elevated Command Prompt, and run the following command to restart IIS so the change can take effect:

```text
iisreset
```
