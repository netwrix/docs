---
title: "NetApp Data ONTAP 7-Mode Activity Auditing Configuration"
description: "NetApp Data ONTAP 7-Mode Activity Auditing Configuration"
sidebar_position: 70
---

# NetApp Data ONTAP 7-Mode Activity Auditing Configuration

The Activity Monitor agent employed to monitor NetApp leverages 128-bit encrypted Remote Procedure
Calls (RPC), NetApp ONTAP-API, and NetApp FPolicy to monitor file system events. This includes both
NetApp 7-Mode and Cluster-Mode configurations. To learn more about FPolicy please visit the NetApp
website and read the
[What FPolicy is](https://library.netapp.com/ecmdocs/ECMP1401220/html/GUID-54FE1A84-6CF0-447E-9AAE-F43B61CA2138.html)
article.

If the activity agent is stopped, a notification will be sent to the NetApp device to disconnect and
disable the associated FPolicy policy, but it will not be removed.

If the network connection is lost between the activity agent and the NetApp device, the NetApp
device is configured with a default timeout to wait for a response. If a response is not received
from the Activity Agent within the timeout, then the NetApp device will disconnect and disable the
FPolicy policy. The Activity Agent will check every minute by default to see if the FPolicy policy
has been disabled and will enable it (if the auto-enable functionality is enabled for the agent).
The default setting to check every minute is configurable.

The NetApp FPolicy uses a “push” mechanism such that notification will only be sent to the activity
agent when a transaction occurs. Daily activity log files are created only if activity is performed.
No activity log file will be created if there is no activity for the day.

**Configuration Checklist**

Complete the following checklist prior to configuring activity monitoring of NetApp Data ONTAP
7-Mode devices. Instructions for each item of the checklist are detailed within the following
topics.

**Checklist Item 1: Plan Deployment**

- Gather the following information:
    - Names of the vFiler™(s) to be monitored
    - DNS name of the CIFS shares(s) to be monitored

Checklist Item 2:
[Provision FPolicy Account](/docs/activitymonitor/7.1/requirements/activityagent/nasdeviceconfiguration/ontap7-aac/provisionactivity.md)

- Group membership with a role granting access to the following commands:

    ```
    login-http-admin
    api-system-api-list
    api-system-get-version
    api-cifs-share-list-iter-*
    api-volume-list-info-iter-*
    ```

- For Automatic FPolicy creation (Checklist Item 4), group membership with a role granting access to
  the following command:

    ```
    api-fpolicy*
    ```

- To use the “Enable and connect FPolicy” option within the Activity Monitor, group membership with
  a role granting access to the following command:

    ```
    cli-fpolicy*
    ```

- Group membership in:

    - ONTAP Power Users
    - ONTAP Backup Operators

**Checklist Item 3: Firewall Configuration**

- HTTP (80) or HTTPS (443)
- HTTP or HTTPS protocols need to be enabled on the NetApp filer
- TCP 135
- TCP 445
- Dynamic port range: TCP/UDP 137-139
- See the
  [Enable HTTP or HTTPS](/docs/activitymonitor/7.1/requirements/activityagent/nasdeviceconfiguration/ontap7-aac/enablehttp.md) topic
  for instructions.

Checklist Item 4:
[Configure FPolicy](/docs/activitymonitor/7.1/requirements/activityagent/nasdeviceconfiguration/ontap7-aac/configurefpolicy.md)

- If using vFilers:

    - FPolicy operates on the vFiler so the FPolicy must be created on the vFiler

        :::note
        Activity Monitor must target the vFiler
        :::


- Select method:

    :::info
    Configure FPolicy Manually – A tailored FPolicy
    :::


    - Allow the Activity Monitor to create an FPolicy automatically
        - This option is enabled when the Activity Monitor agent is configured to monitor the NetApp
          device on the NetApp FPolicy Configuration page of the Add New Hosts window.
        - It monitors all file system activity.

**Checklist Item 5: Activity Monitor Configuration**

- Deploy the Activity Monitor Activity Agent to a Windows proxy server
- Configure the Activity Agent to monitor the NetApp device
