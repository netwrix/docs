---
description: >-
  Describes mitigations for common web-app vulnerabilities in the Password
  Manager web application hosted on IIS, including steps to add security
  headers, defend against slow HTTP POST attacks, and set HttpOnly cookie
  attributes.
keywords:
  - IIS
  - X-Frame-Options
  - HttpOnly
  - Request Filtering
  - slow HTTP POST
  - URL Rewrite
  - web.config
  - cookies
products:
  - general
sidebar_label: Vulnerabilities for web-attacks
tags:
  - security-and-compliance
title: "Vulnerabilities for web-attacks"
knowledge_article_id: kA00g000000H9dTCAS
---

# Vulnerabilities for web-attacks

Some scanners can find vulnerabilities in the Password Manager web-app. Because it is hosted on IIS, you can mitigate some of these vulnerabilities by applying additional IIS configuration.

## V1. The response for request did not have an "X-FRAME-OPTIONS" header present

### Solution 1:
1. Open Internet Information Services (IIS) Manager.
2. In the **Connections** pane on the left side, expand the **Sites** folder and select the site that you want to protect.
3. Double-click the **HTTP Response Headers** icon in the feature list in the middle.
4. In the Actions pane on the right side, click **Add**.
5. In the dialog box that appears, type `X-Frame-Options` in the **Name** field and type `SAMEORIGIN` in the **Value** field.
6. Click **OK** to save your changes.

Refer to http://support.microsoft.com/kb/2694329

---

## V2. Vulnerable to slow HTTP POST Attacks

### Solution 2:
1. Run the IIS Manager on the machine where Netwrix Password Manager is installed.
2. On the left pane navigate to **Sites** / **Default Web Site** / **PM**
3. On the middle pane double-click on **Request Filtering**
4. On the right pane click on **Edit Feature Settings**
5. Set the `Maximum allowed content length` to `15000000` bytes, set the `Maximum URL length` to `1024` bytes and set the `Maximum query string` to `512` bytes, then click **OK**
6. On the left pane click on **Sites**, then on the middle pane one-click on **Default Web Site** and on the right pane click **Set Web Site Defaults**
7. Expand **Connection Limits** node
8. Set the `Connection Time-out` to `60` second or lower, set the `Maximum Bandwidth` to `1400000000` bytes, then click **OK**
9. Restart the IIS server via Command Prompt (Start "Run", `cmd`, type `iisreset` and press Enter)

---

## V3. Cookie does not contain the "HTTPOnly" attribute

### Solution 3:
You can apply a cookie filter by using URL Rewrite for IIS7: http://www.iis.net/downloads/microsoft/url-rewrite

Install URL Rewrite and paste the following into the `<system.webServer>` section of your `web.config`.

```xml
<rewrite>
    <outboundRules>
         <rule name="Add HttpOnly" preCondition="No HttpOnly">
             <match serverVariable="RESPONSE_Set_Cookie" pattern=".*" negate="false" />
             <action type="Rewrite" value="{R:0}; HttpOnly" />
             <conditions>
             </conditions>
         </rule>
   <preConditions>
       <preCondition name="No HttpOnly">
            <add input="{RESPONSE_Set_Cookie}" pattern="." />
            <add input="{RESPONSE_Set_Cookie}" pattern="; HttpOnly" negate="true" />
       </preCondition>
    </preConditions>
  </outboundRules>
</rewrite>
```

Described here: http://forums.iis.net/post/1963706.aspx

-----------------

If you have more vulnerabilities to report, please contact Netwrix technical support: https://www.netwrix.com/support.html
