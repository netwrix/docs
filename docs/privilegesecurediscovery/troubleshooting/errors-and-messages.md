---
title: "Errors and messages"
description: "Find the article that explains an error or message in Privilege Secure for Discovery by searching for its exact text."
sidebar_position: 10
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm that each knowledge base article in this list still applies at 26.09.1. Evidence: none; the articles date from 2023 to 2024.
:::

Use this page to find the article for an error or message that you see in the web UI, in the Access History, or in an API response. Each link text is the exact text of the error. For errors that don't have their own article, see [Common UI errors](./common-ui-errors.md).

## Sign-in and authentication

- [Invalid Token](/docs/kb/privilegesecurediscovery/authentication-and-access/unable-to-login-to-ui-due-to-invalid-token-error): The Google Authenticator token is incorrect or out of sync.
- [SAML assertion not yet valid](../configuration/authentication-and-sso/saml-sso-reference.md#fix-saml-assertion-not-yet-valid): Single sign-on fails because the clocks of the identity provider and the product host differ.
- [Password Expired](/docs/kb/privilegesecurediscovery/authentication-and-access/managing-password-expired): The Active Directory account that the product uses to bind to the domain controller has an expired password.
- [Invalid Request](/docs/kb/privilegesecurediscovery/troubleshooting-and-errors/error-file-copies-freezes-at-start-of-copy): The web UI sign-in fails and file copies stop at the start of the copy.

## Scanning and access requests

- [4Domain only applies with name](/docs/kb/privilegesecurediscovery/troubleshooting-and-errors/error-4domain-only-applies-with-name): An error on the **Grant Access** page caused by an invalid local group member.
- [9999 Mismatch in service account username when attempting to rotate service password](/docs/kb/privilegesecurediscovery/troubleshooting-and-errors/error-9999-mismatch-in-service-account-username-when-attempting-to-rotate-service-password): An error during a scan of an endpoint.
- ['module' object has no attribute 'MODE_CCM'](/docs/kb/privilegesecurediscovery/troubleshooting-and-errors/error-module-object-has-no-attribute-mode-ccm): An error in the Access History or during a rescan, caused by Server Message Block (SMB) encryption.
- [Offline Access Management (OAM) alternate administrator account is locked and the local Administrator (RID 500) account is disabled](/docs/kb/privilegesecurediscovery/troubleshooting-and-errors/error-offline-access-management-oam-alternate-administrator-account-is-locked-and-the-local-administ): The system left the domain or lost trust.

## Linux registration

For an overview of the registration errors, see [Troubleshooting Linux registration](/docs/kb/privilegesecurediscovery/linux-and-ssh-integration/troubleshooting-linux-registration).

- [Invalid SSH Credentials Authentication Failed](/docs/kb/privilegesecurediscovery/linux-and-ssh-integration/error-invalid-ssh-credentials-authentication-failed): Registration fails because of the registration account or the sudoers configuration.
- [Unhandled error: MODULE FAILURE See stdout/stderr for the exact error](/docs/kb/privilegesecurediscovery/linux-and-ssh-integration/unhandled-error-module-failure): An error with code 1779 when you scan or register a Linux system.
- [SSH connection error: encountered RSA key, expected OPENSSH key](/docs/kb/privilegesecurediscovery/linux-and-ssh-integration/unprocessableentityerror-ssh-connection-error-encountered-rsa-key-expected-openssh-key): An `UnprocessableEntityError` during registration.
- [Missing Result for Task checkAdminPrivilege. Code: 9999](/docs/kb/privilegesecurediscovery/linux-and-ssh-integration/unprocessableentityerror-missing-result-for-task-checkadminprivilege-code-9999): An `UnprocessableEntityError` when you register a rebuilt system.
- ['ascii' codec can't encode character](/docs/kb/privilegesecurediscovery/linux-and-ssh-integration/unhandled-error-there-has-been-an-error-processing-the-registration-request-ascii-codec-can-t-encode): A registration error caused by a non-ASCII character in the sudoers file.

## Errors in this documentation

[Common UI errors](./common-ui-errors.md) explains the following errors:

- `rpc_s_access_denied`
- 403 Error: Forbidden from viewing this resource
- Failed to Connect with Credentials
- `STATUS_NONE_MAPPED`
- `STATUS_SPECIAL_ACCOUNT`
- Maximum Attempts Exceeded
- Unable to connect to system: Host is offline
- `STATUS_LOGON_FAILURE`, `STATUS_ACCOUNT_LOCKED_OUT`, and `STATUS_LOGON_TYPE_NOT_GRANTED`
- `STATUS_ACCESS_DENIED`
- `STATUS_NOT_SUPPORTED`
- `STATUS_NO_LOGON_SERVERS`
- Connection timed out, connection refused, and no route to host
- `Your configuration is not valid. (ECONNRESET)`
- `Remote script exited with error: see details in log`
- The file doesn't have a header with value "Name"

## Related articles

The following articles explain how a feature or a check works:

- [How Netwrix Privilege Secure for Discovery determines a host is offline](/docs/kb/privilegesecurediscovery/security-and-compliance/how-netwrix-privilege-secure-for-discovery-determines-a-host-is-offline)
- [How to access MongoDB](/docs/kb/privilegesecurediscovery/database-and-backend/how-to-access-mongodb)
