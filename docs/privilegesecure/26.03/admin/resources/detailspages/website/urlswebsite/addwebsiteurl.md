---
title: "Add Website URL Window"
description: "Add or edit a website URL and its match type for a Microsoft Entra ID or Website resource."
sidebar_position: 10
---

# Add Website URL Window

To add or edit a Website URL used by a resource.

:::note
Only applicable to Microsoft Entra ID and Website resources.
:::

1. Navigate to the **Resources** page.
2. Click the name of the resource you want to open the Resource Details page and select the
   **URLs** tab.
3. Do the following:

   - To add a new URL, click **Add**.

   ![Add Website URL window with URL and match type fields](/images/privilegesecure/26.03/accessmanagement/admin/policy/window/resources/addwebsiteurl.webp)

4. Enter the following information:

   - **URL** — The URL or string to match
   - **Match Type** — A Match Type is required:
     - **Domain** — A match is made on the domain name
     - **Exact** — A match will only be made if the URL exactly matches
     - **Never** — Never match the URL
     - **StartsWith** — Only match if the URL starts with this value
     - **Regex** — Match based upon valid regex string
     - **Host** — Match based upon host name (FQDN)

5. Click **Save** to accept changes.

The URL is added to the resource and shown on the URLs tab.
