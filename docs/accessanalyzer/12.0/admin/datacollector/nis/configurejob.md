---
title: "Unix Connection Profile & Host List"
description: "Unix Connection Profile & Host List"
sidebar_position: 20
---

# Unix Connection Profile & Host List

The NIS Data Collector requires a custom Connection Profile and host list be created and assigned to
the job or job group conducting the data collection. The host inventory option during host list
creation makes it necessary to configure the Connection Profile first.

## Connection Profile

Creating the Connection Profile requires having an account with access to the targeted NIS server.

Create a Connection Profile and set the following information on the User Credentials window:

- Select Account Type – Unix Account
- User name – Enter user name
- Password Storage – Application (Uses the configured Profile Security setting as selected at the
  **Settings** > **Application** node. See the [Application](/docs/accessanalyzer/12.0/admin/settings/application/overview.md)
  topic for additional information.)
- Password/Confirm

    - If not using a private key, enter the **Password** and re-type in the **Confirm** field
    - If using a private key, then the password is not needed. Provide the private key information
      in the **Use the following private key when connecting** field.

- Use the following port/ports(CSV) for SSH

    - The SSH port needs to be opened in software and hardware firewalls
    - If desired, select this option and provide the port value

- Use the following private key when connecting

    - This option uses the authentication method of an SSH Private Key
    - Supported Key types:

        - Open SSH
        - PuTTY Private Key

    - If desired, select this option and provide the key value

Once the Connection Profile is created, it is time to create the custom host list. See the
[Connection](/docs/accessanalyzer/12.0/admin/settings/connection/overview.md) topic for additional information.

## Custom Host List

The custom host list only needs to include a single NIS server in the targeted NIS domain. Follow
the steps in the [Add Hosts](/docs/accessanalyzer/12.0/admin/hostmanagement/actions/add.md) topic for instructions on how to
create a custom static host list.

See the
[Recommended Configuration for the .NIS Inventory Solution](/docs/accessanalyzer/12.0/solutions/nisinventory/recommended.md)
topic for information on where to assign the Connection Profile and host list.
