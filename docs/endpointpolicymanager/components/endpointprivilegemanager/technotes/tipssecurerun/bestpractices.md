---
title: "Least Privilege Manager and SecureRun Implementation Best Practices"
description: "Least Privilege Manager and SecureRun Implementation Best Practices"
sidebar_position: 80
---

# Least Privilege Manager and SecureRun Implementation Best Practices

Least Privilege Manager is a powerful tool to manage local admin rights and elevate only the
permissions users need. To reduce the risk of disrupting the user's ability to work, a little
pre-implementation work needs to be completed and tested. The following outlines the tools we
provide to help accomplish that task.

## Global Settings

The Global Settings (GS), or Auditing policy, when linked to an endpoint, can be configured to
create an Event log entry on the endpoint each time an application is run that needs to be elevated,
was elevated, or when it would have been blocked by SecureRun because it is untrusted. These Event
log entries, and policies created from these entries, can be later analyzed by IT,. GS does not
interact with any applications on the endpoint, so it can safely be distributed to as many endpoints
as you see fit.

For more information on Using Global Settings Policy, see
[Use Discovery to know what rules to make as you transition from Local Admin rights](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/eventing/discovery.md)

For more information on using the Global Settings audit events to create LPM Policies, see
[Auto-Create Policy from Global Audit event](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/eventing/globalauditevent.md)

## Auto Rules Generator

Another option for discovering applications and/or scripts that would be blocked or require
elevation is the LPM Auto-Rule Generator Tool. This tool can be found in the PolicyPak ISO/ZIP file
within the \PolicyPak Extras\ folder. This utility is run on an endpoint and will analyze the local
applications and/or scripts to discover which ones would need to be elevated to run, or be allowed
to run through SecureRun. It will create the required allow and elevate policies and it can also
create policies to block applications that would otherwise be automatically allowed.

For more information on using the Auto-Rules Generator Tool, see
[Auto Rules Generator Tool (with SecureRun)](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/basicsandgettingstarted/autorulesgeneratortool.md)

## Post-installation Options

It is always best practice to start with a small test group and gradually expand to larger groups,
and eventually the entire organization, as all the bugs are worked out in your policies. However,
once you have started your implementation, there are a couple of features below that may be
implemented to further ease the transition.

### Admin Approval

Instead of an outright denial, the end-user is presented with a request code. When sent to an
administrator, a response code can be created to allow the process to run. This can allow infrequent
or new processes to be run without a specific rule being created.

[Admin Approval demo](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/adminapproval/demo.md)

### Self Elevation

Given to trusted users only, this allows the end-user to run applications despite not having a
specific policy. You can be specific to whom this is allowed, and for what types of files. As well,
each time this is invoked, it is logged in the event log along with the option of requiring the
user's justification for running the process

For more information, see [Self Elevate Mode](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/adminapproval/demo.md)


