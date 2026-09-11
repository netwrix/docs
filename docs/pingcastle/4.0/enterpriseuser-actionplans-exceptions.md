---
sidebar_label: Action plans and exceptions
---
# PingCastle Enterprise Action Plans and Exceptions

## Action plans management

This part lets an administrator configure a remediation schedule so reports can display it.

:::note
This page covers how to manage action plans for a specific domain or entity in the UI. To configure the default due-date and comment-template settings that action plans use, see [Action Plans settings](enterprisesettings-actionplans.md).
:::

![Une image contenant texte Description générée automatiquement](/images/pingcastle/enterpriseuser/image51.webp)

You can act on it directly in the domain details where the rules appear:

![Une image contenant texte Description générée automatiquement](/images/pingcastle/enterpriseuser/image52.webp)

Pay attention to the following chart. It represents the evolution of the number of rules per maturity level. Because you defined an action plan, a vertical line represents today. Everything to the right is the projected evolution of the maturity level based on the action items.

![](/images/pingcastle/enterpriseuser/image53.webp)

## Exceptions management

This part lets an administrator configure PingCastle Enterprise so that it adapts to the company's specific context. You can configure how PingCastle Enterprise handles exceptions specific to your perimeter.

![](/images/pingcastle/enterpriseuser/image54.webp)

**Rule exceptions**

You can set "Rule exceptions" to completely disable a rule within a specific domain. It means the application doesn't apply this rule for a period that you specify.

Use this only for very specific reasons, such as when a rule doesn't apply in your organization.

Contact Netwrix support if you have doubts or need extra assistance about exception management.

For clarity: if you define no start date and no end date, the exception applies to all reports. If you define a start date but no end date, the exception applies starting from the start date. The same holds for the opposite case. When you define both start and end dates, the exception applies only during a limited period.

**Excluding specific findings with wildcards**

Instead of disabling a rule entirely, you can exclude specific findings from it by editing the **Rule Item to Handle** field on the exception.

From the report, click **No Action Plan** next to the specific finding you want to exclude. This pre-fills the **Rule Item to Handle** field with the data from that finding. Edit this pre-filled value to add wildcards.

:::note
Don't fill in the **Rule Item to Handle** field yourself, starting from nothing. This field is complex and easy to get wrong when written manually. Always start from the value PingCastle pre-fills after you click **No Action Plan** on a finding, then add wildcards to it.
:::

Two wildcard characters are available:

- `*` matches any sequence of characters.
- `?` matches a single character.

For example, `svc-*` matches every account name that starts with `svc-`.

Wildcards can only match data that appears in the finding's own output. PingCastle formats this output as `Column: Data` pairs — a single-word column label followed by its value, which runs up to the next column label. For example, an output of `Account: jdoe SID: S-1-5-...` only gives you an account name and a SID to build a wildcard from. If the output only shows an `Account:` value, you can wildcard the account name, but you can't substitute a distinguished name pattern, since that data was never part of the output for that finding.

:::note
Some output values change from scan to scan even though the underlying risk stays the same — for example, `LastLogonDate` or a service principal name (SPN). These are good candidates for a wildcard exception. Contact Netwrix support to log a ticket for these cases, so the team can evaluate updating the rule to generate wildcards for this data automatically in the future.
:::

**Migration**

In the same way you can set exceptions for a specific domain, you can inform the application when one of your domains is migrating. It automatically applies a set of exceptions during the timetable of the migration.

**Bulk actions**

If you need to create or remove many exceptions, you can do so in bulk.

:::note
If an exception already exists, the application doesn't create it again.
:::

![Une image contenant texte Description générée automatiquement](/images/pingcastle/enterpriseuser/image55.webp)

:::note
Since PingCastle 2.11, the application tracks all exceptions, migrations, or action plans with their creation or last modification date and the user who performed the change.
:::

![Une image contenant texte Description générée automatiquement](/images/pingcastle/enterpriseuser/image56.webp)
