---
title: "Active Directory Page"
description: "Active Directory Page"
sidebar_position: 20
---

# Active Directory Page

The Access Reviews application needs to be connected to Active Directory for user authentication and
to assign resource ownership in the Resource Owners interface. The Active Directory service account
is configured on the Active Directory page of the Configuration interface. Read access to Active
Directory is required for this purpose.

The Active Directory service account is configured during installation based on the account used for
connecting to the database. If your Database service account uses:

- SQL Server authentication credentials — Active Directory service account is configured to use the
  Local System, or computer account, which typically has Read rights to the domain
- Windows authentication credentials — The same domain credentials are also used for the Active
  Directory service account

![Configuration interface showing the Active Directory page](/images/auditor/10.6/access/reviews/admin/configuration/activedirectory.webp)

There are two options for the type of Active Directory service account:

- Use the account running this service — Local System, or computer account (NT AUTHORITY\SYSTEM)
- Use the following Active Directory account — Uses a domain account with the required permissions
  to Active Directory. The supplied User Name [DOMAIN\USERNAME] and Password are used as the Active
  Directory service account.

Multiple Domains

The **Allow authentication from the following domains** option is where additional domains can be
introduced to the Access Reviews Console. By default the domain where the Access Reviews Console
resides is listed. Domains that are in the same forest or have a trust can be added in a
comma-separated list.

- For example: nwxtech.com,example.com

_Remember,_ click **Save** when any changes are made to this page.

## Update the Active Directory Service Account Password

Follow the steps to update the Active Directory service account password. These steps only apply for
the **Use the following Active Directory account** option.

**Step 1 –** On the Active Directory page, enter the new password in the correct field.

**Step 2 –** Click **Save**. Then click **OK** to confirm.

The Active Directory service account password has been updated.
