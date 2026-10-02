---
title: "Configure Cisco NX-OS (Nexus) Devices"
description: "Configure Cisco NX-OS (Nexus) Devices"
sidebar_position: 35
---

# Configure Cisco NX-OS (Nexus) Devices

Netwrix Auditor relies on native syslog events for collecting audit data. Therefore, successful
change and access auditing requires a certain configuration of native audit settings in the audited
environment. Proper audit configuration ensures audit data integrity; otherwise, your change reports
may contain warnings, errors, or incomplete audit data.

**CAUTION:** Exclude the folder associated with Netwrix Auditor from antivirus scanning. See the
[Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
knowledge base article for additional information.

Netwrix Auditor can't push configuration changes to network devices, so configure native audit
settings manually on the Cisco Nexus device. When you finish, the device has the following settings:

- The syslog server severity threshold is set to **6 (informational)**. At the default threshold of
  5, successful logons, command accounting, and ACL log messages (all severity 6) are dropped.
- Successful and failed logon attempts are logged (`login on-success log`, `login on-failure log`).
  Successful logons aren't logged by default.
- AAA command accounting is enabled (`aaa accounting default local` - enabled by default on most
  releases), so that configuration changes are recorded with the command text, the user, and the
  terminal.
- The device uses a UDP port (for example, 514) to send messages to the host that hosts Netwrix
  Auditor Server.

To configure your Cisco Nexus devices, do the following:

1. Connect to your Cisco Nexus device terminal through the SSH connection (for example, use PuTTY).
2. Access the global configuration mode:

    ```
    switch# configure terminal
    ```

3. Set the IP address of the Netwrix Auditor Server as the syslog server, with severity threshold 6,
   and enable timestamps and the device hostname in syslog messages:

    ```
    switch(config)# logging server <Netwrix Auditor Server IP address> 6 use-vrf management facility local7
    switch(config)# logging source-interface mgmt0
    switch(config)# logging timestamp milliseconds
    switch(config)# logging origin-id hostname
    ```

    If your device doesn't manage through the `management` VRF, replace `use-vrf management` with
    your management VRF name, and `logging source-interface mgmt0` with the interface you use to
    reach the Netwrix Auditor Server.

4. Raise the logging level for the facilities that carry logon and configuration-change events to 6
   (informational) - by default `authpriv` is at level 3, which only logs errors:

    ```
    switch(config)# logging level authpriv 6
    switch(config)# logging level aaa 6
    switch(config)# logging level vshd 6
    switch(config)# logging level security 6
    ```

5. Enable logging of successful and failed logon attempts:

    ```
    switch(config)# login on-success log
    switch(config)# login on-failure log
    ```

6. Make sure command accounting is enabled, so that configuration changes are recorded with the
   command text:

    ```
    switch(config)# aaa accounting default local
    ```

    Run `show running-config all | include accounting` to confirm. If your device already sends
    accounting records to a TACACS+/RADIUS server (`aaa accounting default group <server-group>`),
    keep `local` as a fallback method in the same command so records also reach the local syslog.

7. Save the configuration:

    ```
    switch(config)# end
    switch# copy running-config startup-config
    ```

**Known limitations:**

- Successful logons require `login on-success log` and `authpriv` at level 6; without them, only
  failed logons are collected.
- Messages produced during the first minutes after boot (before the management interface comes up)
  aren't sent to the syslog server.
- `show` commands aren't recorded by command accounting - this is expected NX-OS behavior.
- Syslog is delivered over UDP, so lost packets mean lost events.

## Cisco NX-OS (Nexus) Devices

Review a full list of object types Netwrix Auditor can collect on Cisco NX-OS (Nexus) network
devices.

| Object type   | Actions             | Event ID                                                                                                                                                                                                                                                                                         |
| ------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Logon         | - Successful logon   | - `pam_aaa:Authentication success` - `Accepted password/publickey` - `NXAPI-SESSION-INFO: Successfully authenticated` - `session opened for user` - `AAA_ACCOUNTING_MESSAGE: start:` - ` - sudo`                                                                                              |
| - Logoff        | - `session closed for user`                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                   |
| - Failed logon  | - `Failed password for` - `pam_aaa:Authentication failed` - `illegal user` - `FAILED LOGIN` - `Auth fail:bad community`                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                   |
| User          | - Failed logon       | - `AAA_PER_USER_BLOCK`                                                                                                                                                                                                                                                                         |
| - Modified      | - `New user added with username` - `Deleted user` - `usermod` (group add/remove) - `usermod` (password change)                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                   |
| Configuration | - Modified           | - `AAA_ACCOUNTING_MESSAGE: update:` - `VSHD_SYSLOG_CONFIG_I` - `VSHD_SYSLOG_CONFIG_CHANGE` - `CFGWRITE_STARTED` - `CFGWRITE_DONE` - `CFGERASE_DONE` - `PARTIAL_CFGWRITE_DONE` - `VSHD_CLI_COMMIT_ID` - `VSHD_SYSLOG_ROLE_CREATED` - `VSHD_SYSLOG_CMD_EXEC` - `VDC_HOSTNAME_CHANGE` - `BOOTVAR-6-CONFIG_UPDATED` - `FEATURE_NXAPI_ENABLE` - `VLAN_MGR-5-NOTIF_MSG` - `RADIUS_ERROR_MESSAGE` - `RADIUS_SERVER_STATUS` - `TACACS_ERROR_MESSAGE` - `DHCP_SNOOP-VLANENABLE/VLANDISABLE/DAIVLANENABLE/DAIVLANDISABLE` |
| Rule          | - Activated          | - `ACLLOG_NEW_FLOW` - `ACLLOG_FLOW_INTERVAL` - `ACLLOG_THRESHOLD` - `COPP_NO_POLICY` - `ETH_PORT_SEC_SECURITY_VIOLATION` - `IF_DOWN_ERROR_DISABLED` - `IF_ERRDIS_RECOVERY` - `BLOCK_BPDUGUARD` - `LOOPGUARD_BLOCK/UNBLOCK` - `ROOTGUARD_BLOCK/UNBLOCK` - `STP-6-ROOT` - `NATIVE_VLAN_MISMATCH`      |
