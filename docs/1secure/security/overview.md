---
title: "Security"
description: "Security"
sidebar_position: 70
---

# Overview

Netwrix 1Secure implements multiple layers of security to protect your data and ensure compliance with industry standards.

## Physical Security

Netwrix 1Secure runs on Microsoft Entra infrastructure. Click
[here](https://azure.microsoft.com/en-us/overview/trusted-cloud/) to learn more about Entra cloud
security, or click [here](https://azure.microsoft.com/en-us/overview/trusted-cloud/compliance/) to
view all Entra compliance certifications.

## Network Security

The Azure SQL database used to store the data is isolated from direct access. We use firewall rules
that prevent database access to the API backend services running in Microsoft Entra ID.

All API access happens on behalf of specific user accounts in Microsoft Entra ID.
