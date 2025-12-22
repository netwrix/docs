---
title: "Add Website URL Window"
description: "Add Website URL Window"
sidebar_position: 10
---

# Add Website URL Window

Follow the steps to add or edit a Website URL used by a resource.

:::note
Only applicable to Microsoft Entra ID and Website resources.
:::


**Step 1 –** Navigate to the **Resources** page.

**Step 2 –** Click the name of the desired resource to open the Resource Details page and select the
**URLs** tab.

**Step 3 –** Do the following:

- To add a new URL, click **Add**.

![addwebsiteurl](/images/privilegesecure/4.2/accessmanagement/admin/policy/window/resources/addwebsiteurl.webp)

**Step 4 –** Enter the following information:

- URL — The URL or string to match
- Match Type — A Match Type is required:

    - Domain — A match will be made on the domain name
    - Exact — A match will only be made if the URL exactly matches
    - Never — Never match the URL
    - StartsWith — Only match if the URL starts with this value
    - Regex — Match based upon valid regex string
    - Host — Match based upon host name (FQDN)

**Step 5 –** Click **Save** to accept changes.

The URL is added to the resource and shown on the URLs tab.
