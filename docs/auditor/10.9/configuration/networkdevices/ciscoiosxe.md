---
title: "Configure Cisco IOS XE Devices"
description: "Configure Cisco IOS XE Devices"
sidebar_position: 35
---

# Configure Cisco IOS XE Devices

Netwrix Auditor relies on native syslog events for collecting audit data. Therefore, successful
change and access auditing requires a certain configuration of native audit settings in the audited
environment. Proper audit configuration ensures audit data integrity; otherwise, your change reports
may contain warnings, errors, or incomplete audit data.

**CAUTION:** Exclude the folder associated with Netwrix Auditor from antivirus scanning. See the [Antivirus Exclusions for Netwrix Auditor](https://docs.netwrix.com/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor) knowledge base article for additional information.

Netwrix Auditor can't push configuration changes to network devices, so configure native audit
settings manually on the Cisco IOS XE (Internetwork Operating System XE) device. When you finish,
you configure the device with the following settings:

- You enable the global configuration mode.
- You enable the `logging on` option.
- You enable the `logging timestamp` option.
- You set the `logging origin-id` option to `hostname`.
- You set the `logging trap` option from 1 to 6 inclusive.
- You set the `logging host` parameter to the host address of the computer that hosts Netwrix
  Auditor Server, and the device uses a UDP port (for example, 514) to send messages.
- You set the `logging source-interface` option to the interface that sends syslog messages to
  Netwrix Auditor Server.

To configure your Cisco IOS XE devices, do the following:

1. Navigate to your Cisco IOS XE device terminal through the SSH/Telnet connection (for example, use
   PuTTY Telnet client).

2. Enter the privileged EXEC mode. For example:

    ```
    Router> enable
    Password:
    ```

3. Access the global configuration mode. For example:

    ```
    Router# configure terminal
    ```

4. Set the IP address of the Netwrix Auditor Server as the `logging host` parameter, and ensure that
   the device uses a UDP port to send syslog messages (e.g., 514 UDP port). For example:

    ```
    Router(config)# logging host 192.168.1.5 transport udp port 514
    ```

5. Enable time stamps in syslog messages:

    ```
    Router(config)# service timestamps log datetime msec show-timezone year
    ```

6. Configure the device to add its hostname to syslog messages:

    ```
    Router(config)# logging origin-id hostname
    ```

7. Set the `logging trap` option from 1 to 6 inclusive. For example:

    ```
    Router(config)# logging trap informational
    ```

8. Set the interface that sends syslog messages to Netwrix Auditor Server. For example:

    ```
    Router(config)# logging source-interface GigabitEthernet1
    ```

9. Enable logging:

    ```
    Router(config)# logging on
    ```

10. Exit the global configuration mode:

    ```
    Router(config)# end
    ```

## Cisco IOS XE Devices

Review a full list of object types Netwrix Auditor can collect on Cisco IOS XE network devices.

| Object type   | Actions             | Event ID                                                                                                                                      |
| ------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Configuration | - Modified          | - `CONFIG_I` - `CFGLOG_LOGGEDCMD` - `CONFIG_NV` - `LOGGINGHOST_STARTSTOP`                                                                     |
| Logon         | - Successful logon  | - `LOGIN_SUCCESS` - `WEBLOGIN_SUCCESS` - `WEBSERVER-5-LOGIN_PASSED` - `PRIV_AUTH_PASS` - `DOT1X-5-SUCCESS` - `MAB-5-SUCCESS`                   |
| - Failed logon  | - `LOGIN_FAILED` - `QUIET_MODE_ON` - `WEBUI_LOGIN_FAILED` - `WEBSERVER-5-LOGIN_FAILED` - `DOT1X-5-FAIL` - `MAB-5-FAIL` |                                                                                                                                                 |
| - Logoff        | - `SYS-6-LOGOUT`                                                                                                                              |                                                                                                                                                 |
| Rule          | - Activated         | - `IPACCESSLOG` - `PSECURE_VIOLATION` - `PM-4-ERR_DISABLE` - `DHCP_SNOOPING_UNTRUSTED_PORT` - `SW_DAI` - `STORM_CONTROL-3-FILTERED` - `STORM_CONTROL-3-SHUTDOWN` - `FW-2-BLOCK_HOST` - `UTD_POLICY_DROP_PKT` |
| Session       | - Successful logon  | - `CRYPTO-5-SESSION_STATUS: Crypto tunnel is UP` - `IKEV2-5-SA_UP` - `FLEXVPN_CONNECTION_UP` - `SSLVPN-5-LOGIN_AUTH_PASSED`                    |
| - Failed logon  | - `IKMP_BAD_MESSAGE` - `IKMP_NO_SA` - `IKMP_CRYPT_FAILURE` - `NEG_ABORT` - `SSLVPN-5-LOGIN_AUTH_FAILED`                                        |                                                                                                                                                 |
| - Logoff        | - `CRYPTO-5-SESSION_STATUS: Crypto tunnel is DOWN` - `IKEV2-5-SA_DOWN` - `FLEXVPN_CONNECTION_DOWN` - `SSLVPN-5-SESSION_TERMINATE`              |                                                                                                                                                 |
| - Read          | - `RECV_CONNECTION_REQUEST`                                                                                                                    |                                                                                                                                                 |
| - Modified      | - `SSLVPN-5-UPDOWN`                                                                                                                            |                                                                                                                                                 |
| User          | - Modified          | - `AAA-5-USER_UNLOCKED` - `AAA-5-USER_RESET` - `AAA-5-USER_LOCKED` - `AAA-5-LOCAL_USER_BLOCKED`                                                |