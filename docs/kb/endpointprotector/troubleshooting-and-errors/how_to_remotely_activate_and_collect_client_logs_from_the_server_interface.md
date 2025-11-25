---
description: >-
  This article explains how to remotely enable debug logging on an endpoint machine and collect client logs from the server interface, without requiring input or knowledge from the endpoint user.
keywords:
  - debug logging
  - client logs
  - endpoint management
sidebar_label: Remotely Activate and Collect Client Logs
tags:
  - troubleshooting-and-errors
title: "How to Remotely Activate and Collect Client Logs from the Server Interface"
knowledge_article_id: kA0Qk0000002B2cKAE
products:
  - endpoint-protector
---

# How to Remotely Activate and Collect Client Logs from the Server Interface

## Overview

This article explains how to remotely enable debug logging on an endpoint machine and collect client logs from the server interface, without requiring input or knowledge from the endpoint user.

## Instructions

1. In the **Endpoint Protector Console**, navigate to **Device Control > Computers**, then select the target computer and click **Manage Settings**.  
   ![Manage Settings in Device Control > Computers](./../0-images/servlet_image_8cfbf5692849.png)

2. Scroll down to **Debug Logging**, then click the **Set Log Level** drop-down menu and select **Debug**.  
   ![Set Log Level to Debug](./../0-images/servlet_image_5840481544b9.png)

3. After selecting **Debug**, click **Save** and wait for the green notification confirming that the changes have been saved.  
   ![Changes have been saved notification](./../0-images/servlet_image_baa2795f8fd3.png)

4. On the computer, refresh the policies and reproduce the issue.

5. Return to the computer listed under **Device Control > Computers** and click **Collect diagnostics**.  
   ![Collect diagnostics option](./../0-images/servlet_image_60b30f91932d.png)  
   ![Diagnostics collection in progress](./../0-images/servlet_image_96e38073d295.png)

6. Logs will be sent to the server under **Reports and Analysis > Logs Report**.  
   ![Logs Report section](./../0-images/servlet_image_9aa4123f77f5.png)

7. Navigate to **Reports and Analysis > Logs Report**.

8. Expand the filters. Click the **Event** drop-down menu, then select **Artifact Received** and click **Apply**.  
   ![Filter for Artifact Received event](./../0-images/servlet_image_3f1c3b331cfe.png)

9. Under the events, the uploaded artifact or client logs will be listed and available for download by the system administrator.  
   > **NOTE:** The artifact may not be available for immediate download and may display a "File not found" error. It can take 20–30 minutes before the file is ready to download."
   ![Artifact or client logs available for download](./../0-images/servlet_image_823648e31f8f.png)

10. Once the client logs are downloaded, submit them to the support team as needed.