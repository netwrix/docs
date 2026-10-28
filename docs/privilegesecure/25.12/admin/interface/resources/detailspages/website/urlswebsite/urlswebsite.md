---
title: "URLs Tab for Website"
description: "Reference for the URLs tab on the Website Details page, including URL actions and match types."
keywords:
  - website URLs
  - Match Type
  - Add Website URL
  - Starts With
  - regex
  - FQDN
sidebar_position: 10
---

# URLs Tab for Website

The URLs tab shows information about the URLs associated to the selected resource. For example:
`https://company.lightning.force.com` and `https://salesforce.com` are both URLs associated to the
same website.

![URLs tab for Website Resource](/images/privilegesecure/25.12/accessmanagement/admin/policy/tab/resources/websitedetailsurlstab.webp)

The URLs tab has the following features:

- **Search** — Searches the table or list for matches to the search string. When the search finds matches, the
  table or list shows only the matching results.
- **Add** — Opens the Add Website URL window. See the
  [Add Website URL Window](/docs/privilegesecure/25.12/admin/interface/resources/detailspages/website/urlswebsite/addwebsiteurl.md) topic for additional
  information.
- **Edit** — Opens the Edit Website URL window. See Edit Website URL for additional information.
- **Remove** — Removes the selected item
- **Refresh** — Reload the information displayed

The table has the following columns:

- **Checkbox** — Check to select one or more items
- **URL** — Displays the URL or string
- **Match Type** — Indicates the match parameter for the URL:
  - **Domain** — Matches on the domain name
  - **Exact** — Matches only if the URL is an exact match
  - **Never** — Never matches the URL
  - **Starts With** — Matches only when the URL starts with the value
  - **Regex** — Matches on the valid regex string
  - **Host** — Matches on the host name (FQDN)

You can resize the table columns and sort them in ascending or descending order.
