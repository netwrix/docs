---
description: >-
  This article explains the "The specified network name is no longer available"
  error (Event ID 5037) that can appear in Health Log for a Logon Activity
  monitoring plan in Netwrix Auditor and provides steps to diagnose and resolve
  it, including commands to review and rename domain controller computer names
  and update DFSR objects.
keywords:
  - Netwrix Auditor
  - Logon Activity
  - Event ID 5037
  - specified network name is no longer available
  - domain controller
  - netdom
  - DFSR
  - SYSVOL
  - audit policies
products:
  - auditor
sidebar_label: Specified Network Name Is No Longer Available Erro
tags: []
title: "Specified Network Name Is No Longer Available Error in Logon Activity Monitoring"
knowledge_article_id: kA00g000000H9eSCAS
---

# Specified Network Name Is No Longer Available Error in Logon Activity Monitoring

## Symptom

The following error is prompted in Health Log for your Logon Activity monitoring plan in Netwrix Auditor:

```
Source:Active Directory Logon Activity Audit Service
Event ID: 5037
Description:Monitoring plan: %Logon_Activity_monitoring_plan_name%. 
Domain: %domain%.
Unable to configure the Hub Service on the server '%DCName.Domain.local%'. Error: The specified network name is no longer available
```

## Causes

The affected domain controller name cannot be resolved. Refer to the following list of possible causes:

- Misconfigured ports for the Logon Activity monitoring.
- Misconfigured audit policies.
- Misconfigured data collecting account permissions.
- The name of the affected domain contoller has been changed.

## Resolutions

- Review the ports configured for the Logon Activity monitoring — refer to the following link for additional information: https://docs.netwrix.com/docs/auditor/10_8/configuration/logonactivity/overview (Logon Activity − Logon Activity Ports ⸱ v10.6).
- Review the audit policies set up in your environment — refer to the following links:
  - https://docs.netwrix.com/docs/auditor/10_8/configuration/logonactivity/overview (Logon Activity − Configure Basic Domain Audit Policies ⸱ v10.6)
  - https://docs.netwrix.com/docs/auditor/10_8/configuration/logonactivity/overview (Logon Activity − Configure Advanced Audit Policies ⸱ v10.6)
- Review the permissions for your Logon Activity data collecting account — refer to the following article for additional information on requirements: https://docs.netwrix.com/docs/auditor/10_8/configuration/logonactivity/overview (Logon Activity − Permissions for Logon Activity Auditing ⸱ v10.6).

In case the error occurred after a recent domain controller name change, review the following steps:

IMPORTANT: The affected domain controller name is provided in the error message. In the command samples provided below, the **DCName.Domain.local** name will be used. Make sure to replace it with the appropriate FQDN for your domain controller.

1. Launch elevated Command Prompt.
2. To review computer names applied to a particular DC, run the following command:

```bat
netdom computername DCName.Domain.local /enumerate
```

3. To select the primary name for your domain controller, run the following command:

```bat
netdom computername DCName.Domain.local /makeprimary:%new_primary_DC_name%
```

4. To remove the old name, run the following command:

```bat
netdom computername %new_primary_DC_name% /remove:DCName.Domain.local
```

5. To confirm the changes have been applied, run the following command:

```bat
netdom computername %new_primary_DC_name% /enumerate
```

The domain controller should now have the appropriate computer name. Next, update the DFSR member object:

1. Open **Active Directory Users and Computers**.
2. In the **View** menu, select **Advanced Features**.
3. If SYSVOL is replicated via DFSR, expand the **System** node > **DFSR-GlobalSettings** > **Domain System Volume** > **Topology**.
4. Right-click the object named after the old DC name, and select **Rename**.
5. Specify the new DC name, and save the new name.

Once completed, this will ensure the renamed domain controller is able to replicate the SYSVOL contents.

## Related articles

- Logon Activity − Logon Activity Ports ⸱ v10.6  
  https://docs.netwrix.com/docs/auditor/10_8/configuration/logonactivity/overview

- Logon Activity − Configure Basic Domain Audit Policies ⸱ v10.6  
  https://docs.netwrix.com/docs/auditor/10_8/configuration/logonactivity/overview

- Logon Activity − Configure Advanced Audit Policies ⸱ v10.6  
  https://docs.netwrix.com/docs/auditor/10_8/configuration/logonactivity/overview

- Logon Activity − Permissions for Logon Activity Auditing ⸱ v10.6  
  https://docs.netwrix.com/docs/auditor/10_8/configuration/logonactivity/overview
