---
title: "Windows Server Target Actions"
description: "Windows Server Target Actions"
sidebar_position: 70
---

# Windows Server Target Actions

The following actions target Windows servers.

## Close SMB Session

![closesmbsession](/images/threatmanager/3.0/administration/playbooks/action/closesmbsession.webp)

This action closes any active SMB sessions for the threat perpetrator on a target host.

- Credential – Select a credential profile that contains valid Active Directory credentials.
  Credential profiles are configured on the
  [Integrations Interface](/docs/threatmanager/3.0/administration/configuration/integrations/overview.md). If not specified, the
  action will be run as the credentials of the Action Service.

## Create Windows Firewall Rule

![windowsfirewall](/images/threatmanager/3.0/administration/playbooks/action/windowsfirewall.webp)

This action adds a Windows Firewall Rule to block inbound or outbound network protocol traffic for
specified hosts.

- Direction – Specify the direction of the firewall rule
    - Inbound
    - Outbound
- Protocol – Specify the network protocol for the firewall rule
    - TCP
    - UDP
    - ICMPv4
    - ICMPv6
- Blocking Target – Specify the remote address to be blocked by the firewall rule
    - Perpetrator Client – The client machine used by a perpetrator for the detected threat
      (typically a workstation)
    - Host – The host associated with a threat (typically a domain controller or file server)
- Target Host – Specify the location where the windows firewall rule will be created
    - Perpetrator Client – The client machine used by a perpetrator for the detected threat
      (typically a workstation)
    - Threat Host – The host associated with a threat (typically a domain controller or file server)
- Credential – Select a credential profile that contains valid Active Directory credentials.
  Credential profiles are configured on the
  [Integrations Interface](/docs/threatmanager/3.0/administration/configuration/integrations/overview.md). If not specified, the
  action will be run as the credentials of the Action Service.

## Disable User Remote Desktop Access

![disableuserremote](/images/threatmanager/3.0/administration/playbooks/action/disableuserremote.webp)

This action disconnects the user from the host and disables login rights for the user.

- Credential – Select a credential profile that contains valid Active Directory credentials.
  Credential profiles are configured on the
  [Integrations Interface](/docs/threatmanager/3.0/administration/configuration/integrations/overview.md). If not specified, the
  action will be run as the credentials of the Action Service.
- Users – Select the users for whom to disable remote desktop access. If not specified, those user
  who triggered the threat will be used.
