---
title: "Change passwords"
description: "Change the password of the operating system account that is used for SSH on each node, and the appliance administrator password in the UI."
sidebar_position: 90
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm which account the Appliance Admin Password pane on Configure > Server sets (the operating system account or a UI account) and what the minimum password length is. Evidence: none. The 15-character minimum in docker/s1tool/src/s1.py:6355 applies to `s1 set-password` for the svc_login database user, not to these accounts.
:::

This page applies to ISO-based installations. For the supported deployment method, see [Legacy ISO installation](./legacy-iso-installation.md).

An ISO-based installation includes a `secureone` operating system account that you use for SSH and the command line. You can change its password on each node, or set the appliance administrator password in the UI.

## Change the operating system account password on a node

1. Connect to the node by SSH and sign in as `secureone`. See [SSH to a node](./ssh-to-a-node.md).
2. Run the following command:

   ```bash
   passwd
   ```

3. Enter the current password, and then enter the new password twice.

   ![Terminal session that shows the passwd command and the password prompts](/images/privilegesecure/4.2/discovery/admin/configuration/360053099753_mceclip2.webp)

4. Repeat the steps on each node.

You can set the same password or a different password on each node.

## Change the appliance administrator password in the UI

1. Sign in to the UI.
2. In the left menu, select **Configure** > **Server**.

   ![Server page of the Configure menu](/images/privilegesecure/4.2/discovery/admin/configuration/360053099753_mceclip0.webp)

3. In the **Appliance Admin Password** pane, enter the new password twice.

   ![Appliance Admin Password pane with two password fields](/images/privilegesecure/4.2/discovery/admin/configuration/360053099753_mceclip1.webp)

4. Select the checkbox next to the password fields. The password fields show `[Hidden]`.

   ![Appliance Admin Password pane with the password fields set to Hidden](/images/privilegesecure/4.2/discovery/admin/configuration/360053099753_mceclip0.webp)

When you reload the page, the password fields show `Empty` again.
