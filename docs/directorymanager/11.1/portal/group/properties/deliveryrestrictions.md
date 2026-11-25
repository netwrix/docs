---
title: "Restrict who can email a Directory Manager group"
description: "Control which users, contacts, and groups can or can't send email to a group by using the Accept from and Reject from lists."
keywords:
  - delivery restrictions
  - Accept from list
  - Reject from list
  - group email restrictions
sidebar_position: 50
---

# Restrict who can email a Directory Manager group

Use this tab to apply email restrictions to this group. You can manage the list of objects (users, contacts, groups) from whom this group can and can't receive emails.

By default, no object is added to the **Accept from** and **Reject from** lists, which indicates that the group can receive emails from any object. However, when you specify an object in the **Accept from** list, the group receives emails from that object only.

**Example:**

To have the group receive emails from all except one member (Member A) of a group (Group A), add Group A to the Accept from list and then add Member A to the Reject from list.

## Lists and actions

- **Accept from**: Shows the objects that can send emails to the group.
- **Reject from**: Shows the objects whose emails aren't delivered to the group.
- **Add**: To add an object to a list, click **Add** in the respective area. Enter a search string to locate the required object. Or click **Advance** to use the [Find Users, Groups, and Contacts in Directory Manager](/docs/directorymanager/11.1/portal/generalfeatures/find.md) for performing a search.
- **Remove**: To remove an object from a list, select it and click **Remove** in the respective area.
