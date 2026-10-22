---
title: "Add a sudo user on an Ubuntu system"
description: "Create a sudo-enabled service account on an Ubuntu system, and optionally let it run sudo without a password, so you can register the system."
sidebar_position: 50
---

Privilege Secure for Discovery needs an account with sudo permissions to register a Linux system. This procedure creates that account on an Ubuntu system. Repeat it on each endpoint, or create the account through your configuration management tool. For the other requirements, see [Linux registration prerequisites](./linux-registration-prerequisites.md).

## Create the account

1. Connect to the system over SSH as a user that can run `sudo`.
2. Add the user. This procedure uses `svc-netwrix`. Replace it with your account name:

   ```bash
   sudo adduser svc-netwrix
   ```

3. Enter and confirm a password when prompted.
4. Press **Enter** at each prompt for user information, or fill in the fields.
5. Enter `y` to confirm.
6. Add the user to the `sudo` group:

   ```bash
   sudo usermod -aG sudo svc-netwrix
   ```

7. Switch to the user and test `sudo`:

   ```bash
   sudo su - svc-netwrix
   sudo whoami
   ```

   Enter the password when prompted. The command prints `root`.

Use this account name and password when you register the system.

## Run sudo without a password

Password authentication doesn't need this step. Complete it if the account signs in with an SSH key, because the product then has no password to send to `sudo`. You can also use it to meet a policy that requires passwordless sudo for service accounts.

1. Open a new sudoers file for the account. The `visudo` command checks the syntax when you save:

   ```bash
   sudo visudo -f /etc/sudoers.d/svc-netwrix
   ```

2. Add this line:

   ```text
   svc-netwrix ALL=(ALL) NOPASSWD:ALL
   ```

3. Save the file and exit the editor. In the default editor, press **Ctrl+X**, press **Y**, and press **Enter**.
4. Test that `sudo` no longer asks for a password:

   ```bash
   sudo su - svc-netwrix
   sudo -n whoami
   ```

   The command prints `root`. If it prints `sudo: a password is required`, check the file name and the line.

After the first scan, the product rewrites `/etc/sudoers` and moves the rules from `/etc/sudoers.d` into it. The account keeps its sudo access.
