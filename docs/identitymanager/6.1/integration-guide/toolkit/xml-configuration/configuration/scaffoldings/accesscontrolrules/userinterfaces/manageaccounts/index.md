---
title: "ManageAccounts"
description: "ManageAccounts"
sidebar_position: 10
---

# ManageAccounts

Gives access to the **Manage Accounts** buttons for the users of a given entity type.

![ManageAccounts Button](/images/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/userinterfaces/manageaccounts/accesscontrol_manageaccounts_v603.webp)

The scaffolding gives access to the button, but you need to get the permissions on said accounts in
order to see anything once you click on the button.

## Examples

The following example gives the `Administrator` profile access to the **Manage Accounts** button for
users from `Directory_User`.

```

**<ManageAccounts EntityType="Directory_User" Profile="Administrator"/>**

In order to see AD accounts once clicking on the button:
<AccessControlRule Profile="HELPDESK" EntityType="AD_Entry" Identifier="HELPDESK_PWR_AD_Entry" DisplayName_L1="HELPDESK_PWR_AD_Entry">  <Entry Permission="/Custom/Resources/AD_Entry/View" CanExecute="true" />  <Entry Permission="/Custom/Resources/AD_Entry/ResetPassword" CanExecute="true" />  <Entry Permission="/Custom/Resources/AD_Entry/IndirectResetPassword" CanExecute="true" />  <Entry Permission="/Custom/Resources/AD_Entry/ToggleLock" CanExecute="true" />  <Entry Permission="/Custom/Resources/AD_Entry/ChangePassword" CanExecute="true" /></AccessControlRule>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Workforce/Administration/Directory_User_ManageAccounts_ManageAccounts_Directory_User" DisplayName_L1="Workforce/Administration/Directory_User_ManageAccounts_ManageAccounts_Directory_User" EntityType="Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ManageAccounts/Directory_User" /></AccessControlRule>

```
