---
title: "OAuth 2.0 Authentication Overview"
description: "OAuth 2.0 Authentication Overview"
sidebar_position: 10
slug: /configuration/fileservers/netappcmode/oauth2/overview
---

# OAuth 2.0 Authentication Overview

Netwrix Auditor can authenticate to NetApp ONTAP REST API using OAuth 2.0 / Modern Authentication
instead of an AD user or group account. If your organization requires Modern Authentication and
does not allow basic authentication for service accounts (for example, when Okta or AD FS is
enforced), you can configure Netwrix Auditor to obtain a short-lived access token from your
Identity Provider (IdP) and present it to ONTAP, instead of storing a domain account password.

With OAuth 2.0, Netwrix Auditor (the client) authenticates itself to your IdP using a Client
ID/Client Secret pair and receives a short-lived access token (a client credentials grant — there
is no interactive user in this flow). Netwrix Auditor then presents this token to ONTAP REST API in
the `Authorization: Bearer <token>` header on every request. No account password is stored in
Netwrix Auditor, and access can be revoked centrally at the IdP.

For more details see [The OAuth 2.0 Authorization Framework](https://www.rfc-editor.org/info/rfc6749)

## Limitations

1. OAuth 2.0 for NetApp audit has been tested with the following IdP:
  - AD FS (Federation Services)
  - Okta
2. OAuth 2.0 can only be used with the ONTAP REST API.
3. This section only applies to NetApp ONTAP version 9.14.1 and higher.

For more details see [Overview of the ONTAP OAuth 2.0 implementation](https://docs.netapp.com/us-en/ontap/authentication/overview-oauth2.html)


## Related Topics

- [Configure OAuth 2.0 on the ONTAP](/docs/auditor/10.9/configuration/fileservers/netappcmode/oauth2/ontap.md)
- [Configure AD FS](/docs/auditor/10.9/configuration/fileservers/netappcmode/oauth2/adfs.md)
- [Configure Okta](/docs/auditor/10.9/configuration/fileservers/netappcmode/oauth2/okta.md)
- [Overview of the ONTAP OAuth 2.0 implementation](https://docs.netapp.com/us-en/ontap/authentication/overview-oauth2.html)
- [OAuth 2.0 deployment scenarios](https://docs.netapp.com/us-en/ontap/authentication/oauth2-deployment-scenarios.html)
- [Prepare to deploy OAuth 2.0](https://docs.netapp.com/us-en/ontap/authentication/oauth2-prepare.html)
- [The OAuth 2.0 Authorization Framework](https://www.rfc-editor.org/info/rfc6749)
