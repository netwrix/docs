---
title: "URLs Tab for Microsoft Entra ID"
description: "URLs Tab for Microsoft Entra ID"
sidebar_position: 10
---

# URLs Tab for Microsoft Entra ID

The URLs tab for Microsoft Entra ID (formerly Azure AD) shows information about the URLs associated
to the selected resource. URLs are correlated to launching activities in the browser extension. If a
given site is not listed here, the activity login may fail as it is not an authorized site for
login.

![URLs Tab for Entra ID](/images/privilegesecure/4.2/accessmanagement/admin/policy/page/details/azureaddetailspage.webp)

The URLs tab has the following features:

- Add — Opens the Add Website URL window. See the
  [Add Website URL Window](/docs/privilegesecure/4.2/admin/interface/resources/detailspages/website/urlswebsite/addwebsiteurl.md) topic for additional
  information.
- Edit — Opens the Edit Website URL window. See Edit Website URL for additional information.
- Remove — Removes the selected item
- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- URL — Displays the URL or string
- Match Type — Indicates the match parameter for the URL:

    - Domain — Match will be made on the domain name
    - Exact — Match will only be made if the URL is an exact match
    - Never — Match will not be made to URL
    - Starts With — Match is only made when the URL starts with the value
    - Regex — Match will be made on the valid regex string
    - Host — Match will be made on the host name (FQDN)

The table columns can be resized and sorted in ascending or descending order.
