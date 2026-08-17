---
title: "Troubleshoot Issues"
description: "Troubleshoot Issues"
sidebar_position: 70
---

# Troubleshoot Issues

| Error in PowerShell                                                                                            | Resolution                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| New-Object : Exception calling ".ctor" with "1" argument(s): "Attempted to perform an unauthorized operation." | The account specified for collecting events on the RADIUS server does not have sufficient rights and permissions or the password is incorrect. - Check the password for this account. - Select the account that belongs to the **Domain Users** group and has the **Manage auditing and security log** right in domain where the RADIUS server resides. |
| New-Object : Exception calling ".ctor" with "1" argument(s): "The RPC server is unavailable"                   | The firewall on the RADIUS server blocks the script execution. On the server, navigate to the **Help Protect your computer with Windows Firewall** page, select **Advanced Settings** and enable the **Remote Event Log Management (RPC)** inbound rule.                                                                                                |
