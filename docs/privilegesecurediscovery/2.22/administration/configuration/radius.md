---
title: "RADIUS"
description: "RADIUS"
sidebar_position: 190
---

# RADIUS

RADIUS

# RADIUS

## Overview

This covers configuring Privilege Secure with RADIUS.

## Prerequisites

RADUIS setup in environment with the following information available:

- RADIUS Server IP or URL
- RADIUS Port
- RADIUS Secret

## Enter RADIUS Information

![mceclip0.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360052024333_mceclip0.webp)

## Enable RADIUS in Privilege Secure and Login Example

At the bottom of the Configure → Server -> Radius Configuration Panel, enable or disable Radius when
appropriate:

![mceclip1.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360052024333_mceclip1.webp)

For RADIUS Login:

- Enter AD domain\username for account
- Enter AD password for account
- For the Second Factor field, enter any alphanumeric character.
- Click [Sign In] button

While Privilege Secure is awaiting authentication with RADIUS you will see the button display 
"Signing In..."

![mceclip6.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360052024333_mceclip6.webp)

Authenticate with your RADIUS 2FA method and you will be logged into Privilege Secure.
