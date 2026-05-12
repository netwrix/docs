---
title: "Tag Threat Actions"
description: "Tag Threat Actions"
sidebar_position: 40
---

# Tag Threat Actions

The following action targets Threat Manager.

### Tag Object

This action adds tags to objects associated with a threat.

![tagobject](/images/threatmanager/3.0/administration/playbooks/action/tagobject.webp)

- Tags – Select the tags to apply to the object.
- Action – Specify whether to add or remove tags. If not specified, Threat Manager adds the tag.
- Objects – Select which objects to tag. If not specified, the user who triggered the threat is
  used.

### Manage Blocking Policy

This action adds or removes a user from a blocking policy.

![manageblockingpolicy](/images/threatmanager/3.0/administration/playbooks/action/manageblockingpolicy.webp)

- Users – The users to have their RDP Session ended. If not specified, the user who triggered the
  threat is used. Select the users from the dropdown list.
- Credential – The domain credential used to run the action. Domain credentials are populated by
  credential profiles that are created on the Integrations page. If not specified, the action runs under the default action credentials. Select the credentials from the dropdown list.
- Policy Name - The name of the Threat Prevention blocking policy.
- Operation - Whether to add or remove the user from the blocking policy.
