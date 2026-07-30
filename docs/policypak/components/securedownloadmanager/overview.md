---
title: Secure Download Manager
description: Prevent downloaded files from executing directly after download, reducing malware and unauthorized software risk on end-user machines.
sidebar_position: 1
---

# Secure Download Manager

PolicyPak Secure Download Manager lets you create a global policy that prevents downloaded files
from executing directly after they're downloaded from the internet. This reduces the risk of
malware and unauthorized software running on end-user machines without requiring you to remove
browser functionality or restrict access to websites.

As with other PolicyPak components, you can configure exclusions to allow execution for trusted
websites or specific file extensions, so you get protection without sacrificing flexibility.

:::note
Secure Download Manager is supported for **Google Chrome**, **Microsoft Edge**, **Opera**, and
**Mozilla Firefox**.
:::

## What Secure Download Manager Does

- Blocks direct execution of files downloaded from the internet.
- Applies a global policy across all supported browsers from a single management point.
- Allows fine-grained exclusions by trusted website or file extension.
- Works alongside your existing PolicyPak deployment — no additional client-side extension required.

## Before You Begin

Before reading this section, ensure you have read the
[Installation Quick Start](/docs/policypak/gettingstarted/overviewinstall/overviewinstall.md)
topics, which cover:

- Installing the Admin MSI on your GPMC machine
- Installing the CSE on a test Windows machine
- Setting up a computer in Trial or Licensed mode
- Setting up a common OU structure

## Delivery Methods

You can deliver Secure Download Manager policies using any standard PolicyPak delivery method:

- **On-premises Group Policy** — the approach demonstrated in this manual
- **Microsoft Intune / SCCM** — export directives as XML and wrap with the PolicyPak Exporter tool
- **PolicyPak Cloud** — manage domain-joined and non-domain-joined machines from the cloud

For details on non-Group Policy delivery, see the
[MDM & UEM Tools](/docs/policypak/gettingstarted/mdmmanual/overview.md) topics.

## In This Section

| Topic | Description |
|---|---|
| [Manual](/docs/policypak/components/securedownloadmanager/manual/overview.md) | Step-by-step configuration guide for on-premises Group Policy deployments |
| [Knowledge Base](/docs/policypak/components/securedownloadmanager/knowledgebase/knowledgebase.md) | Troubleshooting articles, tips, and frequently asked questions |
