---
title: "What are the ways I can install the PolicyPak Cloud Client on Remote Machines?"
description: "What are the ways I can install the PolicyPak Cloud Client on Remote Machines?"
sidebar_position: 70
---

# What are the ways I can install the PolicyPak Cloud Client on Remote Machines?

There are a few ways you can get the Cloud Client installed on your endpoints. Netwrix PolicyPak Cloud does not work unless the PolicyPak Cloud
client is installed. Once installed, it will automatically download the CSE as well.

You might need one or more strategies to get the PolicyPak Cloud Client installed,
because the installation must be performed as a local admin. Here are some strategies you can use:

- Before leaving On-Premises: While the computer is still connected to the On-Premise environment,
  you can use PDQ deploy, SCCM or MDT to get the PolicyPak Cloud client installed.

- Over a VPN: If you have a software deployment tool and your Windows machine can connect via VPN,
  PolicyPak Cloud will install perfectly fine using remote installation tools via VPN.

:::note
You can also use PolicyPak Least Privilege Manager to enable non-Admins to
be able to install the PolicyPak Cloud client themselves (provided the PolicyPak CSE is pre-installed.) See this video for more details:
[Install the PP Cloud client with a PP Least Priv Manager Rule](/docs/policypak/deliverymethods/cloud/videos/tipsandtricks/leastprivilegemanagerrule.md)
:::


If the user is an admin (Not recommended)

Regardless of where the computer is located, onsite or remote as long as the user is a local
administrator on the computer and has access to the PPC Client MSI installation file the user can
install the PPC Client.  This isn't recommended however, because Admins can do anything to the
machine including uninstall any software or make any changes.

Remote Assistance

Regardless of where the computer is located, on site or remote as long as the computer has internet
access, and remote access or assistance enabled, you could act as a remote user with local
administrator privileges on the computer can connect remotely and install the PPC Client.

If the computer is enrolled in MDM

If the computer is enrolled and managed in an MDM solution then the PPC Client MSI file can be
deployed remotely to the computer.

If the computer is also connected to an RMM tool: Most RMM tools have a way to deploy other
software; you could get the PPC Client MSI file deployed this way.


