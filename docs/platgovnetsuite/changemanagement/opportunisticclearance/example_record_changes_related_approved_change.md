---
title: "Example: Record Changes Related to an Approved Record Change"
description: "Example: Record Changes Related to an Approved Record Change"
sidebar_position: 30
---

# Example: Record Changes Related to an Approved Record Change

**Use Case**

Administrator needs to enable custom record field's Show in List option.

1. Administrator creates a new Change Request and adds the field customization to enable the **Show in
   List** option.

    ![opp_clearance_case3-1](/images/platgovnetsuite/change_management/opp_clearance_case3-1.webp)

2. IT Approvers approve the change.
3. updates the custom field. No script is using the parent record of the field.

**Expected Result**

1. The parent record on the field is attached to the related field's approved Change Request.
2. The change is compliant.

    ![opp_clearance_case3-2](/images/platgovnetsuite/change_management/opp_clearance_case3-2.webp)
