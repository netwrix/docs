---
title: "Policy Report"
description: "Policy Report"
sidebar_position: 20
---

# Policy Report

The Policy report at the web application and web application URL levels provides a list of web
application policies assigned for the selected SharePoint on-premise farm web application.

![Policy report at the web application and web application URL levels](/images/accessinformationcenter/12.0/resourceaudit/sharepoint/webapplication/webapppolicy.webp)

This report is comprised of the following columns:

- Zone – Zone to which the policy is applied (for example, internet, intranet, default, and so on)
- Url – URL path to the site collection
- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Stale – True or False if trustee account is stale (according to the length of inactive time used
  by the Access Analyzer data collection and analysis configuration to identify stale accounts)
- Deleted – True or False if trustee account is deleted

The following rights are a normalized representation of web application policy permission granted to
the trustee:

- Read – Right to view/read resources
- Write – Right to add or modify SharePoint resources
- Delete – Right to delete SharePoint resources
- Manage – Equivalent to full control over SharePoint resources

If the selected trustee in the top section of the report is a group, the Group Membership pane
displays the group membership, including nested groups.
