---
title: "Change Monitoring"
description: "Change Monitoring"
sidebar_position: 30
---

# Change Monitoring

Activating change monitoring is the next step on the path to reduce your Technical Debt. Change
monitoring records all changes that occur in the org and automatically alerts stakeholders of any
that fall outside of policy or impose unacceptable levels of risk.

Change monitoring can be integrated into your change governance process or be leveraged as the
foundation of a new super-efficient process using Platform Governance for Salesforce. For now,
oversight is the goal. In particular, notification of any changes that touch automation (code,
workflows, triggers), profiles or roles is essential. The severity level can be set to the level of
change a policy should impose. For example, code-related changes normally follow a tighter approval
process than simple data model changes.

:::tip
**How Change Policies Work**: Every time a customization is created or changed in an org, Platform Governance for Salesforce checks to see if the change should have been reviewed or approved. By default, this depends on the dependencies — a picklist with no dependencies is a relatively safe change compared to a picklist with risky code dependencies. Default policies can be customized and applied to specific customizations. For example, most reports do not need change control, but management reports need to be tightly controlled.
:::

Policies define the level of change control to follow to reduce risk. The five change levels contain
escalating levels of rigor and/or skill required to address a change:

| Change Level                            | Change Process                                                                               | Example                                                                     | Skill Level Required                                                                                  |
| --------------------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| L1: Log Changes                         | This is a safe change.                                                                       | Ordinary report.                                                            | Anyone.                                                                                               |
| L2: Change Request                      | This needs approval from management but not sandbox review.                                  | Management report or Control.                                               | Anyone, provided prior approval is granted.                                                          |
| L3: Sandbox Development and Testing     | This is not a complex change, but best practices require it to be tested in a sandbox first. | Data model changes with no dependencies. For example, adding a new field.   | Business Analyst or Admin with prior approval, working in sandbox before deploying in production.     |
| L4: Full Software Development Lifecycle | This is not a safe change. It needs to be changed carefully with rigorous testing.           | Changes to code or a picklist used in field with code or SoQL dependencies. | Admin / Developer with prior approval working through a full development cycle in multiple sandboxes. |

Changes made without the policy-required approval are reported as Non-Compliant. Review the
Non-Compliant Changes Report to ensure dangerous changes do not slip through and cause process or
data problems.

Policies can also be used to block unauthorized changes.

## Default Policy

Netwrix recommends our default policy as a foundational best practice. In addition, consider
Specific Monitoring for anything needing special protection.

![Netwrix Default Policy](/images/platgovsalesforce/tech_debt/tech_debt_default_policy_1.webp)
![Netwrix Default Policy](/images/platgovsalesforce/tech_debt/tech_debt_default_policy_2.webp)
![Netwrix Default Policy](/images/platgovsalesforce/tech_debt/tech_debt_default_policy_3.webp)


Platform Governance for Salesforce documents **Unresolved Non-Compliant Changes** in both a List
View and a Report. Both show you all the changes that should have received approval and the level of
change control required for the change. The List View enables you to quickly review and manage the
resolution from a single screen through the **Short Resolution Description** and **Status** fields.

If you are not fully leveraging Platform Governance for Salesforce in your change enablement
process, you can restrict your review of changes by filtering out object types or risk levels that
do not concern you. Alternatively, you can create different reports for different team members to
prioritize what you see.

![Unresolved Non-Compliant Changes Report](/images/platgovsalesforce/tech_debt/tech_debt_8.webp)

## Related Tab Overview

The Related tab on the Policy page provides a consolidated view of all elements associated with a Change / Approval Policy and serves as the main workspace for managing policy scope and tracking its usage.

From this tab, you can:

### View Customizations Associated with the Policy

The Customizations section shows which Salesforce customizations are currently governed by the policy.

### Add or Manage Customizations

You can associate new customizations with the policy using two actions:

- **Add Customizations**: Manually select and assign specific customizations to the policy.
- **Select Change Level By SF Type**: Assign the policy automatically to all customizations of selected Salesforce Types (for example, ApexClass, Profile, PermissionSet, CustomObject).

### Review Change Logs

The Change Logs section lists all change events related to customizations and/or change requests that are governed by this policy. This provides visibility into what was changed, when it was changed, and the type of operation performed.

### Review Change Requests

The Change Requests section displays all change requests that have this policy applied, along with their current approval status and stage.

### Track Policy History

The Change / Approval Policy History section records all modifications made to the policy itself, including changes to approvers, settings, and creation details, providing a full audit trail.

Together, these sections make the Related tab the central place to manage policy assignments, understand how a policy is being applied, and audit both customization activity and policy configuration changes.

![Related Tab Overview](/images/platgovsalesforce/tech_debt/policy_related_tab.webp)

## Automatic Policy Assignment

Platform Governance introduces an intelligent policy assignment mechanism for Salesforce customizations. When you define a policy and select specific Salesforce Types (such as Profile, PermissionSet, CustomObject), the system automatically applies this policy to any new customizations that match those types.

### How Automatic Policy Assignment Works

There are two primary methods for assigning policies to customizations:

![Select Change Level By SF Type](/images/platgovsalesforce/tech_debt/select_customizations.webp)

#### Option 1: Select Change Level By SF Type

To configure Automatic Policy Assignment by Salesforce Type:

1. Navigate to the Policy record.
2. Go to the Related tab in the Customizations panel.
3. Click on the "Select Change Level By SF Type" button.

![Select Change Level By SF Type](/images/platgovsalesforce/tech_debt/select_change_level_by_sf_type.webp)


This method allows you to automatically assign policies to specific Salesforce object types.

#### Option 2: Add Customization

Alternatively, you can manually add specific customizations to a policy:

1. Navigate to the Policy record.
2. Go to the Related tab in the Customizations panel.
3. Click on the "Add Customization" button.
4. Select the customizations you want to apply the policy to.

![Add Customization](/images/platgovsalesforce/tech_debt/add_customization.webp)

This method provides flexibility in applying policies to individual customizations.

The core process remains the same:

1. **Policy Configuration**: Select target Salesforce Types or specific customizations in the policy configuration interface.
2. **Customization Creation**: When a new customization is created, the system checks its type against the defined policy.
3. **Automatic Mapping**: If the customization type matches the policy's selected types, the policy is automatically assigned.

This feature ensures consistent governance by:
- Reducing manual policy assignment
- Maintaining uniform change monitoring across your Salesforce org
- Minimizing human error in policy management


## Specific Monitoring

The default policy may be all you require. However, you should consider whether there are specific
people, objects, reports or fields that need special protection. These can be addressed in two ways:

- Specific People
- Specific Customizations
- Specific Changes
- Adding Custom Fields and Objects to the Policy

### Specific People

Sometimes the behavior of certain individuals in your system is essential to monitor. This could be
a maverick developer, or a new hire not completely familiar with your system.

Create a List View or Report against one or both:

- Customization records based on the **Last Modified By** field
- Change Logs filtered by the **Changed By** field showing the Customization, the date of the
  change, the person making the change, the resolution explanation and status (requires _Intelligent
  Change Enablement_ or _Enterprise Compliance_
  [license](/docs/platgovsalesforce/installingstrongpoint/features_by_license_type.md)). Either approach can also be
  very useful to monitor new hires.

You can filter the Unresolved Non-Compliant Changes List View by the Changed By field. This has the
advantage of showing you the Non-Compliant Changes and providing an easy workflow to resolve them.

### Specific Customizations

In some cases, it is essential to monitor and govern individual customizations, regardless of their Salesforce Type, rather than applying policies broadly by type. This approach is useful when specific components require stricter oversight than others of the same category.

Typical examples include:

- **Business-critical Apex classes, triggers, or flows.**
- **Sensitive objects or fields related to security, privacy, or compliance.**
- **High-impact reports, dashboards, or list views used for management or regulatory purposes.**
- **Any customization that requires special approvals or tighter change control due to risk or business impact.**

While policies can be automatically applied from the Policy record itself (as described in [Automatic Policy Assignment](#automatic-policy-assignment)), you can also assign a policy directly from the Customization record for more granular control.

#### Applying a Policy from a Customization

To associate a Change / Approval Policy with a specific customization:

1. **Navigate to Customizations** and open the relevant list view (for example, Apex Scripts, Objects, Fields, or any other Salesforce Type).

2. **Select the customization** you want to govern.

3. **Click Edit** from the row action menu.

4. In the **Edit Customization** dialog:
   - Use the **Change / Approval Policy** field to search for and assign an existing policy, or create a new one.
   - Optionally, associate the customization with an existing Change Request using the **Add to Change Request** field.

5. **Click Save** to apply the changes.

This method provides fine-grained governance at the individual customization level and complements the automatic assignment mechanisms described in the [Automatic Policy Assignment](#automatic-policy-assignment) section.

    ![Applying the policy to Customizations](/images/platgovsalesforce/tech_debt/tech_debt_7.webp)

    ![Applying the policy to Customizations](/images/platgovsalesforce/tech_debt/tech_debt_14.webp)

### Specific Changes

Sometimes, you are more concerned about what is being changed than who is doing it. The Technical
Debt topic [Ongoing Monitoring](/docs/platgovsalesforce/techdebt/tech_debt_org_ongoing_monitoring.md) has some specific examples for
watching your org to spot problems before they happen.

### Adding Custom Fields and Objects to the Policy

When you add sensitive objects to a policy, you may also need to apply the same policy to the Custom Fields that belong to that object. Platform Governance for Salesforce provides a streamlined **Set Policy** action directly on the Customization record to support this workflow.

#### Applying a Policy from a Custom Object
To assign a Change / Approval Policy to a Custom Object and its related fields:

1. Navigate to Customizations.
2. Search for and open the CustomObject you want to govern.
3. On the Customization record, click Set Policy.

![Applying a Policy from a Custom Object](/images/platgovsalesforce/tech_debt/policy_set_button.webp)

4. In the Set Policy dialog:
        - Assign the desired Change / Approval Policy to the Custom Object.
        - Review the list of related Custom Fields associated with the object.
5. Select individual fields, or use the header checkbox to select all fields.
6. Click:
        - Update Selection to apply the policy only to the selected fields, or
        - Update All to apply the policy to the object and all its fields.

7. Click Save to complete the assignment.

![Applying a Policy from a Custom Object](/images/platgovsalesforce/tech_debt/policy_set_customizations.webp)

This approach ensures consistent governance across an object and its underlying fields while allowing flexibility to apply policies only where needed.

**Next Technical Debt Topic:** [Org Clean Up](/docs/platgovsalesforce/techdebt/tech_debt_org_clean_up.md)