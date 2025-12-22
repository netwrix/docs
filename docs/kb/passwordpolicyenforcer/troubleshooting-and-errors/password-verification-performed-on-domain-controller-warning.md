---
description: >-
  Explains the event log warning about password verification being performed on
  a domain controller when Compromised Password Checker is enabled, and shows
  how to verify or install the Netwrix Password Policy Enforcer Mailer and the
  domain controller FQDN.
keywords:
  - compromised password checker
  - domain controller
  - PPE Mailer
  - Password Policy Enforcer
  - event log warning
  - FQDN
  - mailer service
  - troubleshooting
products:
  - password-policy-enforcer
sidebar_label: Password Verification Performed on Domain Controll
tags: []
title: "Password Verification Performed on Domain Controller Warning"
knowledge_article_id: kA0Qk0000000I3NKAU
---

# Password Verification Performed on Domain Controller Warning

## Symptom

After you enable Compromised Password Checker, you see the following warning in the Netwrix Password Policy Enforcer event log:

```
Password verification will be performed on the domain controller %DC_FQDN%.
```

## Causes

- The Password Policy Enforcer Mailer service is not installed.
- The fully qualified domain name (FQDN) of the domain controller the Password Policy Enforcer Mailer service is installed on is incorrect.

## Resolutions

- Netwrix Password Policy Enforcer Mailer is required for Compromised Password Checker to operate. If it was not installed previously, refer to the following article for additional information on installation: Administration − Mailer ⸱ v10.2: https://docs.netwrix.com/docs/passwordpolicyenforcer/11_0

- Review the FQDN of the domain controller the Netwrix Password Policy Enforcer Mailer was installed to:

  1. In the main Password Policy Server window, click **Compromised Password Checker**.
  2. In the **General** tab, review the **Domain Controller** field − make sure the (FQDN) of the domain controller the Netwrix Password Policy Enforcer Mailer service is installed on is correct.
