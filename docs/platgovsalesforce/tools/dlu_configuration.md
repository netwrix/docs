---
title: "DLU Configuration"
description: "DLU Configuration User Guide"
sidebar_position: 110
---

# DLU Configuration

## Overview

The DLU Configuration tool provides comprehensive support for the Date Last Use (DLU) Scheduler in Netwrix for Salesforce.

## Accessing DLU Configuration

Navigate to **Netwrix Dashboard** > **Scanner** > **DLU Configuration**.

![DLU Configuration Menu](/images/platgovsalesforce/dlu_configuration/DLU_Menu.webp)

## General Configuration

The General Configuration section allows administrators to select which Salesforce metadata types the DLU batches should process.

![DLU General Configuration](/images/platgovsalesforce/dlu_configuration/DLU_General_Configuration.webp)

- Only metadata types currently supported by the DLU Scanner are displayed. Unsupported Salesforce types are not shown and cannot be selected.
- Once selected, the scheduler will process only the chosen types. If no types are selected, the DLU Scanner will process all supported types shown in the list.

## Custom Fields Configuration

The Custom Fields Configuration section provides granular, field-level control.

![DLU Custom Fields Configuration](/images/platgovsalesforce/dlu_configuration/DLU_Custom_Fields.webp)

Administrators can:
- Choose whether to search for Standard Fields or Custom Fields
- Select specific fields
- Save their preferences

Only the selected fields will be processed by the DLU Scanner, allowing customers to focus on what they want and reduce unnecessary processing.

## How the Configuration Is Used

The DLU Scanners use the saved configuration to determine which Salesforce metadata types, objects, and fields are included in each scheduled execution.

Any changes made in the DLU Configuration are applied to subsequent scanner runs.

## DLU Scanner Scheduler Configuration

To ensure the DLU Scanner runs automatically, you must configure and enable the scheduler.

### Steps to configure the scheduler:

1. Navigate to **Netwrix Dashboard** > **Scanner** > **Scheduler**.

    ![Scheduler Menu](/images/platgovsalesforce/dlu_configuration/Scheduler_Menu.webp)

2. Locate the DLU Scanner in the scheduler list.

    ![DLU Scheduler Configuration](/images/platgovsalesforce/dlu_configuration/Scheduler.webp)

3. Configure the execution frequency according to your organization's requirements.
4. Enable the scheduler by selecting the highlighted option.
5. Save the configuration.

Once enabled, the scheduler will execute the DLU Scanner according to the configured frequency and use the settings defined in DLU Configuration.

:::note
If the scheduler is disabled, no DLU scans will run, even if the DLU Configuration is correctly defined.
:::