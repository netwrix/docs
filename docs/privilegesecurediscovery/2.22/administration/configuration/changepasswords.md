---
title: "Change Privilege Secure Passwords (SSH and UI)"
description: "Change Privilege Secure Passwords (SSH and UI)"
sidebar_position: 150
---

# Change Privilege Secure Passwords (SSH and UI)

Change Privilege Secure Passwords (SSH and UI)

# Change Privilege Secure Passwords (SSH and UI)

## Linux 'secureone' Account Password Change

This is the account that is used for SSH, CLI, and Putty.

- SSH via Putty to as secureone
- Command to change password: `passwd`
- You will be prompted to enter the current password, and then the desired password twice

![mceclip2.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360053099753_mceclip2.webp)

Do this for each node.

**NOTE:** The passwords can be set the same or different for each node.

## SSH / Putty /CLI 'secureone' OS Account Password

For the built-in UI 'secureone' user password:

**Step 1 –** Log in to the UI.

**Step 2 –** Navigate to **left menu** > **Configure** > **Server**.

![mceclip0.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360053099753_mceclip0.webp)

**Step 3 –** Enter the desired password twice in the Appliance Admin Password pane.

![mceclip1.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360053099753_mceclip1.webp)

**NOTE:** When you click the checkbox after entering password, the password value filed will show
[Hidden].

![mceclip0.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360053099753_mceclip0.webp)

Upon reloading the page, the password value fields will return to displaying the word "Empty."
