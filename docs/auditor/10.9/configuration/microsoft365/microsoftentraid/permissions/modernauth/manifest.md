---
title: "Assign Application Permissions Using Manifest"
description: "Assign Application Permissions Using Manifest"
sidebar_position: 10
---

# Assign Application Permissions Using Manifest

Follow the steps to assign application permissions using manifest.

**Step 1 –** Under App registrations, select the newly created app.

**Step 2 –** Select **Manifest** on the left.

**Step 3 –** Locate the **requiredResourceAccess** property in the manifest and edit it with the
following in the square brackets ([]).

**Step 4 –** Click **Save**.

Optionally, you can select **Download** to edit the manifest locally, and then use Upload to reapply
it to your application.

The following Application permissions will be added:

**Required permissions:**

- Microsoft Graph
    - Directory.Read.All
    - AuditLog.Read.All

- Office 365 Management APIs
    - ActivityFeed.Read

**Optional permissions:**

- Microsoft Graph
    - UserAuthenticationMethod.Read.All
    - IdentityRiskyUser.Read.All

## Required Permissions Only

To add the required permissions, do one of the following:

- For the clear installation of Auditor 10.5, add roles as described below.

- If you upgraded Auditor from the version 10.0, replace all existing content under the
  **requiredResourceAccess** property.

```jsonc
{
    "resourceAppId": "00000003-0000-0000-c000-000000000000",
    "resourceAccess": [
        {
            "id": "b0afded3-3588-46d8-8b3d-9842eff778da",
            "type": "Role"
        },
        {
            "id": "7ab1d382-f21e-4acd-a863-ba3e13f7da61",
            "type": "Role"
        }
    ]
},
{
    "resourceAppId": "c5393580-f805-4401-95e8-94b7a6ef2fc2",
    "resourceAccess": [
        {
            "id": "594c1fb6-4f81-4475-ae41-0c394909246c",
            "type": "Role"
        }
    ]
}
```

## Required + Optional Permissions

To add both required and optional permissions, use the following manifest configuration:

```jsonc
{
    "resourceAppId": "00000003-0000-0000-c000-000000000000",
    "resourceAccess": [
        {
            "id": "b0afded3-3588-46d8-8b3d-9842eff778da",
            "type": "Role"
        },
        {
            "id": "7ab1d382-f21e-4acd-a863-ba3e13f7da61",
            "type": "Role"
        },
        {
            "id": "dc5007c0-2d7d-4c42-879c-2dab87571379",
            "type": "Role"
        },
        {
            "id": "38d9df27-64da-44fd-b7c5-a6fbac20248f",
            "type": "Role"
        }
    ]
},
{
    "resourceAppId": "c5393580-f805-4401-95e8-94b7a6ef2fc2",
    "resourceAccess": [
        {
            "id": "594c1fb6-4f81-4475-ae41-0c394909246c",
            "type": "Role"
        }
    ]
}
```
