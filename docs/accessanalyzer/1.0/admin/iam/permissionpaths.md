---
title: "Permission Path Analysis"
description: "Analyzing permission paths and access relationships"
sidebar_position: 40
---

# Permission Path Analysis

Permission path analysis traces the chain of access from an identity to a resource, showing every group membership, permission assignment, and inheritance step that grants access. This is essential for understanding why a user has access to a particular resource.

## Viewing Permission Paths

To view permission paths for a specific identity:

1. Navigate to **IAM** > **Identities** and select the target identity.
2. In the **Resource Access** section, click the **View Path** link next to any resource entry.

The permission path visualization displays the chain as a directional graph:

**User** > **Group** > **Nested Group** > **Permission Assignment** > **Resource**

## Path Components

| Component | Description |
|---|---|
| **Identity** | The starting user or group |
| **Group Membership** | Direct or nested group that the identity belongs to |
| **Permission Entry** | The specific ACL or role assignment that grants access |
| **Resource** | The target file share, site, directory object, or folder |

## Use Cases

- **Access Reviews** -- Determine whether a user's access is appropriate and through which path it was granted.
- **Least Privilege Analysis** -- Identify overly broad group memberships that grant unintended access.
- **Incident Response** -- Trace access paths for a compromised account to assess the scope of exposure.

:::note
Permission paths are computed from the most recent access scan results. Run a new scan to capture changes in group memberships or permission assignments.
:::
