---
title: "Configuring Tagging"
description: "Configuring Tagging"
sidebar_position: 10
---

# Configuring Tagging

For a SharePoint source, tagging means the automatic population of
[managed metadata fields](https://docs.microsoft.com/en-us/sharepoint/managed-metadata) with
classification attributes from **SharePoint Term Sets** that were registered as taxonomies within
Netwrix Data Classification.

To configure tagging for your SharePoint source, you should first check the prerequisites and take
preparatory steps described below. Then you will be able to launch a specially designed SharePoint
Tagging Wizard.

**To check the prerequisites**

1. Make sure you have set up the necessary term sets as described in
   [this Microsoft article](https://docs.microsoft.com/en-us/sharepoint/set-up-new-term-set).
2. Configure one or more managed metadata columns with the libraries that you plan to apply
   auto-classification to. See
   [this Microsoft article](https://support.office.com/en-gb/article/create-a-managed-metadata-column-8fad9e35-a618-4400-b3c7-46f02785d27f)
   for details.
3. Ensure that the desired term sets are registered as taxonomies within the Netwrix Data
   Classification console. See **Importing Taxonomies - SharePoint** section in for details.
4. Ensure that the appropriate SharePoint product is installed in your SharePoint environment
   (typically, the provider-hosted add-In named _conceptClassifierApp_; see the procedure below for
   details).
   This add-on provides a specially designed Wizard that assigns taxonomies to Content Types in
   SharePoint. It also creates the necessary event handlers to keep the classification up to date as
   new documents are added and existing documents are edited.

**To configure tagging using the wizard**

1. Click on the app to start the **SharePoint Tagging wizard**.

![sharepoint_tagging_wizard_1_thumb_0_0](/images/dataclassification/5.7/configuration/configinfrastructure/sharepoint_tagging_wizard_1_thumb_0_0.webp)

2. Configure the Term Sets that you wish to auto-classify. For that, click the **Add** button and
   then select the required Term Sets or fields:

    ![sharepoint_tagging_wizard_2_thumb_0_0](/images/dataclassification/5.7/configuration/configinfrastructure/sharepoint_tagging_wizard_2_thumb_0_0.webp)

3. If needed, select the specific site/list columns you wish to restrict auto-classification to.
4. Confirm the selection.
5. Finally, having configured the desired tagging, you should re-classify the appropriate content —
   for the tags to be written back to SharePoint.
