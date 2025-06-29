# Active Directory: Automatic Configuration

This is a recommended method of applying Active Directory audit settings required by Auditor to
monitor your AD domain. With this approach, the program will check your current audit settings at
each data collection session and adjust them if necessary.

To adjust audit settings automatically, do any of the following:

- When creating a new monitoring plan, at the first step of the wizard select the **Adjust audit
  settings automatically** option. See the
  [Create a New Monitoring Plan](/docs/auditor/10.7/monitoring-plans/creating-monitoring-plans.md) topic for additional
  information.

![mp_wizard_step1_ad_thumb_0_0](/img/product_docs/auditor/auditor/configuration/activedirectory/mp_wizard_step1_ad_thumb_0_0.webp)

- For the existing monitoring plan, modify data collection settings for Active Directory data
  source, selecting **Adjust audit settings automatically** option.  
  See the [Manage Data Sources](/docs/auditor/10.7/monitoring-plans/index.md) and
  [Active Directory](/docs/auditor/10.7/monitoring-plans/monitoring-scope.md) topics for additional
  information.
- For both new and existing monitoring plans, you can click **Launch Audit Configuration Assistant**
  (in the wizard step or in the plan settings, respectively) to launch a special tool that can
  detect current infrastructure settings and adjust them as needed for monitoring. See the
  [Audit Configuration Assistant](/docs/auditor/10.7/tools-and-utilities/audit-configuration-assistant.md) topic for additional
  information.

If any conflicts are detected with your current audit settings, automatic audit configuration will
not be performed. For a full list of audit settings required for Netwrix Auditor to collect
comprehensive audit data and instructions on how to configure them, refer to the
[Active Directory](/docs/auditor/10.7/data-sources/active-directory/index.md) topic.

See also:

- [Active Directory](/docs/auditor/10.7/data-sources/active-directory/index.md)
- [Audit Configuration Assistant](/docs/auditor/10.7/tools-and-utilities/audit-configuration-assistant.md)
- [Active Directory: Manual Configuration](/docs/auditor/10.7/data-sources/active-directory/manual-configuration.md)
