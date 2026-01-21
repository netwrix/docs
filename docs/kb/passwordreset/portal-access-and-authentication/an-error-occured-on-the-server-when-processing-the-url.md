---
description: >-
  Users browsing the Netwrix Password Reset self-service portal may see "An
  error occurred on the server when processing the URL". This article explains
  common causes and how to enable detailed IIS error messages to identify the
  exact error code.
keywords:
  - error
  - self-service portal
  - Netwrix Password Reset
  - IIS
  - send errors to browser
  - user-friendly errors
  - Firefox
  - Chrome
  - troubleshooting
products:
  - general
sidebar_label: An error occured on the server when processing the
tags: []
title: "An error occured on the server when processing the URL"
knowledge_article_id: kA00g000000H9aXCAS
---

# An error occured on the server when processing the URL

When a user tries to browse to the self-service portal they receive an error message that an error occurred on the server when processing the URL.

![User-added image](../0-images/ka04u00000116cx_0EM700000005ODC.png)

---

The message is just a user-friendly screen indicating that something went wrong.

The most common reason is access permission issues. For example, if some files are unable to be read from disk.

---

## Resolution

1. Make sure that the Netwrix Password Reset service account is assigned local administrator permissions on the server.

2. If this does not help, turn on IIS error codes to be sent to the browser, disable user-friendly error messages, and review the exact error code.

## Configure sending of errors to browsers

1. Run IIS, and select the web site that Netwrix Password Reset is installed to.

   ![User-added image](../0-images/ka04u00000116cx_0EM700000005ODW.png)

2. Select the **ASP** feature in the central pane.

3. Expand **Debugging Properties** and set **Send errors to browser** to **True**.

   ![User-added image](../0-images/ka04u00000116cx_0EM700000005ODb.png)

## Disable user-friendly errors in Internet Explorer

Open the Microsoft TechNet article:
http://technet.microsoft.com/en-us/library/cc778248(v=ws.10).aspx

## Disable user-friendly errors in Firefox

1. Open a new tab (CTRL+T) or window (CTRL+N).
2. Type in the address bar: `about:config`.
3. In the filter bar type: `error` and press Enter.
4. Now set the value of the `browser.xul.error_pages.enabled` to `true`.
5. Restart Firefox.

## Notes about Chrome

Chrome automatically maintains friendly errors, and disables them for error messages bigger than 512 bytes in size. It is recommended to use Internet Explorer to view the error code.
