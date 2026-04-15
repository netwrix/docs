---
title: "How does the Netwrix Privilege Secure MMC UI relate to the PolicyPak MMC UI?"
description: "How does the Netwrix Privilege Secure MMC UI relate to the PolicyPak MMC UI?"
sidebar_position: 20
---

# How does the Netwrix Privilege Secure MMC UI relate to the PolicyPak MMC UI?

In the Netwrix Privilege Secure download you will find NPS for Endpoint Group Policy Snap-in x64 and
x86 installers.

![972_1_image](/images/policypak/integration/privilegesecure/972_1_image.webp)

This MSI is meant to increase what is possible with a Group Policy editor and let you create NPS
Endpoint rules (aka Netwrix PolicyPak Least Privilege Manager)
rules.

When you install the NPS Endpoint Group Policy Snap-In on a machine (which has the Group Policy
Editor and/or Group Policy Management Console) you will see the Netwrix Privilege Secure node and
Least Privilege Manager within it. All GPOs l have the same look and feel and editing ability.

![972_2_image-20230627090846-2_950x515](/images/policypak/integration/965_1_image-20230627091218-5_950x515.webp)

If you want to upgrade to PolicyPak and see both Netwrix Privilege Secure and all the
other PolicyPak nodes, you need to install the PolicyPak Admin Console.
This can be installed on top of the Privilege Secure Admin Console, or installed directly.

![972_3_image-20230627090846-3_950x70](/images/policypak/integration/privilegesecure/972_3_image-20230627090846-3_950x70.webp)

The result can be seen here with Netwrix Privilege Secure / Least Privilege Manager and all the
PolicyPak nodes.

![972_4_image-20230627090846-4_950x534](/images/policypak/integration/privilegesecure/972_4_image-20230627090846-4_950x534.webp)

The PolicyPak Admin Console MSI is a superset of the Privilege Secure Console MSI.

:::warning
It is technically possible to upgrade to the latest version of the Privilege Secure
Console MSI after installing some version of the PolicyPak Admin Console MSI. If you
do this, you will remove the PolicyPak nodes and be left only with the Netwrix
Privilege Secure node. Any PolicyPak data and directives will still be in the GPO and
active. Therefore it is recommended if you upgrade to PolicyPak Admin Console MSI,
then you maintain your console with upgrades only via the PolicyPak Admin Console MSI
and don't attempt a re-install of Privilege Secure Console MSI.

:::


