---
title: "Choose where to look"
description: "Pick the platforms your organization uses so the first Netwrix 1Secure AI Security run connects only the sources you need."
sidebar_position: 3
---

# Choose where to look

In this step you pick the platforms your organization uses, so the first run connects only those. You can add more platforms later from the **Sources** page.

## Microsoft platforms

The **Microsoft Entra and Microsoft 365** row stands for every Microsoft platform. Selecting it selects Microsoft Entra ID, and with it Agent 365, Microsoft Copilot Studio, SharePoint agents, SharePoint Online, Power Platform, Azure AI Foundry, Azure RBAC, and Microsoft Defender for Endpoint, because they read with its app registration.

:::info
An organization reads one Microsoft tenant. To read another tenant, connect it in a second organization.
:::

## Pick your platforms

1. Under **Where could agents be running?**, read the list. **Microsoft Entra and Microsoft 365** comes first, and its row names the Microsoft platforms that hold agents. **All other platforms, A to Z** follow. To read about each platform's connector, click **Learn more** at the end of the sentence under the heading.
2. To find a platform, enter its name in **Search platforms**, or choose a **Category**.
3. Select each platform your organization uses. 1Secure marks each platform it detected as **Detected** and selects it.
4. Read the line at the bottom. It says how many sources you selected, and "Not monitored:" names each area no selected source covers.

   ![Choose where to look step with Where could agents be running?, Search platforms and Category, Microsoft Entra and Microsoft 365 selected above All other platforms, A to Z, and 1 source selected with Not monitored, Back, and Continue](/images/1secureaisecurity/getting-started/choose-where-to-look-step.webp)

5. Click **Continue**.

## What Detected means

1Secure marks a platform **Detected** when the sources already connected to AI Security show it in use. The platform's row says how 1Secure found it, for example "App consent in" a source, or how many users signed in with work accounts.
