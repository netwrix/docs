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
- Action – Specify whether to add or remove tags. If you don't specify, Threat Manager adds the tag.
- Objects – Select which objects to tag. If you don't specify, Threat Manager uses the user who
  triggered the threat.

### Manage Blocking Policy

This action adds or removes a user from a blocking policy.

![manageblockingpolicy](/images/threatmanager/3.0/administration/playbooks/action/manageblockingpolicy.webp)

- Users – The users to have their RDP Session ended. If you don't specify, Threat Manager uses the
  user who triggered the threat. Select the users from the dropdown list.
- Credential – The domain credential used to run the action. Credential profiles created on the
  Integrations page populate the domain credentials. If you don't specify, the action runs
  under the credentials of the action. Select the credentials from the dropdown list.
- Policy Name - The name of the Threat Prevention blocking policy.
- Operation - Whether to add or remove the user from the blocking policy.
