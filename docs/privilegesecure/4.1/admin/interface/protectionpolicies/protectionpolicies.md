---
title: "Protection Policies Page"
description: "Protection Policies Page"
sidebar_position: 10
---

# Protection Policies Page

Protection policies are used to protect specific resources and can only be accessed by specific
users and groups. Essentially, all members who are not specified in the
[Allowed Members Tab for Protection Policies](/docs/privilegesecure/4.1/admin/interface/protectionpolicies/allowedmembers.md)
are removed from the resource.

Protection policies can also be created to reserve resources for specific people or groups such as
executive team resources, business critical resources or shared resources.

The Protection Policies page is accessible from the Navigation pane under Policy. It shows the
configured protection policies, which are used to monitor local groups on a resource for changes.
Only users or groups added to the protection policy are permitted. When the resource is scanned, any
local group members that are not listed on the
[Allowed Members Tab for Protection Policies](/docs/privilegesecure/4.1/admin/interface/protectionpolicies/allowedmembers.md)
are removed from the resource.

It is also possible to add the action _Invoke Protection Policy_ to the Post Session group of an
activity. This will proactively run all protection policies that apply to the target resource when
the session completes, instead of waiting for the scheduled sync. See the
[Activities Page](/docs/privilegesecure/4.1/admin/interface/activities/activities.md)
topic for additional information.

![Protection policies page](/images/privilegesecure/4.1/accessmanagement/admin/policy/page/page_4.webp)

The pane on the left side of the page displays a list of the configured protection policies. This
pane has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Blue + button — Create a new protection policy. See the Add Protection Policy topic for additional
  information.
- Copy icon — Create a new protection policy based on the current selection. Icon appears when the
  policy is hovered over.
- Trashcan icon — Deletes the protection policy. Icon appears when policy is hovered over. A
  confirmation window will display.

The selected protection policy details display at the top of the main pane:

- Name — Displays the name of the policy
- Description — Description of the policy

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

When a protection policy is selected, the following tabs are displayed for the selected policy:

- [Resources Tab for Protection Policies](/docs/privilegesecure/4.1/admin/interface/protectionpolicies/resources/resources.md)
- [Allowed Members Tab for Protection Policies](/docs/privilegesecure/4.1/admin/interface/protectionpolicies/allowedmembers.md)
- [Schedule Tab for Protection Policies](/docs/privilegesecure/4.1/admin/interface/protectionpolicies/schedule.md)
