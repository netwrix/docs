---
title: "Configure ONTAP"
description: "Configure OAuth 2.0 on the ONTAP"
sidebar_position: 20
slug: /configuration/fileservers/netappcmode/oauth2/20ontap
---

# Configure OAuth 2.0 on the ONTAP

Netwrix Auditor requires OAuth 2.0 to be enabled and configured on the ONTAP cluster before you
configure the authentication provider (AD FS, Okta, or Microsoft Entra ID). 

**Step 1 –** Enable OAuth 2.0 globally on the cluster:
```
cluster1::> security oauth2 modify -enabled true
```

**Step 2 –** Install the IdP root CA certificate or self-signed certificate:
```
cluster1::> security certificate install -type server-ca -vserver <admin-svm>
```

Paste the PEM block (`-----BEGIN CERTIFICATE-----...-----END CERTIFICATE-----`) when prompted
and press 'Enter'

**NOTE:** If your CA uses a two-tier hierarchy (offline root + issuing CA), install both
certificates, starting with the root.


**Step 3 –** Determine the Management SVM name
```
vserver show -type admin
```

**Step 4 –** Create the ONTAP Rest API role using vserver name obtained on 'Step 3'
To create a role, please refer to [Configure Role](/docs/auditor/10.9/configuration/fileservers/netappcmode/40apirole.md).


**Step 5 –** Register the authorization server on the cluster (creat provider configuration)

### AD FS
```
security oauth2 client create -config-name adfs -application http -issuer http://<adfs-host>/adfs/services/trust -audience api://netapp -provider-jwks-uri https://<adfs-host>/adfs/discovery/keys -use-local-roles-if-present true -provider adfs -use-mutual-tls none
```

### Okta
```
security oauth2 client create -config-name okta -application http -issuer https://<your-domain>.okta.com/oauth2/default -provider-jwks-uri  https://<your-domain>.okta.com/oauth2/default/v1/keys -use-local-roles-if-present true -provider basic -use-mutual-tls none
```

**Step 6 –** Verify the configuration:

```
cluster1::> security oauth2 show
```
```
cluster1::> security oauth2 client show
```
```
cluster1::> security login show
```
```
cluster1::> security login external-role-mapping show
```

## Related Topics

- [Configure AD FS](/docs/auditor/10.9/configuration/fileservers/netappcmode/70oauth2/30adfs.md)
- [Configure Okta](/docs/auditor/10.9/configuration/fileservers/netappcmode/70oauth2/40okta.md)
- [Configure Role](/docs/auditor/10.9/configuration/fileservers/netappcmode/40apirole.md)
- [security oauth2 client create — CLI reference](https://docs.netapp.com/us-en/ontap-cli/security-oauth2-client-create.html)
- [OAuth 2.0 deployment scenarios](https://docs.netapp.com/us-en/ontap/authentication/oauth2-deployment-scenarios.html#summary-of-the-configuration-parameters)
