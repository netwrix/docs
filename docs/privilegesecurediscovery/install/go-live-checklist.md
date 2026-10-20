---
title: "Go-live checklist"
description: "Review the decisions and checks to complete before you move Netwrix Privilege Secure for Discovery from deployment to production use."
sidebar_position: 70
---

Use this checklist to confirm that your organization is ready to protect production systems with Netwrix Privilege Secure for Discovery. The checklist depends on your environment. Treat the items as questions to answer before go-live, and add items that your organization requires.

## Confirm the deployment

- [ ] The deployment passes the checks in [Verify the deployment](./verify-deployment.md).
- [ ] The nodes meet the [sizing guidance](../requirements/sizing.md), and the [ports and firewall rules](../requirements/ports-and-firewall.md) are in place.
- [ ] You stored a copy of the `key.txt` encryption key outside the deployment hosts. See [Manage Docker secrets](./docker-secrets.md).
- [ ] A backup and recovery plan exists. See [Protect and recover your deployment](../admin/maintenance/protect-and-recover-your-deployment.md).

## Confirm access to systems

- [ ] The protect account has the permissions to administer all servers and workstations that you plan to protect. Exclude domain controllers. See [Service accounts](../requirements/service-accounts.md).
- [ ] The Group Policy object (GPO) that allows remote enumeration of local administrators applies to all systems you plan to protect. Exclude domain controllers. See [Add the Protect Mode Account to Windows Endpoints with a GPO](../configuration/domains-and-ad/protect-mode-account-gpo.md).
- [ ] You established and tested connectivity for most of the systems.

## Confirm single sign-on and multifactor authentication

- [ ] You tested the standard sign-in experience for users.
- [ ] You tested any alternate domains.
- [ ] You decided whether hardware tokens are in use for multifactor authentication, and you tested them.
- [ ] Your training documentation includes the single sign-on and multifactor authentication steps.

## Confirm SIEM integration

Integration with a security information and event management (SIEM) system isn't required for go-live. If you use one, confirm the following:

- [ ] You configured log forwarding to the SIEM. See [Forward logs to a syslog server or SIEM](../integrations/siem/forward-logs.md).
- [ ] The SIEM receives the logs from Privilege Secure for Discovery.
- [ ] The logs are complete and not truncated.
- [ ] You defined queries for the scenarios that you want to track.

## Plan the server rollout

- [ ] You verified that no domain controller receives the GPO.
- [ ] You identified operation-critical servers, such as Citrix servers, and you planned to roll them out in a small group with the responsible teams.
- [ ] You identified the service accounts that the servers use. The quickstart tools can produce a report to review. See [Install the Quickstart tools](../configuration/bulk-onboarding/install-the-quickstart-tools.md).
- [ ] You collected input about service accounts from the server, application, security, network, and infrastructure teams.
- [ ] You defined a process for service accounts that you missed.
- [ ] You made the service accounts persistent, where required.
- [ ] You divided the list of servers into rollout groups. Roll out development and test servers first.
- [ ] You added a user group to Privilege Secure for Discovery and populated it. See [Add users to Privilege Secure for Discovery](../configuration/onboard-systems/add-users-to-privilege-secure.md).
- [ ] You decided and scheduled the go-live dates.
- [ ] You defined a hypercare process, which is a short period of heightened support after go-live, assigned people to it, shared their contact details, and trained them.
- [ ] You identified the server administrators who need to receive communications, and you notified them.
- [ ] You updated the server build process to add new servers to protect mode.
- [ ] You distributed training materials to the people who need them.

## Plan the workstation rollout

- [ ] You divided the list of workstations into rollout groups. A geographic rollout is often the easiest.
- [ ] You identified the service accounts that the workstations use, collected input from the owning teams, defined a process for missed accounts, and made the accounts persistent, where required.
- [ ] You decided and scheduled the go-live dates.
- [ ] You decided the policy for offline access management (OAM). See [Configure Offline Access Management passwords](../configuration/endpoint-preparation/oam-password-configuration.md). Decide the following:
  - Whether to disable the local built-in Administrator accounts.
  - Whether Privilege Secure for Discovery manages the passwords of the local built-in Administrator accounts.
  - The name of the alternate administrator account. You can randomize part or all of the name.
  - Whether just-in-time access (JITA) users get access.
- [ ] You tested access over a VPN.
- [ ] You informed the service desk, and users know whom to contact for support.
- [ ] You defined a hypercare process and assigned people to it.
- [ ] You updated the workstation build process to add new workstations to protect mode.
- [ ] You notified and trained the support teams, so that they can assist end users.
- [ ] You distributed training materials to the people who need them.
