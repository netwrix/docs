---
title: "Linux: Add Sudo User to Ubuntu System"
description: "Linux: Add Sudo User to Ubuntu System"
sidebar_position: 50
---

# Linux: Add Sudo User to Ubuntu System

Linux: Add Sudo User to Ubuntu System

# Linux: Add Sudo User to Ubuntu System

### Add Sudo Enabled Service Account on an Ubuntu System

**Step 1 –** SSH into node. This will have to be done for each node.

**Step 2 –** Add  user, we’ll use **_example_user_** and an
example user: `sudo adduser example_user`

**Step 3 –** Set user password.

**Step 4 –** You will be prompted for user information. You can fill in or leave all blank.

**Step 5 –** `y` for information correct.

**Step 6 –** Add the user to the sudo group: `sudo usermod -aG sudo example_user`

**Step 7 –** Test sudo for user:

- Switch to user: `sudo su - example_user`
- Test with simple command:  `sudo date`
- Enter password

### Optional:  Turn off Password Check

**Step 1 –** Switch to root user as a failsafe: `sudo su - root`

**Step 2 –** Switch back to user you logged in with, replace `<username>` with name of user
: `su - <username>`

- Now if the /etc/sudoers file is not edited properly, you can 'exit' to root to fix.

**Step 3 –** `sudo visudo -f /etc/sudoers`

**Step 4 –** Add line to bottom: `example_user ALL=(ALL) NOPASSWD:ALL`

**NOTE:** Note: If the solution provider has a specific entry they use here, you can use that. This
provides passwordless sudo for all commands.

**Step 5 –** [Ctrl]+x to exit

**Step 6 –** `Y` to save

**Step 7 –** Hit `[Enter]` to write file

**Step 8 –** Test that sudo still works: `sudo date`

- If sudo fails, `exit` to root
- Go to step 4 and verify added line is correct.
- Without exiting root, switch back to user you logged in with, replace `<username>` with name of
  user
- `su - <username>`
- Test sudo: `sudo date`

**Step 9 –** Exit to root with:  `exit`

**Step 10 –** Switch to example_user: `sudo su - example_user`

**Step 11 –** Test that sudo works without password: `sudo date`

**Step 12 –** Done. Exit out of all terminals.
