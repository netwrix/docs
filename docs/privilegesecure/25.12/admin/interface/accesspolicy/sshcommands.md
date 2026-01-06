---
title: "SSH Command Restriction"
description: "SSH Command Restriction"
sidebar_position: 60
---

# SSH Command Restriction

The SSH Command Restriciton page is accessible from the Navigation pane under **Policy** > **Access
Policy** > **Command Restriction**. Groups of SSH command restrictions can be created and then applied to connection profiles.

![SSH Command Restriction Page](/images/privilegesecure/25.12/accessmanagement/admin/policy/page/command.png)

The pane on the left side of the page displays a list of the configured connection profiles. This
pane has the following features:

- Search — Searches the table or list for matches to the search string. 
- Blue + button — Create a new set of command restrictions. 
- Trashcan icon — Deletes the SSH command restriction group. Icon appears when profile is hovered over. A
  confirmation window will display.

## SSH Command Restriction Fields

- Name - provide a name for this group of command restrictions
- Email Recipient - email address to be notified if any command is observed and the email box is checked.
- Active checkbox - command restrictions can be activated/deactivated here
- Match (regex) - enter a regular expression that defines any commands you wish to observe
- Action to perform - Select in the dropdown from:
    - Log only - the command is logged
    - Block - the command is blocked from being executed
    - Block and lock - the command is blocked being exectuted and the session is locked.  If this option is selected, then a message can be crafted that is sent to the locked user as well.
    - Terminate - session is ended
- Email checkbox - if the command is observed and this is checked, then an email is sent regardless of action
- Plus and minus icons - remove or add more command restrictions
- Save and Cancel icons (only show up when there is an edit) - retain or discard any edits since last save