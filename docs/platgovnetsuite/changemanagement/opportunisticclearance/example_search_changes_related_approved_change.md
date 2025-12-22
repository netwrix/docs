---
title: "Example: Search Changes Related to an Approved Workflow Change"
description: "Example: Search Changes Related to an Approved Workflow Change"
sidebar_position: 40
---

# Example: Search Changes Related to an Approved Workflow Change

**Use Case**

An administrator needs to change a workflow and search condition.

1. Administrator creates a new Change Request to change the workflow and search.
2. Administrator only attaches the workflow to the Change Request, forgetting to attach the search
   condition.

    ![opp_clearance_case4-1](/images/platgovnetsuite/change_management/opp_clearance_case4-1.webp).

3. IT Approvers approve the change.
4. Administrator updates the workflow and search filter.

**Expected Result**

1. The Search change is attached to the related workflow's approved Change Request.

    ![opp_clearance_case4-2](/images/platgovnetsuite/change_management/opp_clearance_case4-2.webp)

2. The change is compliant.
