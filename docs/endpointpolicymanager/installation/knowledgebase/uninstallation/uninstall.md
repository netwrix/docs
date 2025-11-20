---
title: "How do I uninstall Endpoint Policy Manager?"
description: "How do I uninstall Endpoint Policy Manager?"
sidebar_position: 10
---

# How do I uninstall Endpoint Policy Manager?

We suggest you read this all the way through before you attempt to uninstall Netwrix Endpoint Policy
Manager (formerly PolicyPak).

You uninstall Endpoint Policy Manager the same way you installed it, but in reverse. In short, the
steps are:

**Step 1 –** Delete GPOs which have Endpoint Policy Manager licensing information.

**Step 2 –** Delete GPOs which have Endpoint Policy Manager directives (or delete the Endpoint
Policy Manager entries within the GPOs.)

**Step 3 –** Remove the CSE from all client computers. Use Add/Remove Programs to do this manually,
or use your software installation software to perform the removal.

**Step 4 –** Remove the Endpoint Policy Manager GPMC add-on from your management stations.

**Step 5 –** Remove the Paks in the Central Store, or, if you used Share Based storage, remove the
share and delete the Pak files.

Endpoint Policy Manager doesn't leave any trace on your domain, because the directives are contained
within the GPOs.

That being said, if you merely delete the GPOs and/or remove the CSEs, you might leave data on the
machine. This might be desired or undesired. You should plan accordingly before performing the
removal steps above.

In order to get revert to work, depending on the component or item type, you may need to pre-set up
your revert process in advance.

For Endpoint Policy Manager Application Manager and all Group Policy Preferences settings you need
to expressly declare in advance what the revert behavior should be. By default, neither Endpoint
Policy Manager Application Manager nor the Group Policy Preferences will automatically revert when
you uninstall the Client Side Extension. You would be leaving the last written data behind. For more
information, please see
[How do I ensure that settings will revert when the policy no longer applies (by Group Policy, File, or Endpoint Policy Manager Cloud)?](/docs/endpointpolicymanager/gettingstarted/misc/knowledgebase/troubleshooting/settingsrevert.md)

Then, beyond that, most Endpoint Policy Manager specific settings will stop working and let you
continue onward. For more information on this process, please see
[What happens to each component when Endpoint Policy Manager gets unlicensed or the GPO or policy no longer applies?](/docs/endpointpolicymanager/licensing/knowledgebase/activedirectorygposccm/components_2.md)

Finally, there is a specific cosmetic issue with regards to Endpoint Policy Manager Browser Router
removal and Default Browser. For more information on this issue and how to deal with it, please see
[When I unlicense or remove Endpoint Policy ManagerBrowser Router from scope,Endpoint Policy Manager Browser Router Agent still shows as OS "default browser". Why is that and is there a workaround?](/docs/endpointpolicymanager/components/browserrouter/knowledgebase/installation/defaultbrowser.md).

