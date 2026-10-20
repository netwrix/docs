---
title: "Add a sudo user on an Ubuntu system"
description: "Create a sudo-enabled service account on an Ubuntu system and optionally turn off the sudo password prompt for it."
sidebar_position: 50
---

Privilege Secure for Discovery needs a service account with sudo permissions to register a Linux system. This procedure creates that account on an Ubuntu system. Repeat it on each node or endpoint that needs the account.

## Add a sudo-enabled service account

1. Connect to the system over SSH.
2. Add the user. This procedure uses `example_user`:

   ```bash
   sudo adduser example_user
   ```

3. Set the user's password when prompted.
4. Enter the user information when prompted, or leave the fields blank.
5. Enter `y` to confirm that the information is correct.
6. Add the user to the `sudo` group:

   ```bash
   sudo usermod -aG sudo example_user
   ```

7. Switch to the user and test sudo:

   ```bash
   sudo su - example_user
   sudo date
   ```

8. Enter the password when prompted.

## Turn off the sudo password prompt (optional)

Complete this procedure if the service account must run sudo without a password.

1. Switch to the root user as a failsafe:

   ```bash
   sudo su - root
   ```

2. Switch back to the user you signed in with. Replace `<username>` with the name of that user:

   ```bash
   su - <username>
   ```

   If you edit the `/etc/sudoers` file incorrectly, you can run `exit` to return to root and fix it.

3. Open the sudoers file:

   ```bash
   sudo visudo -f /etc/sudoers
   ```

4. Add the following line to the bottom of the file:

   ```text
   example_user ALL=(ALL) NOPASSWD:ALL
   ```

   This line provides passwordless sudo for all commands. If your solution provider specifies a different entry, use that entry.

5. Press **Ctrl+X** to exit the editor.
6. Press **Y** to save the changes.
7. Press **Enter** to write the file.
8. Test that sudo still works:

   ```bash
   sudo date
   ```

   If sudo fails, run `exit` to return to root, verify the line that you added in step 4, and switch back to your user without leaving the root session. Then test sudo again.

9. Run `exit` to return to root.
10. Switch to the example user:

    ```bash
    sudo su - example_user
    ```

11. Test that sudo works without a password:

    ```bash
    sudo date
    ```

12. Close all terminal sessions.
