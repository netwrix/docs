---
title: "Go-live checklist"
description: "Review the decisions and checks to complete before you move Netwrix Privilege Secure for Discovery from deployment to production use."
sidebar_position: 70
---

Use this checklist to confirm that your organization is ready to protect production systems with Netwrix Privilege Secure for Discovery. The checklist depends on your environment. Treat the items as questions to answer before go-live, and add items that your organization requires.

## Confirm the deployment

Complete these checks on the deployment before you connect it to production systems.

- [ ] The deployment passes the checks in [Verify the deployment](./verify-deployment.md), including `sudo -E bash secureone.sh verify --version <version>`, `sudo docker stack services s1`, and `s1 database-status`.
- [ ] Each node meets the [sizing guidance](../requirements/sizing.md), and you opened the ports in the [ports and firewall rules](../requirements/ports-and-firewall.md).
- [ ] You stored a copy of the `key.txt` encryption key outside the deployment hosts. See [Manage Docker secrets](./docker-secrets.md).
- [ ] You have a plan to back up and recover the database and the encryption key. Netwrix doesn't publish a backup procedure, so use your own tools. See [Protect and recover your deployment](../admin/maintenance/protect-and-recover-your-deployment.md).
- [ ] You know the release you run and how you will upgrade it. See [Deploy Privilege Secure for Discovery with Docker](./deploy.md#upgrade-an-existing-deployment).

## Confirm access to systems

Scan mode and protect mode each use a service account, so confirm that both accounts work on the systems you plan to protect.

- [ ] You added the domain, and its service accounts work. See [Service accounts](../requirements/service-accounts.md).
- [ ] You set NTLM or Kerberos as the Windows authentication method for each domain. For Kerberos, the deployment can reach a domain controller on port 88.
- [ ] The scan account can read the local Administrators group on the systems you plan to protect. Use the scan GPO to grant this. Apply it to servers and workstations, and exclude domain controllers. See [Create a scan GPO for remote SAM access](../configuration/domains-and-ad/scan-gpo-domain-controllers.md).
- [ ] The protect account is a local administrator on the systems you plan to protect. Use a GPO to add it. Apply it to servers and workstations, and exclude domain controllers. See [Add the Protect Mode account to Windows endpoints with a GPO](../configuration/domains-and-ad/protect-mode-account-gpo.md).
- [ ] No GPO conflicts with the product's management of the local Administrators group. See [Avoid conflicts between GPOs and the product](../configuration/domains-and-ad/group-policy-objects.md).
- [ ] Scan mode returns results for the systems you plan to protect, and you reviewed them on the [dashboard](../admin/dashboard.md).
- [ ] For Linux systems, you configured the Linux service account and the sudo access it needs. See [Linux registration prerequisites](../configuration/endpoint-preparation/linux-registration-prerequisites.md).

## Confirm single sign-on and multifactor authentication

- [ ] You tested the standard sign-in for users.
- [ ] You tested each additional sign-in method that you configure, such as SAML single sign-on (SSO), Duo, or RADIUS. See [Okta](../configuration/authentication-and-sso/okta.md), [Duo](../configuration/authentication-and-sso/duo.md), and [RADIUS](../configuration/authentication-and-sso/radius.md).
- [ ] You tested sign-in for users in every domain you added.
- [ ] You know how to reset a user's multifactor authentication token. See [Reset a user's MFA token](../configuration/authentication-and-sso/reset-mfa-tokens.md).
- [ ] Your training documentation includes the sign-in and multifactor authentication steps.

## Confirm SIEM integration

Integration with a security information and event management (SIEM) system isn't required for go-live. If you use one, confirm the following:

- [ ] You configured log forwarding to the SIEM. See [Forward logs to a syslog server or SIEM](../integrations/siem/forward-logs.md).
- [ ] The SIEM receives the logs from Privilege Secure for Discovery.
- [ ] The logs are complete and not truncated.
- [ ] You defined queries for the scenarios that you want to track.

## Plan the server rollout

Servers carry the most risk, so plan them in groups and involve the teams that own them.

- [ ] You identified operation-critical servers and planned to roll them out in a small group with the responsible teams.
- [ ] You identified the service accounts that the servers use. The Quickstart tools can produce a report to review. See [Install the Quickstart tools](../configuration/bulk-onboarding/install-the-quickstart-tools.md).
- [ ] You collected input about service accounts from the server, application, security, network, and infrastructure teams.
- [ ] You defined a process for service accounts that you missed.
- [ ] You set the service accounts to persistent, where required.
- [ ] You divided the servers into rollout groups. Roll out development and test servers first.
- [ ] You tested protect mode on one system before you added more. See [Add a test system to protect mode](../configuration/onboard-systems/add-a-test-system-to-protect-mode.md).
- [ ] You decided whether to roll out one group at a time with freeze mode. See [Freeze mode](../configuration/onboard-systems/freeze-mode.md).
- [ ] You added a user group to Privilege Secure for Discovery and populated it. See [Add users to Privilege Secure for Discovery](../configuration/onboard-systems/add-users-to-privilege-secure.md).
- [ ] You decided and scheduled the go-live dates.
- [ ] You defined a hypercare process, which is a short period of heightened support after go-live. You assigned people to it, shared their contact details, and trained them.
- [ ] You identified the server administrators who need to receive communications, and you notified them.
- [ ] You updated the server build process to add new servers to protect mode.
- [ ] You distributed training materials to the people who need them.

## Plan the workstation rollout

Workstations are more numerous and change more often, so plan for support as well as for access.

- [ ] You divided the workstations into rollout groups. A geographic rollout is often the easiest.
- [ ] You identified the service accounts that the workstations use, collected input from the owning teams, defined a process for missed accounts, and made the accounts persistent, where required.
- [ ] You decided and scheduled the go-live dates.
- [ ] You decided the policy for offline access management (OAM). See [Manage offline access to local administrator accounts](../admin/systems/offline-access-management.md#choose-a-policy). Decide the following:
  - Whether to disable the local built-in Administrator accounts.
  - Whether Privilege Secure for Discovery manages the passwords of the local built-in Administrator accounts.
  - The name template of the alternate administrator account. A question mark in the template becomes a random letter or digit.
  - Whether just-in-time access (JITA) and persistent users can reveal the passwords. See [Let non-administrators retrieve passwords](../admin/systems/offline-access-management.md#let-non-administrators-retrieve-passwords).
- [ ] You tested access over a VPN.
- [ ] You informed the service desk, and users know whom to contact for support.
- [ ] You defined a hypercare process and assigned people to it.
- [ ] You updated the workstation build process to add new workstations to protect mode.
- [ ] You notified and trained the support teams, so that they can assist end users.
- [ ] You distributed training materials to the people who need them.
