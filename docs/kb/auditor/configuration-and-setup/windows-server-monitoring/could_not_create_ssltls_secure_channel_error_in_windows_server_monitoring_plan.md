---
description: >-
  This article addresses the "Could Not Create SSL/TLS Secure Channel" error in Windows Server monitoring plans, detailing symptoms, causes, and resolutions.
keywords:
  - SSL/TLS
  - Windows Server
  - Netwrix Auditor
  - monitoring plans
  - error resolution
sidebar_label: SSL/TLS Secure Channel Error
tags: []
title: "Could Not Create SSL/TLS Secure Channel Error in Windows Server Monitoring Plan"
knowledge_article_id: kA04u000000wnpYCAQ
products:
  - auditor
---

# Could Not Create SSL/TLS Secure Channel Error in Windows Server Monitoring Plan

## Symptoms

- No data is collected in your Windows Server monitoring plans.
- The affected Windows Server monitoring plans have the network traffic compression option enabled.
- The following error is prompted in the Netwrix Auditor Health Log for your Windows Server monitoring plans:

  ```plaintext
  WebException: The request was aborted: Could not create SSL/TLS secure channel.
  ```

## Causes

- TLS 1.2 is disabled in your environment.
- TLS protocol versions used differ in the Windows Server host and compression service.
- The Windows Server Auditing certificate has expired.

## Resolutions

- Enable TLS 1.2 in your environment − refer to the following article for additional information: Connection Issue when TLS 1.2 Is Required.
- In case TLS protocol versions are limited to specific versions in your environment, make sure to allow the operating system to select the protocol for incoming and outgoing communication. Refer to the following article for additional information: [Client and Server Cannot Communicate, Because They Do Not Possess a Common Algorithm](/docs/kb/auditor/troubleshooting-and-errors/data-collection-errors/client-and-server-cannot-communicate-because-they-do-not-possess-a-common-algorithm).
- Review the certificate used for Windows Server auditing:
  1. In the Netwrix Auditor server, either press **Win + R** or launch the **Run** command window.
  2. In the **Run** command window, type `mmc` and press **OK**. Select **Yes** in the following prompt.
  3. In the **Console** window, click **File** > **Add/Remove Snap-in**.
  4. In the left **Available snap-ins** window, select **Certificates**, and click **Add >**.

     > **NOTE:** Once you add the **Certificates** snap-in, the following options should be selected in the prompted pop-up windows: **Computer account** > **Local computer** > **Finish** > **OK**.

  5. In the left pane, expand the **Certificates (Local Computer)** store, and proceed to **Netwrix Auditor for Windows Server** > **Certificates**.
  6. Review the certificate located in the **Certificates** folder. If expired (or multiple certificates are present), right-click the corresponding certificate and select **Delete**.
  7. Restart the server to reissue the certificate.

## Related Articles

- Connection Issue when TLS 1.2 Is Required
- [Client and Server Cannot Communicate, Because They Do Not Possess a Common Algorithm](/docs/kb/auditor/troubleshooting-and-errors/data-collection-errors/client-and-server-cannot-communicate-because-they-do-not-possess-a-common-algorithm)