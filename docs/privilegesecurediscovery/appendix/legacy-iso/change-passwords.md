---
title: "Change passwords"
description: "Change the password of the operating system account for SSH on each node, and the password of the default administrator account in the UI."
sidebar_position: 90
---

This page applies to the deprecated ISO appliance. For the supported deployment method, see [Legacy ISO installation](./legacy-iso-installation.md).

An ISO-based installation includes a `secureone` operating system account that you use for SSH and the command line. You can change its password on each node, or change the password of the default `secureone` administrator account in the UI.

## Change the operating system account password on a node

1. Connect to the node by SSH and sign in as `secureone`. See [SSH to a node](./ssh-to-a-node.md).
2. Run the following command:

   ```bash
   passwd
   ```

3. Enter the current password, and then enter the new password twice.

4. Repeat the steps on each node.

You can set the same password or a different password on each node.

## Change the appliance administrator password in the UI

The **Appliance Admin Password** pane sets the password of the default `secureone` administrator account. The password must have at least 15 characters.

1. Sign in to the UI.
2. In the left menu, select **Configure** > **Server**.
3. In the **Appliance Admin Password** pane, select the **Password** value and enter the new password.
4. Select the **Verify Password** value and enter the new password again. The product saves the password when the two entries match and shows **Password successfully updated.**

The fields show `[Hidden]` after you enter a value. When you reload the page, they show `Empty` again.
