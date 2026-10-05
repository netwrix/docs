---
description: >-
  Explains the event log warning about password verification being performed on
  a domain controller when the Password Scanner is enabled, and shows how to
  verify the domain controller FQDN for the Netwrix Password Policy Enforcer
  Mailer.
keywords:
  - password scanner
  - domain controller
  - PPE Mailer
  - Password Policy Enforcer
  - event log warning
  - FQDN
  - mailer service
  - troubleshooting
products:
  - passwordpolicyenforcer
sidebar_label: Password Verification Performed on Domain Controller Warning
tags:
  - kb
  - troubleshooting-and-errors
title: "Password Verification Performed on Domain Controller Warning"
knowledge_article_id: kA0Qk0000000I3NKAU
---

# Password Verification Performed on Domain Controller Warning

## Symptom

After you enable the Password Scanner, you see the following warning in the Netwrix Password Policy Enforcer event log:

```
Password verification will be performed on the domain controller %DC_FQDN%.
```

## Cause

Either of the following can cause this warning:

- The Netwrix Password Policy Enforcer Mailer service is not installed.
- The fully qualified domain name (FQDN) of the domain controller that hosts the Mailer service is incorrect.

## Resolution

The Password Scanner requires the Netwrix Password Policy Enforcer Mailer to operate. Complete the section that matches the cause.

### Install the Mailer Service

Install the Mailer service on one server in the domain:

1. On the server that will host the Mailer service, run the Password Policy Enforcer server installer. The Setup wizard opens.
2. Accept the license agreement, then select **Mailer Service** as the component to install.
3. Click **Install**, then click **Finish** when installation is complete.
4. Enter the hostname or IP address of the server in the **Service** field on the **Mail Service** tab.

For the full procedure, including silent installation, see [Install the Server Components](/docs/passwordpolicyenforcer/12_0/installation/installationserver). For the **Mail Service** tab settings, see [Mail Service](/docs/passwordpolicyenforcer/12_0/admin/settings#mail-service).

### Correct the Domain Controller FQDN

Verify the FQDN of the domain controller that runs the Password Scanner check:

1. In the main Password Policy Server window, click **Password Scanner**, then select the **General** tab.
2. Verify that the **Domain Controller** field contains the FQDN of the domain controller that hosts the Mailer service.
3. If the FQDN is incorrect, enter the correct FQDN, or click **Browse** to select the domain controller.

For all Password Scanner settings, see [Password Scanner](/docs/passwordpolicyenforcer/12_0/admin/compromisedpasswordcheck).

## Related Links

- [Install the Server Components](/docs/passwordpolicyenforcer/12_0/installation/installationserver)
- [Mail Service](/docs/passwordpolicyenforcer/12_0/admin/settings#mail-service)
- [Password Scanner](/docs/passwordpolicyenforcer/12_0/admin/compromisedpasswordcheck)
