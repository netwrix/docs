---
description: >-
  Learn how to enable and configure Failed Request Tracing in IIS to
  troubleshoot HTTP errors for Netwrix Access Information Center (AIC) versions
  11.5 and earlier.
keywords:
  - AIC
  - IIS
  - Failed Request Tracing
  - HTTP error
  - 500.19
  - 403.14
  - tracing
  - logs
  - Netwrix
products:
  - access-analyzer
  - access_info_center
sidebar_label: Troubleshoot HTTP AIC Errors
tags:
  - troubleshooting-and-errors
title: "Troubleshoot HTTP AIC Errors"
knowledge_article_id: kA0Qk0000000Ky1KAE
---

# Troubleshoot HTTP AIC Errors

## Question

What are the recommended steps to troubleshoot IIS-related errors in Netwrix Access Information Center?

## Answer

**IMPORTANT:** The steps provided are applicable only to Access Information Center v11.5 and older. Starting v11.6, the steps no longer apply as IIS is no longer used to host the AIC web site.

It is recommended to enable Failed Request Tracing for the AIC web site:

1. **Optional:** If the Failed Request Tracing feature is not installed on your IIS server, you can either download it from the Microsoft Download Center, or run the following line in elevated PowerShell:

   ```
   Install-WindowsFeature -Name Web-Http-Tracing
   ```

   You can download Failed Request Tracing in Microsoft Application Request Routing 3.0 (x64): https://www.microsoft.com/en-us/download/details.aspx?id=47333

2. Open Internet Information Services Manager. In the left pane, open **%IIS_server%** > **Sites** > **AIC web site**.

3. In the right pane, click **Failed Request Tracing...** under the **Configure** section.

4. Check the **Enable** checkbox, and click **OK** to save changes.

   **NOTE:** Take note of the path specified to access the logs later.

5. In the **IIS** section of the **Home** page, open **Failed Request Tracing Rules**.

6. In the right pane, select **Add...** under **Actions**.

7. In the **Specify Content to Trace** window, select **All content (*)** and click **Next**.

8. In the **Define Trace Conditions** window, check the **Status code(s)** field checkbox and specify the relevant error code. Click **Next**.

9. Click **Finish** to configure the tracing rule.

To review trace logs, you can either refer to the path previously specified in the **Failed Request Tracing** settings, or click **View Trace Logs** in the right pane of the **Failed Request Tracing Rules** menu. Learn more about IIS errors and error codes in official Microsoft Documentation at:

- HTTP Error 500.19 · Microsoft: https://learn.microsoft.com/en-us/troubleshoot/developer/webapps/iis/health-diagnostic-performance/http-error-500-19-webpage
- HTTP Error 403.14 · Microsoft: https://learn.microsoft.com/en-us/troubleshoot/developer/webapps/iis/health-diagnostic-performance/http-403-14-forbidden-webpage

The Microsoft articles describe IIS errors (e.g., `500.19`, `501`, `405.0`, `403.16`, etc.).

## Related articles

- Microsoft Application Request Routing 3.0 (x64) · Microsoft: https://www.microsoft.com/en-us/download/details.aspx?id=47333
- HTTP Error 500.19 · Microsoft: https://learn.microsoft.com/en-us/troubleshoot/developer/webapps/iis/health-diagnostic-performance/http-error-500-19-webpage
- HTTP Error 403.14 · Microsoft: https://learn.microsoft.com/en-us/troubleshoot/developer/webapps/iis/health-diagnostic-performance/http-403-14-forbidden-webpage
- Using Failed Request Tracing Rules to Troubleshoot Application Request Routing · Microsoft: https://learn.microsoft.com/en-us/troubleshoot/developer/webapps/iis/health-diagnostic-performance/troubleshoot-arr-using-frt-rules
