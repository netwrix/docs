---
description: >-
  This article provides step-by-step instructions for setting up a secure connection between Netwrix Auditor and SQL Server Reporting Services (SSRS) using SSL/TLS.
keywords:
  - Netwrix Auditor
  - SSRS
  - SSL
  - TLS
  - secure connection
sidebar_label: Set Up Secure Connection
tags: []
title: "Set Up Secure Connection Between Auditor and SSRS via SSL/TLS Channel"
knowledge_article_id: kA00g000000PblFCAS
products:
  - auditor
---

# Set Up Secure Connection Between Auditor and SSRS via SSL/TLS Channel

## Overview

Netwrix Auditor uses SQL Server Reporting Services (SSRS) to generate reports. In environments with Auditor and SSRS installed on different servers, it is recommended to use a secure communication channel. To ensure secure communication, you can set it up via HTTPS using SSL or TLS protocol. This will encrypt your data communicated between your SSRS server and Netwrix Auditor.

## Instructions

> **IMPORTANT:** Every certificate has a validity period. Auditor will stop generating reports once your certificate expires. If your self-signed certificate has expired, it will be reissued upon a reboot.

### Configure SSRS to Use the Secure Channel

1. Open **Report Server Configuration Manager**, specify the **Server Name** and **Report Server Instance**, and click **Connect**.
2. In the left pane, select **Web Service URL**.
3. In the **HTTPS Certificate** dropdown list, select the certificate you installed previously. Both **HTTPS Port** and **Report Server Web Services URL** fields will fill in automatically.

   > **NOTE:** For additional information on installing and using self-signed and authority-issued certificates, refer to the following articles: [Use Certificate Authority-issued Certificates in SSRS](/docs/kb/auditor/troubleshooting-and-errors/ssl-tls-certificate-issues/use-certificate-authority-issued-certificates-in-ssrs), [Generate Self-signed SSL Certificate for SSRS](/docs/kb/auditor/troubleshooting-and-errors/ssl-tls-certificate-issues/generate-self-signed-ssl-certificate-for-ssrs).

4. Click **Apply**.
5. Select the **Web Portal URL** tab in the left pane—the **Virtual Directory** field should fill in automatically.
6. In the **Web Portal URL** tab, click **Advanced**. Click **Add** under the **Multiple HTTPS Identities** section.
7. In the new pop-up window, select the **(All IPv4)** value in the **IP Address** field, specify the port (**443** by default for HTTPS), and select the certificate issued. Click **OK**.
8. Click **Add** under the **Multiple HTTPS Identities** section and create an additional HTTPS identity for the **(All IPv6)** IP address. Specify the port (**443** by default for HTTPS) and select the certificate issued. Click **OK** > **OK** > **Apply**.

### Testing Connection With Auditor Server

Refer to the following steps to test the connection via a secure channel:

1. Launch a browser on your Auditor server and open the SSRS Web Portal URL. You can copy the target URL from the **Web Portal URL** tab in Report Server Configuration Manager.

   > **NOTE:** Verify the URL has the `https` prefix.

2. Input the credentials to connect to the Web Portal. Use the account that has sufficient access rights for the SSRS portal.
3. The SSRS portal should open without any additional messages. If so, the certificate was published correctly.

### Configure Auditor to Use SSL to Communicate With the SSRS Server

Refer to the following steps to use SSL in Auditor and SSRS communication:

1. In Report Server Configuration Manager, locate **Web Service URL** and **Web Portal URL** tabs. Review the lists of URLs and copy the latest values added—these should have the `https` prefix and the `443` port (depending on the HTTPS port used).
2. In the main Auditor menu, select **Settings** > **Audit Database**.
3. Click **Modify** under the **Audit Database Settings** section. Alternatively, click **Configure** if you are configuring the audit database settings for the first time.
4. Fill in, review, and verify the **Default SQL Server Settings** fields. Click **Next**. In the **SQL Server Reporting Services Settings** window, update the URL values. Specify the new **Web Portal URL** value in the **Report Manager URL** field. Specify the **Web Service URL** in the **Report Server URL** as mentioned in step #1.
5. Click **Finish** to save changes.

The traffic between Auditor and SSRS is now encrypted. It is recommended to update the SQL Server password used to access the default SQL Server instance.

## Related Articles

- [Use Certificate Authority-issued Certificates in SSRS](/docs/kb/auditor/troubleshooting-and-errors/ssl-tls-certificate-issues/use-certificate-authority-issued-certificates-in-ssrs)
- [Generate Self-signed SSL Certificate for SSRS](/docs/kb/auditor/troubleshooting-and-errors/ssl-tls-certificate-issues/generate-self-signed-ssl-certificate-for-ssrs)