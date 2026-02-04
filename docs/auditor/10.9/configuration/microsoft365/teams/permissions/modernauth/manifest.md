---
title: "Assign Application Permissions Using Manifest"
description: "Assign Application Permissions Using Manifest"
sidebar_position: 10
---

# Assign Application Permissions Using Manifest

Follow the steps to assign application permissions using manifest.

**Step 1 –** Under **App registrations**, select the newly created app.

**Step 2 –** Select **Manifest** on the left.

**Step 3 –** Locate the **requiredResourceAccess** property in the manifest and edit it with the
following in the square brackets ([]).

**Step 4 –** Click **Save**.

Optionally, you can select **Download** to edit the manifest locally, and then use Upload to reapply
it to your application.

Depending on your installation type, do one of the following:

- For the clear installation, add roles as described below.
- If you upgraded Auditor from previous version, replace all existing content under the
  requiredResourceAccess property.

```jsonc
{
    "resourceAppId": "00000003-0000-0000-c000-000000000000",
    "resourceAccess": [
        {
            "id": "332a536c-c7ef-4017-ab91-336970924f0d",
            "type": "Role"
        },
        {
            "id": "b0afded3-3588-46d8-8b3d-9842eff778da",
            "type": "Role"
        },
        {
            "id": "1bfefb4e-e0b5-418b-a88f-73c46d2cc8e9",
            "type": "Role"
        },
        {
            "id": "7ab1d382-f21e-4acd-a863-ba3e13f7da61",
            "type": "Role"
        },
        {
            "id": "660b7406-55f1-41ca-a0ed-0b035e182f3e",
            "type": "Role"
        }
    ]
},
{
    "resourceAppId": "00000003-0000-0ff1-ce00-000000000000",
    "resourceAccess": [
        {
            "id": "678536fe-1083-478a-9c59-b99265e6b0d3",
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
