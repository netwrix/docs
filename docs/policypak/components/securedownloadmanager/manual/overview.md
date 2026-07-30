---
title: Secure Download Manager (Windows)
description: Configure PolicyPak Secure Download Manager on Windows using on-premises Group Policy.
sidebar_position: 10
---

# Secure Download Manager (Windows)

## About PolicyPak Secure Download Manager

Before reading this section, ensure you have read the
[Installation Quick Start](/docs/policypak/gettingstarted/overviewinstall/overviewinstall.md)
topics, which help you learn to do the following:

- Install the Admin MSI on your GPMC machine
- Install the CSE on a test Windows machine
- Set up a computer in Trial or Licensed mode
- Set up a common OU structure

Optionally, this manual demonstrates how to use on-premises Active Directory and Group Policy to
deploy Secure Download Manager directives. If you don't want to use Group Policy, read the
[MDM & UEM Tools](/docs/policypak/gettingstarted/mdmmanual/overview.md) topics for additional
information on how to deploy your directives.

With PolicyPak Secure Download Manager, you can do the following:

- Prevent users from executing files immediately after downloading them from the internet.
- Apply download execution protection globally across all supported browsers from a single
  Computer-side policy.
- Configure Exclusions Policies to allow execution for trusted websites or specific file
  extensions, per machine or per user.
- Use Item Level Targeting on individual Exclusions Policies for fine-grained control.
- Enforce protection on domain-joined machines through Group Policy, or on non-domain-joined
  machines through PolicyPak Cloud or MDM.

For example, a user downloads an installer from an untrusted site and tries to run it directly
from the browser's download bar. Without Secure Download Manager, that file executes
immediately. With the policy enabled, Secure Download Manager blocks the execution, and the user
sees a configurable notification — the file itself remains available in the Downloads folder.

:::note
Secure Download Manager is supported for Google Chrome, Microsoft Edge, Opera, and Mozilla
Firefox. It uses the same PolicyPak CSE already deployed for other components — no additional
installation is required on endpoints.
:::

## Components

Before configuring Secure Download Manager, understand its components:

- **Management station.** The PolicyPak Admin Console MSI must be installed on the machine where
  you create GPOs. Once installed, you see the **PolicyPak | Secure Download Manager** node
  under **Computer Configuration** in the Group Policy editor.

- **PolicyPak CSE.** The client-side extension runs on each target endpoint and is the same CSE
  used by all PolicyPak components. No separate CSE is required for Secure Download Manager.

- **Windows Endpoints.** Machines must be licensed for Secure Download Manager using one of the
  standard PolicyPak licensing methods.

- **Supported Browsers.** Secure Download Manager intercepts download execution events in
  Google Chrome, Microsoft Edge, Opera, and Mozilla Firefox. Secure Download Manager doesn't affect other browsers.

## Policy Types

Secure Download Manager uses two distinct policy types within a collection:

| Policy Type | Purpose | Scope | ILT |
|---|---|---|---|
| **Global Settings** | Enables the component, configures notifications and email alerts | Computer side only | Not supported |
| **Exclusions Policy** | Permits execution of downloads matching a URL pattern and/or file extension | Computer or User side | Supported |

Only one Global Settings instance is allowed per collection. You can add multiple Exclusions
Policies to the same collection.

## Basic Workflow

1. Click **Specify Global Settings P...** in the Actions panel to enable the component and
   configure notification and email behavior.
2. Click **Add New Exclusions Policy** to define which websites or file types are permitted
   to execute after download.
3. Run `gpupdate /force` on a test endpoint, or wait for the next Group Policy refresh cycle.
4. Verify by downloading a test file in a supported browser.

Alternatively, export the Secure Download Manager policy and deliver it using:

- **Microsoft SCCM** — wrap the exported XML with the PolicyPak Exporter tool.
- **Microsoft Intune** — use the PolicyPak Exporter tool; see the
  [MDM & UEM Tools](/docs/policypak/gettingstarted/mdmmanual/overview.md) topics.
- **PolicyPak Cloud** — create and deliver policies from the cloud console to domain-joined and
  non-domain-joined machines.

:::note
If you use an MDM service or PolicyPak Cloud, you can deliver Secure Download Manager settings
to non-domain-joined machines over the internet.
:::

For detailed field-by-field configuration, see
[Configuring Global Settings and Exclusions Policies](/docs/policypak/components/securedownloadmanager/manual/configuration.md).
