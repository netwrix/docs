---
title: "How to Install the Endpoint Policy Manager MacOS Client"
description: "How to Install the Endpoint Policy Manager MacOS Client"
sidebar_position: 10
---

# How to Install the Endpoint Policy Manager MacOS Client

After logging into Endpoint Policy Manager Cloud, head to Company Details, locate Download PolicyPak
Cloud Client for MacOS Installer, and follow the directions.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/mac/how_to_install_the_endpointpolicymanager.webp)

Then follow the directions on the Mac and the Endpoint Policy Manager Least Privilege Manager pieces
contained within the Endpoint Policy Manager Cloud Client.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/mac/how_to_install_the_endpointpolicymanager_1.webp)

Then use the details provided earlier to install the certificate and register with the Endpoint
Policy Manager Cloud service.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/mac/how_to_install_the_endpointpolicymanager_2.webp)

## Endpoint Policy Manager Commands after Installation

Endpoint Policy Manager on Mac has a variety of commands you can perform.  Start with
`policypak –help` to see all the commands which might be different than what is presented here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/mac/how_to_install_the_endpointpolicymanager_3.webp)

A few important commands to try out would be:

`Policypak cloud-sync` which shows the list of policies affecting this Mac. Tip: This command may be
run by any user (without Sudo / admin rights.)

![A black screen with white text Description automatically generated](/images/endpointpolicymanager/mac/how_to_install_the_endpointpolicymanager_4.webp)

`Policypak license-list –verbose` to get the license list from Cloud service.

![A computer screen with white text Description automatically generated](/images/endpointpolicymanager/mac/how_to_install_the_endpointpolicymanager_5.webp)

And `policypak policy-list` to get a total list of what is happening on the machine.

![Inserting image...](/images/endpointpolicymanager/mac/how_to_install_the_endpointpolicymanager_6.webp)

Mac policies are then created in the in-cloud editors against the All | MacOS groups or any Company
Groups’ macOS group like what’s seen here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/mac/how_to_install_the_endpointpolicymanager_7.webp)



