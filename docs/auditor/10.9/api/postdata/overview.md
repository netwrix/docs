---
title: "Post Data"
description: "Post Data"
sidebar_position: 90
---

# Post Data

While running requests to Netwrix Auditor Integration API endpoints, you will need to post data,
e.g., a Continuation mark to continue retrieving Activity Records, Search parameters to
find Activity Records matching your search, or Activity Records you want to feed to the Audit
Database. You send data in the request body, which must be formatted according to XML convention
and be compatible with Netwrix-provided XSD schemas.

In Netwrix Auditor 9.0, Netwrix has updated API schemas. Check and update your custom
scripts and add-ons. [Compatibility Notice](/docs/auditor/10.9/api/compatibility.md)

The file must be formatted according to the XML standard. Replace the following symbols with the
corresponding XML entities: & (ampersand), " (double quotes), ' (single quotes), < (less than), and
> (greater than).

| Symbol                        | XML entity                                   |
| ----------------------------- | -------------------------------------------- |
| & e.g., Ally & Sons           | &amp; e.g., Ally &amp; Sons                  |
| " e.g., Domain1\Users\"Stars" | &quot; e.g., Domain1\Users\&quot;Stars&quot; |
| ' e.g., Domain1\Users\O'Hara  | &apos; e.g., Domain1\Users\O&apos;Hara       |
| < e.g., CompanyDC`<100`       | &lt; e.g., CompanyDC&lt;100                  |
| > e.g., ID>500                | &gt; e.g., ID&gt;500                         |

Also, Netwrix allows transferring data in JSON format (organized as name and value pairs). The JSON
file must be formatted according to the JSON specification. Precede special characters in JSON
strings with the \ character: " (double quotes), / (slash), \ (backslash). For example,
"\\local\\enterprise\\Users\\Jason Smith". Trailing comma isn't supported.

Review the following for additional information:

- [Continuation Mark](/docs/auditor/10.9/api/postdata/continuationmark.md)
- [Search Parameters](/docs/auditor/10.9/api/postdata/searchparameters.md)
- [Activity Records](/docs/auditor/10.9/api/postdata/activityrecords.md)
