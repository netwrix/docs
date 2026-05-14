---
title: "Security"
description: "Security"
sidebar_position: 70
---

# Overview

Netwrix 1Secure implements multiple layers of security to protect your data and ensure compliance with industry standards.

## Physical Security

Netwrix 1Secure runs on Microsoft Entra infrastructure. See the
[Microsoft Azure trusted cloud overview](https://azure.microsoft.com/en-us/overview/trusted-cloud/)
for details about Entra cloud security, or the
[Microsoft Azure compliance documentation](https://azure.microsoft.com/en-us/overview/trusted-cloud/compliance/)
for all Entra compliance certifications.

## Network Security

The Azure SQL database used to store the data is isolated from direct access. Firewall rules
prevent database access to the API backend services running in Microsoft Entra ID.

All API access happens on behalf of specific user accounts in Microsoft Entra ID.
