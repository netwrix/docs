---
title: "Configure HPE Aruba Devices"
description: "Configure HPE Aruba Devices"
sidebar_position: 70
---

# Configure HPE Aruba Devices

To configure your HPE Aruba devices, enable logging to multiple Syslog servers and configure logging
levels. Do one of the following:

- To configure HPE Aruba devices via Command Line Interface
- To configure HPE Aruba devices through the Management Console

To configure HPE Aruba devices via Command Line Interface

1. Log in to the Command Line Interface (CLI).
2. Enter the following command to start configuration mode:

    # configure terminal

3. Specify IP address of the computer that hosts your Netwrix Auditor Server to send Syslog messages
   to:

    # logging `<ipaddr>` severity information

4. Specify event level for the following categories: security, system, user, wireless, network:

    # logging network level information

    # logging security level information

    # logging system level information

    # logging user level information

    # logging wireless level information

5. Apply configuration changes:

    # write memory

To configure HPE Aruba devices through the Management Console

1. Log in to HPE Aruba web interface.
2. Navigate to Mobility Master and select a device or a group of devices you want to monitor with
   Netwrix Auditor.
3. Navigate to Configuration → System → Logging and click + to add a new Syslog Server.

    ![nand_aruba_logging](/images/auditor/10.7/configuration/networkdevices/nand_aruba_logging.webp)

4. In the Add New Syslog Servers dialog, complete the following fields:

    | Option           | Description                               |
    | ---------------- | ----------------------------------------- |
    | IP address       | Provide the IP address of the new server. |
    | Category         | Select None.                              |
    | Logging facility | Leave empty.                              |
    | Logging level    | Select Informational.                     |
    | Format           | Select None.                              |

5. Click Submit. The new server is added to the Syslog Servers list.
6. Click Pending Changes on the right.
7. In the Pending Changes for `<X>` Managed Controller(s) dialog, select the device you want to
   apply changes to.
8. Click Deploy Changes.
9. If the configuration is correct, you will see the following wizard:

    ![nand_aruba_status](/images/auditor/10.7/configuration/networkdevices/nand_aruba_status.webp)

10. Navigate to Configuration → System → Logging and expand the Logging Levels.
11. Select the Informational value for the following parameters:

    - network
    - system
    - wireless
    - security

12. Deploy pending changes for the logging level: repeat steps 6 - 8.

## HPE Aruba Devices

Review a full list of object types Netwrix Auditor can collect on HPE Aruba devices.

| Object type    | Actions                                                                                                 | Message ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authentication | - Successful logon                                                                                      | - 103047 - 103082 - 103085 - 105004 - 133008 - 133005 - 133098                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                | - Failed logon                                                                                          | - 522275 - 541003 - 103046 - 103048 - 103067 - 103068 - 103083 - 103084 - 105002 - 105003 - 133009 - 133006 - 133099 - 125021 - 125022 - 125031 - 125033 - 125071                                                                                                                                                                                                                                                                                                                                                                                           |
| Configuration  | - Add / Added (Failed attempt) - Removed / Remove (Failed attempt) - Modified / Modify (Failed attempt) | - 125012 - (109012 - 124037 - 124036 - 124010 - 325013 - 325014 - 325015 - 325018 - 325019 - 335000 - 335009 - 335016 - 335015 - 335010 - 335013 - 335001 - 305034 - 335002 - 125063 - 125065 - 125067 - 125069 - 125064 - 125066 - 125068 - 125060 - 125061 - 125072 - 133109 - 133022 - 133104 - ECC error detected - Power supply failure                                                                                                                                                                                                                |
| Rule           | Activated                                                                                               | - 127054 - 127033 - 127068 - 127034 - 127006 - 127086 - 127064 - 127073 - 127079 - 127082 - 127084 - 127080 - 127083 - 127081 - 127085 - 127007 - 127074 - 127036 - 127047 - 127066 - 127043 - 127067 - 127087 - 127078 - 127035 - 127032 - 127072 - 127088 - 127109 - 127071 - 127077 - 127065 - 127075 - 127046 - 127044 - 127045 - 127116 - 127117 - 127052 - 127053 - 127069 - 127070 - 127014 - 127015 - 127016 - 127017 - 127029 - 127030 - 127008 - 127009 - 127010 - 127011 - 127028 - 127061 - 127062 - 127063 - 127039 - 127040 - 127041 - 127042 |
| Session        | - Logoff                                                                                                | - 103040 - 103042 - 103056 - 103069                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Logon          | - Logon succeeded                                                                                       | - 125023 - 125024 - 125032 - 125070                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Role           | - Add / Added (Failed attempt)                                                                          | - 125011                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
