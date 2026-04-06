---
title: "Microsoft Entra ID Services FAQ"
description: "Microsoft Entra ID Services FAQ"
sidebar_position: 10
---

# Microsoft Entra ID Services FAQ

## Migrating from LDAP to Entra ID

, an automated migration from LDAP users (E2E as well as MasterKey) to Entra ID users is
not possible!

## SCIM endpoint port for provisioning users and groups from Entra ID

11015 is the port that will be used for the communication from Entra ID to Netwrix Password Secure.

## Entra ID connection support for nested groups

Due to Azure based technical limitations, Netwrix Password Secure doesn't support nested groups.

## Entra ID on internally available servers

An integration on servers, that aren't accessible from external sources, the integration of Entra
ID is also possible. For this, you can use the
[Entra ID on-premises application provisioning to SCIM-enabled apps](https://learn.microsoft.com/en-us/azure/active-directory/app-provisioning/on-premises-scim-provisioning).
This can be installed on all or only one application server. The IP or DNS
name of the "Tenent URL" specified in the subsequently created enterprise application is present in
the alternative application names in the server certificate. Tip: `https://127.0.0.1:11015/scim` can
also be specified as the "Tenent URL", in which case 127.0.0.1 must again be present in the
alternative application names in the server certificate.

- Download the Provisioning Agent
- Install the Provisioning Agent on the server with the Netwrix Password Secure Server
- Start "AAD Connect Provisioning Agent Wizard"
- Select "On-premises application provisioning Entra ID to application", click next
- Click "Authenticate" and authenticate with a user.This user should be a Hybrid administrator or a
  global administrator.
- Click "Confirm"
- Wait for the application to finish the registration in Azure
- Switch to the Azure Portal
- Click "Microsoft Entra ID"
- Click "Enterprise applications"
- Click "New application"
- Search for "On-premises SCIM app"
- Click "On-premises SCIM app"
- Adjust the name
- Click "Create"
- Wait for the operation to end
- Click the created application in the overview of "Enterprise applications"
- Click "Provisioning"
- Click "Get started"
- Set provisioning mode "Automatic"
- Unhide "On-Premises Connectivity"
- Assign the just installed agent to this application by selecting it and click "Assign Agents"
- It takes about 20 minutes until the agent is correctly connected to your application and you can
  proceed.
