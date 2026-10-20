---
title: "Common UI errors"
description: "Identify the cause of common scan, access, and connection errors in Privilege Secure for Discovery and apply the resolution."
sidebar_position: 20
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm that each error in this page still occurs at 26.09.1 with the same text. The Windows (SMB) errors are passed through from the endpoint, but the product wrapper text wasn't verified. Evidence: none.

TODO: Confirm the cause and resolution of "No sudoers file present in the UI", in particular the internal_api service and the DB environment variable in the stack file. Evidence: none.

TODO: Confirm the resolution for "Maximum Attempts Exceeded" when a worker was restarted and a queue record remains in progress; the former resolution edited the database directly and was removed. Evidence: none.

TODO: Confirm whether the NTLM restriction cause of STATUS_NOT_SUPPORTED still applies and whether the recommended policy value is still valid. Evidence: none.
:::

This page explains errors that the web UI and the Access History show during scans and access requests, and how to resolve them. Many of the errors result from incorrect or outdated DNS entries, especially slow updates to dynamic DNS records, or from incorrect credentials. For errors that have their own article, see [Errors and messages](./errors-and-messages.md).

## rpc_s_access_denied

The scan account can't read the local Administrators group of the system.

**Cause 1:** The scan account doesn't have permission to enumerate the local Administrators group. The Group Policy Object (GPO) that allows the scan account to make remote calls to the Security Account Manager (SAM) is missing.

**Resolution 1:** Apply the scan GPO. See [Scan GPO for domain controllers](../configuration/domains-and-ad/scan-gpo-domain-controllers.md).

**Cause 2:** The system can't reach a domain controller (DC) to authenticate an Active Directory (AD) account. To verify, try to sign in to the system with an AD account by using Remote Desktop Protocol (RDP). If you have a terminal through a remote management tool, run `gpupdate /force` and check for a DC connection error.

**Resolution 2:** Restore the connection between the system and a DC, and verify it with `gpupdate /force`. Until then, sign in with a local account, such as the built-in Administrator (RID 500) account or, if Offline Access Management (OAM) is enabled, the alternate administrator account.

## 403 Error: Forbidden from viewing this resource

**Cause:** The signed-in user tried to view a system on the **Grant Access** page without permission. A user has permission when the user, or a group that the user belongs to, is in the account inventory of the system.

**Resolution:** Add the user or a group of the user to the account inventory. See [Add a user or group to an account inventory](../admin/systems/add-a-user-or-group-to-an-account-inventory.md).

## Failed to Connect with Credentials

This error usually indicates a DNS problem. The product connects to the IP address that DNS returns for the system. If that connection fails, or the connection succeeds but returns an error such as a failed host verification (the computer has a different host name than the name in DNS) or another session error, the product tries the backup IP address, if one exists. If there is no backup address, or the backup address also fails, the product shows this error.

**Cause 1:** The DNS entry for the system points to an IP address that belongs to another computer.

**Resolution 1:** Run `ipconfig /all` on the system and compare the returned host name with the system name in the product. If they differ, correct the DNS entry and retry.

**Cause 2:** The AD attributes Computer Name (CN) and Computer (NetBIOS) Name of the computer don't match, as shown in Active Directory Administrative Center. This happens when the NetBIOS name is longer than 15 characters.

**Resolution 2:** Shorten the NetBIOS name to 15 characters. For more information, see Microsoft's [naming conventions in Active Directory](https://learn.microsoft.com/en-us/troubleshoot/windows-server/identity/naming-conventions-for-computer-domain-site-ou).

## STATUS_NONE_MAPPED

**Cause 1:** The local Administrators group contains a duplicate or redundant built-in administrator account, which causes an error when OAM scans the system.

**Resolution 1:** Identify the built-in administrator account on the system, disable OAM, and rescan the system. If the incorrect built-in administrator remains in the account inventory, remove it. If you can't remove it, contact Netwrix Support.

**Cause 2:** The OAM policy uses the same name for the alternate administrator account as the built-in administrator account.

**Resolution 2:** Disable OAM and rescan the system. Change the OAM policy to use a name that differs from the built-in local Administrator account. Enable OAM and rescan.

## STATUS_SPECIAL_ACCOUNT

This status indicates that an operation isn't allowed on a built-in (special) SAM account, for example deleting it.

**Cause:** The OAM alternate administrator account and the RID 500 account have the same name, for example `Administrator`, when OAM is enabled. When you set OAM to **Unmanaged**, the product tries to remove the alternate administrator account on the next scan, which is the RID 500 account.

**Resolution:** Contact Netwrix Support. While OAM is set to **Unmanaged**, Support removes the stale account entries that end in `-500` for the system. Afterward, leave OAM unmanaged, or enable it with an alternate administrator name that differs from the name of the RID 500 account.

## Maximum Attempts Exceeded

**Cause 1:** The product exceeded the time limit to communicate with the system. The process keeps trying to complete the action, such as a rescan, a just-in-time access (JITA) request, an extension, or an expiration.

If the signed-in user has a JITA session that doesn't expire, because it is overdue or a manual expiration failed, **Overview** > **Overdue Users with Admin Access** shows the message "Pending expiration run" and offers no button to dismiss it.

**Resolution 1:** Wait one minute, refresh the **Grant Access** page for the system, and repeat the action.

**Cause 2:** The worker service stopped responding or restarted, and the queue record for the JITA request on the system stayed in progress.

**Resolution 2:** Contact Netwrix Support to reset the queue record.

## Unable to connect to system: Host is offline

The full message is "Unable to connect to system: Host is offline - 660240 - Last known IP is unreachable".

**Cause:** The system doesn't respond to a ping.

**Resolution:** Verify that the system is running and reachable from the node. For how the product determines that a host is offline, see the [knowledge base article](/docs/kb/privilegesecurediscovery/security-and-compliance/how-netwrix-privilege-secure-for-discovery-determines-a-host-is-offline).

## Windows authentication and connection errors

The following table lists errors that the product reports when it connects to a Windows system.

| Error | Cause | Resolution |
| --- | --- | --- |
| `STATUS_LOGON_FAILURE`: The attempted logon is invalid. This is either due to a bad username or authentication information. | DNS isn't up to date, so the product connects to the wrong IP address and uses the wrong credentials. Alternatively, another administrator changed the credentials on the system. | Correct the DNS entry. Verify the credentials of the service account on the system. |
| `STATUS_ACCOUNT_LOCKED_OUT`: The user account has been automatically locked because too many invalid logon attempts or password change attempts have been requested. | The service account is locked out for the same reasons as `STATUS_LOGON_FAILURE`. | Unlock the account and resolve the cause of the failed logons. |
| `STATUS_LOGON_TYPE_NOT_GRANTED`: A user has requested a type of logon that has not been granted. | The product most likely connects to the wrong system, for the same reasons as `STATUS_LOGON_FAILURE`. | Correct the DNS entry for the system. |
| `STATUS_MEMBER_IN_ALIAS`: The specified account name is already a member of the group. | The product tried to add a user to the local administrators group, and the account was already a member. | None required. |
| `STATUS_MEMBER_NOT_IN_ALIAS`: The specified account name isn't a member of the group. | The product tried to remove a user from the local administrators group, and the user wasn't a member. | None required. |
| System hostname doesn't match | DNS isn't up to date, so the product connects to the wrong IP address. | Correct the DNS entry for the system. |
| `STATUS_ACCESS_DENIED`: A process has requested access to an object and has not been granted those access rights. | The service account authenticated, but doesn't have the required access. | Verify that the service account is in the local administrators group. See the following note. |
| `STATUS_PASSWORD_RESTRICTION` (`0xc000006c`): Some password update rule has been violated, for example the password doesn't meet length criteria. | The OAM password complexity setting conflicts with the domain password policy. | Align the OAM password settings with the domain password policy. |
| `STATUS_TRUSTED_RELATIONSHIP_FAILURE`: The logon request failed because the trust relationship between this workstation and the primary domain failed. | AD has no trust relationship with the system. This happens when someone deletes a computer from AD and adds it again. | On the system, leave the domain, restart, and join the domain again. |
| `STATUS_NO_LOGON_SERVERS`: No logon servers are available to service the logon request. | The system can't reach a DC. | Fix network path problems such as the firewall, routing, or VPN. Restart the system. |
| `STATUS_NOT_SUPPORTED` during a scan | A Microsoft update that mitigates an NTLM relay vulnerability blocks incoming NTLM traffic. See Microsoft's [KB5005413](https://support.microsoft.com/en-gb/topic/kb5005413-mitigating-ntlm-relay-attacks-on-active-directory-certificate-services-ad-cs-3612b773-4043-4aa9-b23d-b87910cd3429). | Set the policy **Network security: Restrict NTLM: Incoming NTLM traffic** to **Allow all**. Microsoft recommends auditing incoming NTLM traffic first. See [Network security: Restrict NTLM: Incoming NTLM traffic](https://learn.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/network-security-restrict-ntlm-incoming-ntlm-traffic). |
| `SAMR SessionError: unknown error code: 0xc000a08b` | Microsoft Local Administrator Password Solution (LAPS) prevents password changes to the local Administrator (RID 500) account. Windows generates this error on the endpoint. To verify, check the LAPS operational log in Event Viewer under **Applications and Services Logs** > **Microsoft** > **Windows** > **LAPS** > **Operational**. | Prevent the LAPS GPO from applying to the system. As a workaround, disable OAM rotation of the local Administrator password. The product keeps the account disabled and manages an alternate administrator account. |
| `SAMR SessionError: unknown error code: 0xc000030c` | Nobody set a password for the local Administrator (RID 500) account, so the password is blank. Windows generates this error on the endpoint. | Set a password for the local Administrator (RID 500) account. |
| Error 9999: Connection reset by peer | File and Printer Sharing for Microsoft Networks is disabled, which blocks connections on port 445. | Enable File and Printer Sharing for Microsoft Networks on the system. |
| `Your configuration is not valid. (ECONNRESET)` when you select **Test Connection** while you add a domain | The DC doesn't use Secure Sockets Layer (SSL) for Lightweight Directory Access Protocol (LDAP) and closed the connection. | Clear the SSL option and change the port to 389. |
| Rescan doesn't work | The AD entry represents a cluster, such as a Microsoft SQL Server cluster, instead of an individual computer. A rescan expects an individual server. | Scan the individual nodes of the cluster. |

For `STATUS_ACCESS_DENIED`, verify the following:

- The service account (Protect or Scan) is in the local administrators group of every system that you scan. The service account must show **On System: Yes** and **Persistent: Yes**. A team, a process, or a GPO usually manages this membership. To fix the problem immediately, sign in to the affected system and add the service account to the local administrators group.
- If OAM is enabled, disable OAM and contact Netwrix Support to remove stale administrator entries from the account inventory data.

## Connection timed out, refused, or no route to host

The product can't connect to port 445 of the system. The error appears in one of the following forms:

- `Unable to connect to system: ... Connection timed out`
- `Unable to connect to system: ... Connection refused`
- `Unable to connect to system: ... No route to host`
- `STATUS_PIPE_NOT_AVAILABLE`
- `The NETBIOS connection with the remote host timeout`

**Cause:** File and Printer Sharing is disabled, or the Server service (`LanmanServer`) isn't running, so SMB doesn't listen for connections.

**Resolution:** On the system, run the following commands from a command prompt:

1. Check that port 445 reports `LISTENING`:

   ```text
   netstat -n -a | findstr "LISTEN" | findstr "445"
   ```

2. Check the status of the Server service:

   ```text
   sc query lanmanserver
   ```

3. If the service is stopped, start it:

   ```text
   sc start lanmanserver
   ```

If the problem persists, apply the following steps in order. After each step, check again that port 445 reports `LISTENING`.

1. Enable File and Printer Sharing for Microsoft Networks on the network adapter that the system uses.
2. In Windows Services, set the **Server** service to **Automatic** and start it.
3. Stop and start the **Server** service.
4. Restart the system. The Server service sometimes doesn't start or stay running until the system restarts.

## Linux system errors

| Error | Cause | Resolution |
| --- | --- | --- |
| `Remote script exited with error: see details in log` during a scan | The Linux system is out of disk space, or the disk or the `/tmp` directory is read-only. | Free disk space, or fix the read-only state or the permissions of `/tmp`. |
| `Remote script exited with error: see details in log` and the password of the service account has expired | The password of the service account on the Linux system has expired. | Set the password to never expire: `sudo chage -M 99999 <account>`. Replace `<account>` with the name of the service account. |
| `Unhandled error: Host is Unreachable: Failed to connect to the host via ssh: WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!` during registration | The SSH host key of the Linux system changed, and it no longer matches the key that the worker service stored. | Restart the worker service from **Configure** > **Services** > **Worker** > **Restart**, or run `s1 restart worker` on any node. |
| No sudoers file or no users or groups in the UI permissions | The `internal_api` service isn't deployed or isn't running, a database migration didn't finish during an upgrade, or on a cluster the stack file uses the single-node database entry for `internal_api`. | Contact Netwrix Support. |

For the SSH key error `SSH connection error: encountered RSA key, expected OPENSSH key`, see [Errors and messages](./errors-and-messages.md).

## Import errors

**The file does not have a header with value "Name"**

**Cause:** You selected **Select By File** on the **Management** > **Systems** page and uploaded a CSV file that you edited and saved in Excel. Excel removes the quotation marks that the upload requires.

**Resolution:** Save the file in Excel as an `.xlsx` file, or edit and save the CSV file in a text editor.
