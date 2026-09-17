---
title: "Configure ONTAP"
description: "Configure OAuth 2.0 on the ONTAP"
sidebar_position: 20
slug: /configuration/fileservers/netappcmode/oauth2/ontap
---

# Configure OAuth 2.0 on the ONTAP

Netwrix Auditor requires OAuth 2.0 to be enabled and configured on the ONTAP cluster before you
configure the authentication provider (AD FS, Okta, or Microsoft Entra ID). 

**Step 1 –** Enable OAuth 2.0 globally on the cluster:
```
security oauth2 modify -enabled true
```

**Step 2 –** Determine the Management SVM name
```
vserver show -type admin
```

**Step 3 –** Install the IdP root CA certificate or self-signed certificate

**NOTE:** This is not requered if Okta uses as IdP.

```
security certificate install -type server-ca -vserver <admin-svm>
```
where `<admin-svm>` is vserver name obtained on 'Step 2'

Paste the PEM block (`-----BEGIN CERTIFICATE-----...-----END CERTIFICATE-----`) when prompted
and press 'Enter'

**NOTE:** If your CA uses a two-tier hierarchy (offline root + issuing CA), install both
certificates, starting with the root.


**Step 4 –** Disable client certificate authentification
```
security ssl modify -client-enabled false -vserver <admin-svm>
```
where `<admin-svm>` is vserver name obtained on 'Step 2'


**Step 5 –** Create the ONTAP Rest API role using vserver name obtained on 'Step 2'
To create a role, please refer to [Configure Role](/docs/auditor/10.9/configuration/fileservers/netappcmode/apirole.md).


**Step 6 –** Verify the configuration:
```
security oauth2 show
```
```
security oauth2 client show
```
```
security ssl show -fields vserver,server-enabled ,client-enabled
```
```
security certificate show -type server-ca -vserver <admin-svm>
```


## Related Topics

- [Configure AD FS](/docs/auditor/10.9/configuration/fileservers/netappcmode/oauth2/adfs.md)
- [Configure Okta](/docs/auditor/10.9/configuration/fileservers/netappcmode/oauth2/okta.md)
- [Configure Role](/docs/auditor/10.9/configuration/fileservers/netappcmode/apirole.md)
- [security oauth2 client create — CLI reference](https://docs.netapp.com/us-en/ontap-cli/security-oauth2-client-create.html)
- [OAuth 2.0 deployment scenarios](https://docs.netapp.com/us-en/ontap/authentication/oauth2-deployment-scenarios.html#summary-of-the-configuration-parameters)
