---
description: >-
  Learn how to enable and install the ActiveX Control required to print
  SSRS-based reports from Internet Explorer and Netwrix Auditor Client.
keywords:
  - SSRS
  - ActiveX
  - Internet Explorer
  - Netwrix Auditor
  - Report Viewer
  - printing
  - ActiveX Control
products:
  - auditor
sidebar_label: How to prepare for printing SSRS-based reports
tags: []
title: "How to prepare for printing SSRS-based reports"
knowledge_article_id: kA04u0000000GsCCAU
---

# How to prepare for printing SSRS-based reports

To print SSRS-based reports, SSRS Report Viewer and Netwrix Auditor Client require ActiveX Control to be installed and enabled on the local machine.

- To install the control, make sure you have administrative rights on the local computer.
- Recommended browser version is Internet Explorer 8 or later.

Take the following steps:

1. Open the Internet Explorer **Tools** menu by clicking the gear icon in the top-right corner.
2. Select **Internet Options**.
3. Go to the **Security** tab and click **Custom level…**
4. Locate the ActiveX controls and plug-ins section.
5. Select **Enable** or **Prompt** for each of the following three settings:
   - **Run ActiveX controls and plug-ins**
   - **Script ActiveX controls marked safe for scripting**
   - **Download signed ActiveX controls**

![User-added image]./../0-images/ka04u000000HcZ6_0EM4u000002P6Cl.png)

6. Click **OK**.
7. Open any SSRS-based report using Internet Explorer and click **Print**.
8. Internet Explorer will prompt for installation of the additional components it needs for printing. Click **Yes**. The ActiveX Control automatically downloads and installs.

Then you will be able to print the reports from Internet Explorer and Netwrix Auditor UI.

