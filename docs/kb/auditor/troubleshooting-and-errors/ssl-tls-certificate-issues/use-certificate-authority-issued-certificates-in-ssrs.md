---
description: >-
  Shows how to add a certificate issued by a third-party or internal Certificate
  Authority (CA) to the SSRS server certificate store so Netwrix Auditor and
  SSRS communicate securely across servers.
keywords:
  - SSRS
  - certificate
  - Certificate Authority
  - CA
  - Netwrix Auditor
  - certificate store
  - MMC
  - import certificate
  - secure communication
products:
  - auditor
sidebar_label: Use Certificate Authority-issued Certificates in S
tags: []
title: "Use Certificate Authority-issued Certificates in SSRS"
knowledge_article_id: kA0Qk0000001HQDKA2
---

# Use Certificate Authority-issued Certificates in SSRS

## Overview

Netwrix Auditor uses SQL Server Reporting Services (SSRS) to generate reports. In environments with Netwrix Auditor and SSRS installed on different servers, you should use a secure communication channel. This article covers the steps to implement a certificate issued by a third-party certification authority (CA) or your internal company CA to use in SSRS.

## Instructions

CA provides you with a certificate to add to the certificate store on the SSRS server. Ensure the root certificate of the CA is present in the certificate store. While global CA root certificates are updated automatically using Windows Update, publish the root certificate manually in case your company has its CA:

- Publish the root certificate manually on the Netwrix Auditor server and client servers.
- Publish the root certificate manually on your SSRS server.

Refer to the following steps to publish a root certificate in the certificate store on your SSRS server:

### Using a Certificate From a Third-Party Certificate Authority

CA provides you with a security certificate that should be added to the certificate repository on the SSRS server. Ensure that the root certificate of the CA is present in the certificate store. While global CA root certificates are updated automatically using Windows Update, publish the root certificate manually in case your company has its CA:

1. On your SSRS server, start the Microsoft Management Console (MMC). You can start it by running `MMC` in the **Run** command window.
2. In the top menu bar, select **File** > **Add/Remove Snap-in**.
3. In the left window, select **Certificates** and click **Add** in the middle section.
4. In the pop-up window, select **Computer account** and click **Next**.
5. Select **Local computer** and click **Finish**.
6. Click **OK** to close the pop-up window.
7. Double-click **Certificates (Local Computer)** in the central pane.
8. Right-click the **Personal** folder and select **All Tasks** > **Import**.
9. Follow the Certificate Import Wizard to import your certificate:
   1. Browse the certificate file and enter the associated password when prompted.
   2. If desired, select the **Mark This Key as Exportable** option.
   3. When prompted, choose to automatically place the certificate in the certificate store based on the type of the certificate.
   4. Click **Finish** to close the wizard.
10. Close the MMC console.

You have successfully imported the certificate to the certificate store on your SSRS server.
