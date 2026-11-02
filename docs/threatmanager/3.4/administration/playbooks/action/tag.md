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
- Action – Specify whether to add or remove tags. If you don't specify one, the action adds the tag.
- Objects – Select which objects to tag. If you don't specify one, the action uses the user who triggered the threat. For each tagged object, such as the perpetrator, host, client, or affected objects, the
  action sends the object's unique name with its ID. The action removes duplicate IDs.

### Manage Blocking Policy

This action adds or removes a user from a blocking policy.

![manageblockingpolicy](/images/threatmanager/3.0/administration/playbooks/action/manageblockingpolicy.webp)

- Users – The users whose RDP Session ends. If you don't specify one, the action uses the user who triggered the
  threat. Select the users from the dropdown list. {/* TODO: this description was copied from End User Session; confirm the Manage Blocking Policy wording against the code. */}
- Credential – The domain credential that runs the action. Credential profiles that you create on the Integrations page populate the domain credentials. If you don't specify one, the action runs under its own credentials. Select the credentials from the dropdown list.
- Policy Name - The name of the Threat Prevention blocking policy.
- Operation - Whether to add or remove the user from the blocking policy.
