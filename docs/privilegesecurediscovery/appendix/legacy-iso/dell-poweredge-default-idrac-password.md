---
title: "Dell PowerEdge default iDRAC password"
description: "Find the default user name and password of the integrated Dell Remote Access Controller (iDRAC) on Dell PowerEdge servers."
sidebar_position: 20
---

This page applies to ISO-based installations on Dell PowerEdge hardware. For the supported deployment method, see [Legacy ISO installation](./legacy-iso-installation.md).

Dell PowerEdge systems with an integrated Dell Remote Access Controller (iDRAC) have a default user name and password. You can also configure them with a secure password. For the source of this information, see Dell's article [What is the default username and password for iDRAC](https://www.dell.com/support/article/en-us/sln306783/dell-poweredge-what-is-the-default-username-and-password-for-idrac?lang=en).

## Default iDRAC login

In the default configuration of the iDRAC, the sign-in credentials are:

- User name: `root`
- Password: `calvin`

Change the default password after the first sign-in.

## Secure password

iDRAC9 supports a feature named secure password, which is available when you order the server.

- If you chose secure default access to iDRAC, the iDRAC secure password is on the back of the system information tag (Service Tag), under **iDRAC Default Password**.
- If you didn't choose secure default access, the default password is blank. In this case, the default user name and password (`root` and `calvin`) apply.
