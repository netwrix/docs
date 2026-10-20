---
title: "Create/Edit a Configuration Monitoring Policy"
description: "Create/Edit a Configuration Monitoring Policy"
sidebar_position: 20
---

# Create/Edit a Configuration Monitoring Policy

A **Configuration Monitoring Policy** template comprises a wide range of attributes that Netwrix
Change Tracker can monitor, including Files/Folders and File Contents; Registry Keys/Values;
Installed Software and Updates; Processes and Services (Running and Startup states); Security and
Audit Policy\*; and Local User Accounts (\* Windows platforms only).

Netwrix Change Tracker provides templates for all standard platforms, based on trusted guidance
from the Center for Internet Security, for configuring File Integrity Monitoring (FIM) policies.

- To create a new Configuration Monitoring Template, upload a Netwrix-provided template file or
  click **+ Add a Template**.

- To edit a template, click **Edit** next to the template name.

For a custom policy, for example, to protect the integrity of a bespoke application, you specify
the paths and files to track along with the file/folder-match specification to use. Select a
pre-defined match specification from a dropdown menu instead of writing commands or regular
expressions to target the tracking.

You can define exclusions the same way, with or without a file/folder-match specification. This
approach also applies to Registry tracking, so you can target precisely the keys and values you
need to track.

This results in a precise, tailor-made monitoring policy that tracks changes only where required,
eliminating spurious changes and unwanted change noise.
