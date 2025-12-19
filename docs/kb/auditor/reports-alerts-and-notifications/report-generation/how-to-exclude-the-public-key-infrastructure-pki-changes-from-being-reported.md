---
description: >-
  Shows how to exclude Public Key Infrastructure (PKI) attribute changes from
  Netwrix Auditor reports by adding entries to the omitproplist.txt file in the
  product installation directory.
keywords:
  - PKI
  - Public Key Infrastructure
  - omitproplist
  - Netwrix Auditor
  - ms-PKI
  - exclude
  - reporting
  - audit
  - attributes
products:
  - auditor
sidebar_label: How to exclude the Public Key Infrastructure (PKI)
tags: []
title: "How to exclude the Public Key Infrastructure (PKI) changes from being reported?"
knowledge_article_id: kA00g000000H9YSCA0
---

# How to exclude the Public Key Infrastructure (PKI) changes from being reported?

For example:

- [ms-PKI-AccountCredentials](http://msdn.microsoft.com/en-us/library/windows/desktop/ms678097(v=vs.85).aspx)
- [ms-PKI-Certificate-Application-Policy](http://msdn.microsoft.com/en-us/library/windows/desktop/ms678100(v=vs.85).aspx)
- [ms-PKI-Certificate-Name-Flag](http://msdn.microsoft.com/en-us/library/windows/desktop/ms678101(v=vs.85).aspx)
- [ms-PKI-Certificate-Policy](http://msdn.microsoft.com/en-us/library/windows/desktop/ms678102(v=vs.85).aspx)
- [ms-PKI-Cert-Template-OID](http://msdn.microsoft.com/en-us/library/windows/desktop/ms678103(v=vs.85).aspx)
- [ms-PKI-Credential-Roaming-Tokens](http://msdn.microsoft.com/en-us/library/windows/desktop/hh339659(v=vs.85).aspx)
- [ms-PKI-DPAPIMasterKeys](http://msdn.microsoft.com/en-us/library/windows/desktop/ms678098(v=vs.85).aspx)
- [ms-PKI-Enrollment-Flag](http://msdn.microsoft.com/en-us/library/windows/desktop/ms678104(v=vs.85).aspx)
- [ms-PKI-Enrollment-Servers](http://msdn.microsoft.com/en-us/library/windows/desktop/hh339660(v=vs.85).aspx)
- [ms-PKI-Minimal-Key-Size](http://msdn.microsoft.com/en-us/library/windows/desktop/ms678105(v=vs.85).aspx)
- [ms-PKI-OID-Attribute](http://msdn.microsoft.com/en-us/library/windows/desktop/ms678107(v=vs.85).aspx)
- [ms-PKI-OID-CPS](http://msdn.microsoft.com/en-us/library/windows/desktop/ms678108(v=vs.85).aspx)
- [ms-PKI-OID-LocalizedName](http://msdn.microsoft.com/en-us/library/windows/desktop/ms678106(v=vs.85).aspx)
- [ms-PKI-OID-User-Notice](http://msdn.microsoft.com/en-us/library/windows/desktop/ms678109(v=vs.85).aspx)
- [ms-PKI-Private-Key-Flag](http://msdn.microsoft.com/en-us/library/windows/desktop/ms678110(v=vs.85).aspx)
- [ms-PKI-RA-Application-Policies](http://msdn.microsoft.com/en-us/library/windows/desktop/ms678112(v=vs.85).aspx)
- [ms-PKI-RA-Policies](http://msdn.microsoft.com/en-us/library/windows/desktop/ms678113(v=vs.85).aspx)
- [ms-PKI-RA-Signature](http://msdn.microsoft.com/en-us/library/windows/desktop/ms678114(v=vs.85).aspx)
- [ms-PKI-RoamingTimeStamp](http://msdn.microsoft.com/en-us/library/windows/desktop/ms678099(v=vs.85).aspx)
- [ms-PKI-Site-Name](http://msdn.microsoft.com/en-us/library/windows/desktop/hh339661(v=vs.85).aspx)
- [ms-PKI-Supersede-Templates](http://msdn.microsoft.com/en-us/library/windows/desktop/ms678115(v=vs.85).aspx)
- [ms-PKI-Template-Minor-Revision](http://msdn.microsoft.com/en-us/library/windows/desktop/ms678116(v=vs.85).aspx)
- [ms-PKI-Template-Schema-Version](http://msdn.microsoft.com/en-us/library/windows/desktop/ms678117(v=vs.85).aspx)

---

In order to exclude changes to these attributes from being reported, do the following:

1. Navigate to the Netwrix Auditor installation directory.
2. Add the following lines to the **omitproplist.txt** file:

```
*.msPKIAccountCredentials
*.msPKIDPAPIMasterKeys
*.msPKIRoamingTimeStamp

etc..
```
