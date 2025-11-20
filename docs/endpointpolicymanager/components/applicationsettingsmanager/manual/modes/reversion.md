---
title: "Reversion Mode"
description: "Reversion Mode"
sidebar_position: 30
---

# Reversion Mode

The second set of options on an element dictates the reversion mode, or the policy removal options.

These actions apply when the group policy object (GPO) is no longer relevant to the user, such as
when the GPO is deleted, the value is deselected, the user is moved out of the GPO, or a Windows
Management Instrumentation (WMI) filter on the GPO evaluates to false. The term for this is "falling
out of scope."

There is only one available reversion mode: "Revert this policy setting to the default value when it
is no longer applied." When the GPO falls out of scope, the original application value (as defined
within the AppSet) is enforced on the application.

The default is to have the "at least one symbol character (!,@,#,$,%,^,&,\*…)" checkbox unchecked,
which means that the value will be retained on the client—even though the GPO falls out of scope.

Note that when the reversion mode is set, the text in the Endpoint Policy Manager Application
Settings Manager user interface changes to italics as a visual signal, as seen In the figure shown.

![policypak_application_settings_1_6](/images/endpointpolicymanager/applicationsettings/modes/endpointpolicymanager_application_settings_1_6.webp)

The figure shown. Text in italics show that the reversion mode is in effect.



