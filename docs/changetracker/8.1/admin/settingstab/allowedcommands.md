---
title: "Allowed Commands"
description: "Allowed Commands"
sidebar_position: 60
---

# Allowed Commands

The Change Tracker agent is designed to run commands on devices to baseline and analyze
configuration settings, either for Compliance Reports or Policy Templates.

It is important to ensure that only authorized commands can be used to avoid any unintended
consequences. Change Tracker provides a stringent approval process for any new commands being
introduced, either for a report or policy template, and all reports/templates are analyzed to ensure
all commands used are approved.

If a new command is encountered, this will be flagged as such:

![allowedcommands](/images/changetracker/8.1/admin/settings/allowedcommands.webp)

You can either immediately click the warning to access the approvals workflow and you can show a
listing of all reports/policy templates with Untrusted commands using the filter on the **Policy
Admin** page.

![AllowedCommandsCategories](/images/changetracker/8.1/admin/settings/allowedcommandscategories.webp)

Clicking on the **Not Trusted** link, you will be invited to enter a code generated by the 2FA
resource linked to the Change Tracker instance during initial setup.

![AllowedCommandsTrustStatus](/images/changetracker/8.1/admin/settings/allowedcommandstruststatus.webp)

## Using the Allowed Commands Page

Navigate to **Settings** – **Allowed Commands**:

![AllowedCommandsPage](/images/changetracker/8.1/admin/settings/allowedcommandspage.webp)

- **Filters for Trusted Commands** - Allows selection of the commands, templates or reports to work
  with;
- **Allowed Commands** sub-tabs;
- **Actions** - Allows commands to be managed using bulk operations.
