---
title: "Post Data"
description: "Post Data"
sidebar_position: 90
---

# Post Data

While running requests to Netwrix Auditor Integration API endpoints, you will need to post data,
e.g., a Continuation mark in order to continue retrieving Activity Records, Search parameters to
find Activity Records matching your search, or Activity Records you want to feed to the Audit
Database. Data is sent in the request body and must be formatted according to XML convention and
compatible with Netwrix-provided XSD schemas.

In Netwrix Auditor 9.0, Netwrix has updated API schemas. Make sure to check and update your custom
scripts and add-ons. [Compatibility Notice](/docs/auditor/10.7/api/compatibility.md)

The file must be formatted in accordance with XML standard. The following symbols must be replaced
with corresponding XML entities: & (ampersand), " (double quotes), ' (single quotes), < (less than),
and > (greater than) symbols.

| Symbol                        | XML entity                                   |
| ----------------------------- | -------------------------------------------- |
| & e.g., Ally & Sons           | &amp; e.g., Ally &amp; Sons                  |
| " e.g., Domain1\Users\"Stars" | &quot; e.g., Domain1\Users\&quot;Stars&quot; |
| ' e.g., Domain1\Users\O'Hara  | &apos; e.g., Domain1\Users\O&apos;Hara       |
| < e.g., CompanyDC`<100`       | &lt; e.g., CompanyDC&lt;100                  |
| > e.g., ID>500                | &gt; e.g., ID&gt;500                         |

Also, Netwrix allows transferring data in JSON format (organized as name and value pairs). JSON file
must be formatted in accordance with JSON specification. Special characters in JSON strings must be
preceded with the \ character: " (double quotes), / (slash), \ (backslash). E.g.,
"\\local\\enterprise\\Users\\Jason Smith". Trailing comma is not supported.

Review the following for additional information:

- [Continuation Mark](/docs/auditor/10.7/api/postdata/continuationmark.md)
- [Search Parameters](/docs/auditor/10.7/api/postdata/searchparameters.md)
- [Activity Records](/docs/auditor/10.7/api/postdata/activityrecords.md)
