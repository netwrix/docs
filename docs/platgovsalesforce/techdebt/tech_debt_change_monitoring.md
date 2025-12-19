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
| L2: Process Issue                       | This is a relatively safe change but should be reviewed afterward.                           | Public report.                                                              | Anyone.                                                                                               |
| L3: Change Request                      | This needs approval from management but not sandbox review.                                  | Management report or Control.                                               | Anyone, provided prior approval is granted.                                                          |
| L4: Sandbox Development and Testing     | This is not a complex change, but best practices require it to be tested in a sandbox first. | Data model changes with no dependencies. For example, adding a new field.   | Business Analyst or Admin with prior approval, working in sandbox before deploying in production.     |
| L5: Full Software Development Lifecycle | This is not a safe change. It needs to be changed carefully with rigorous testing.           | Changes to code or a picklist used in field with code or SoQL dependencies. | Admin / Developer with prior approval working through a full development cycle in multiple sandboxes. |

Changes made without the policy-required approval are reported as Non-Compliant. Review the
Non-Compliant Changes Report to ensure dangerous changes do not slip through and cause process or
data problems.

Policies can also be used to block unauthorized changes.

## Default Policy

Netwrix recommends our default policy as a foundational best practice. In addition, consider
Specific Monitoring for anything needing special protection.

![Strongpoint Default Policy](/images/platgovsalesforce/tech_debt/tech_debt_5.webp)

Platform Governance for Salesforce documents **Unresolved Non-Compliant Changes** in both a List
View and a Report. Both show you all the changes that should have received approval and the level of
change control required for the change. The List View enables you to quickly review and manage the
resolution from a single screen through the **Short Resolution Description** and **Status** fields.

If you are not fully leveraging Platform Governance for Salesforce in your change enablement
process, you can restrict your review of changes by filtering out object types or risk levels that
do not concern you. Alternatively, you can create different reports for different team members to
prioritize what you see.

![Unresolved Non-Compliant Changes Report](/images/platgovsalesforce/tech_debt/tech_debt_8.webp)

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

In some cases, it is essential to monitor changes to specific Customizations, Objects, or Fields.
For example:

- Encrypted fields or other privacy-related fields. Changes likely need to be reviewed by the data
  security team.
- Important List Views or Reports with role, SOQL, dashboard/script dependencies, or selected by
  owner.
- Financially-sensitive Customizations such as contracts and compensation-related objects and
  fields.
- Any other specific fields requiring special approvals.

You can create a special policy with heightened sensitivity for these Customizations. For example,
you can require general approval of report changes and add special approvers, such as the CFO.

To apply the policy to Customizations you are concerned about:

1. Create a **List View** that selects the Customization records to protect, based on your criteria.
2. Add a **Record Type** filter with a single Record Type so that you can edit directly from the
   List View.
3. Include the **Change / Approval Policy** field as a List View column.
4. Select one or more Customizations and select the **Change / Approval Policy**.

    ![Applying the policy to Customizations](/images/platgovsalesforce/tech_debt/tech_debt_7.webp)

### Specific Changes

Sometimes, you are more concerned about what is being changed than who is doing it. The Technical
Debt topic [Ongoing Monitoring](/docs/platgovsalesforce/techdebt/tech_debt_org_ongoing_monitoring.md) has some specific examples for
watching your org to spot problems before they happen.

### Adding Custom Fields and Objects to the Policy

When you add sensitive objects to the Policy, you may also need to add the Custom Fields that belong
to that Object. There is a new **Set Policy** option on the Customization record to easily add it to
the policy.

1. Open **Customizations**.
2. Search for **Customizations** **CustomObject**.

    ![Search for Customizations > CustomObject](/images/platgovsalesforce/tech_debt/search.webp)

3. Open the Customization to add to a policy.
4. Click **Set Policy**.

    ![Set Policy is used to add Customizations to a policy](/images/platgovsalesforce/tech_debt/policy_set_button.webp)

5. Select individual customizations or click the check box in the heading bar to select all.
6. Click **Save**.

**Next Technical Debt Topic:** [Org Clean Up](/docs/platgovsalesforce/techdebt/tech_debt_org_clean_up.md)
