---
description: >-
  Collections fail with an error indicating insufficient permissions when
  Netwrix Auditor attempts to save a VMware Virtual Center snapshot. This
  article explains the required permissions and steps to grant Read-only access.
keywords:
  - vmware
  - virtual center
  - snapshot
  - permissions
  - read-only
  - vSphere
  - Connect As
  - Netwrix Auditor
  - Managed Object Browser
products:
  - auditor
sidebar_label: Error saving current VMware Virtual Center snapsho
tags: []
title: "Error saving current VMware Virtual Center snapshot: Permission to perform this operation was denied"
knowledge_article_id: kA00g000000H9aQCAS
---

# Error saving current VMware Virtual Center snapshot: Permission to perform this operation was denied

## Symptoms

Collections fail with the following error: `Error saving current VMware Virtual Center snapshot Permission to perform this operation was denied`

## Cause

There are not enough permissions for the **Connect As** account specified in the product configuration to read the Managed Object Browser of the Virtual Center Server or ESXi host specified.

This can occur when the account configured in Netwrix Auditor does not have sufficient privileges to browse the vSphere inventory.

## Resolution

The **Connect As** account must have at least **Read-only** access at the datacenter level if monitoring a VC or at the host level if monitoring only a host.

1) To assign this permissions right click the proper node of the vSphere hierarchy and select **Add Permission**.  
2) On the right hand side of the **Add Permissions** window you will have a list of **Assigned Roles**. Select the **Read-Only role**.  
3) On the left hand side you will see **Users and Groups**. Click the **Add** button.  
4) Type in the **account name** that you would like to give Read-Only permissions and hit **Okay**.
