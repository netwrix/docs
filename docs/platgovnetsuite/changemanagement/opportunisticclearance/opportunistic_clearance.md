---
title: "Opportunistic Clearance"
description: "Opportunistic Clearance"
sidebar_position: 180
---

# Opportunistic Clearance

Many non-compliant change logs are generated due to one or more related objects not being included
in a Change Request. You can set up to automatically clear low risk non-compliant changes that meet
specific criteria. By default, opportunistic clearance is not enabled. To enable it:

1. Open **Strongpoint** > **Strongpoint Support** > **Installation Settings**
2. Click **Edit** to open **Configuration and Stats**.
3. Select the **Change Management** tab.
4. Select **Enable Opportunistic Clearance**.

Automatic clearance applies in these cases:

- Deployment or Library Script changes related to an Approved Script Change.
- Field changes related to an Approved Record Change.
- Record changes related to an Approved Field Change.
- Search changes related to an Approved Workflow Change.
- Help or Description text updates. These changes are always compliant. This object change is
  reported in the Change Log as **Documentation Change** for the **Change Type** and the
  **Resolution** set to _Automatically cleared documentation change. Only Help or Description
  changed_. The Change Log is closed.

### Deployment or Library Script Changes related to an Approved Script Change

Deployment or library script changes must meet these rules to be automatically cleared:

- Customization is a deployment or library script with one of the following:
    - Script has an Open Approved Change Request.
    - Main script has an Open Approved Change Request.
- Change Request **Stage** meets the required [Policy Change Level](/docs/platgovnetsuite/changemanagement/setting_up_policies.md).

If all rules are met, the Change Request is attached to the Change Log and the log is compliant. The
**Resolution Description** in the Change Log is set to **Automatically cleared in existing Open
Approved CR via related customization [**_Object Name_**(**_ScriptID_**)]**. The _Object Name_ and _ScriptID_ are inserted from the original Change Request. The deployment or library script
does not need to be present in any Open Approved Change Request.
[Example Script Use Case](/docs/platgovnetsuite/changemanagement/opportunisticclearance/example_deploy_script_related_approved_change.md)

### Field Changes related to an Approved Record Change

Field changes must meet these rules to be automatically cleared:

- Customization is a field with one of the following:
    - Field has an Open Approved Change Request
    - Field has no script or workflow dependencies and the parent record has an Open Approved Change
      Request.
- Change Request **Stage** meets the required [Policy Change Level](/docs/platgovnetsuite/changemanagement/setting_up_policies.md).

If all rules are met, the Change Request is attached to the Change Log and the log is compliant. The
**Resolution Description** in the Change Log is set to **Automatically cleared in existing Open Approved CR via related customization [**_Field Name_**]**. The _Field Name_ is inserted from the
original Change Request. The field does not need to be present in any Open Approved Change Request.
[Example Field Change Use Case](/docs/platgovnetsuite/changemanagement/opportunisticclearance/example_field_changes_related_approved_change.md)

### Record Changes related to an Approved Field Change

Record changes must meet these rules to be automatically cleared:

- Customization is a record with one of the following:
    - Record has an Open Approved Change Request
    - Record has no script **or** workflow dependencies and any field that has the record as a
      parent has an Open Approved Change Request.
- Change Request **Stage** meets the required [Policy Change Level](/docs/platgovnetsuite/changemanagement/setting_up_policies.md).

If all rules are met, the Change Request is attached to the Change Log and the log is compliant. The
**Resolution Description** in the Change Log is set to **Automatically cleared in existing Open Approved CR via related customization [**_Record Name_**]**. The _Record Name_ is inserted from
the original Change Request. The record does not need to be present in any Open Approved Change
Request. [Example Record Change Use Case](/docs/platgovnetsuite/changemanagement/opportunisticclearance/example_record_changes_related_approved_change.md)

### Search Changes related to an Approved Workflow Change

Approved Workflow changes must meet these rules to be automatically cleared:

- Customization is a search with an Open Approved Change Request, or **all** of the following:
    - Search is used in a workflow.
    - Search is not used by any script.
    - Related Workflow has an Open Approved Change Request.
- Change Request **Stage** meets the required [Policy Change Level](/docs/platgovnetsuite/changemanagement/setting_up_policies.md).

If all rules are met, the Change Request is attached to the Change Log and the log is compliant. The
**Resolution Description** in the Change Log is set to **Automatically cleared in existing Open Approved CR via related customization [**_Search Name_**]**. The _Search Name_ is inserted
from the original Change Request.The search does not need to be present in any Open Approved Change
Request.[ Example Search Change Use Case](/docs/platgovnetsuite/changemanagement/opportunisticclearance/example_search_changes_related_approved_change.md)
