---
title: "OAM Password Configuration"
description: "OAM Password Configuration"
sidebar_position: 110
---

# OAM Password Configuration

OAM Password Configuration

# OAM Password Configuration

## Overview

This document covers the available options of the Privilege Secure OAM password configuration. This
can be managed by individual domain.

## Main Document

In order to access the OAM password configuration open the Config, Server screen.

![Screen_Shot_2022-06-28_at_3.09.L40_PM.webp](/images/privilegesecure/4.2/discovery/admin/configuration/7098780929815_screen_shot_2022-06-28_at_3.09.40_pm_213x189.webp)

Open the domain configuration by clicking the chevron to expose the details.

The configuration details for the OAM password settings are detailed in the right hand side of the
screen at the bottom:

![Screen_Shot_2022-08-15_at_12.40.L42_PM.webp](/images/privilegesecure/4.2/discovery/admin/configuration/7098780929815_screen_shot_2022-08-15_at_12.40.42_pm.webp)

The frequency can be adjusted to avoid the scanner from setting the password on each scan (this
action is to ensure that the password remains the same as stored in Privilege Secure). This boosts
the speed of scanning, suitable in very large organizations.

## Addendum

The alternate administrator OAM account created by Privilege Secure is a local account. Privilege
Secure **does not** use the account to log into the system. Privilege Secure **does not** have the
ability to lock the OAM account. Typically, any local account is either locked by an Administrator
OR exceeded the threshold for failed login attempts. 
If the system can no longer be access via a domain account because the system lost trust or left the
domain, and the alternate administrator OAM account is locked, windows Safe Mode can be used to
login with the disabled Administrator (RID 500) account.
