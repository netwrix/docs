---
title: "Self-Elevation Rules"
description: "Self-Elevation Rules"
sidebar_position: 20
---

# Self-Elevation Rules

:::note
See the
[Endpoint Policy Manager Least Priv Manager: Self Elevate Mode](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/bestpractices/selfelevatemode.md)
video for information on Endpoint Policy Manager Least Privilege Manager self-elevation rules.
:::


There is a self-elevation mode for special situations as well. Although this mode is normally not
recommended, as it makes your systems more vulnerable, there may be a special circumstance in which
you want to grant a designated user local admin-like rights, without making them an admin.

You may have particular users which need to run EXE or MSI applications at will, but to whom you
don't want to give local admin rights. For instance:

- Your IT personnel need the ability to install MSIs elevated and to access privileged applications
  such as Process Monitor.
- Your developers constantly create and test new scripts so they need to run them elevated when
  needed.
- Your HR personnel need the ability to run Java elevated in order to run the applications they
  depend on.

Self-Elevation mode can be used for these types of special circumstances. By creating targeted
policies, you can ensure that designated users receive elevation rights for what they need, when
they need them. Let's look at how self-elevation works.

Start by creating a new self-elevation policy as seen here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/rules/apply/self_elevation_rules.webp)

You can then select which types of executables you will allow for self-elevation. Here, we have
chosen EXE and MSI applications.

![A screenshot of a computer screen Description automatically generated](/images/endpointpolicymanager/leastprivilege/rules/apply/self_elevation_rules_1.webp)

You must specify at least one group or user for the policy, even if the policy is targeted at the
organizational unit (OU) level. Unless you choose someone to direct the policy to, the policy will
not apply to anyone. In this example, the EastSalesUsers has been chosen.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/rules/apply/self_elevation_rules_2.webp)

In order for a user to self-elevate an application, they have to right-click the application and
choose the self-elevation command from the context menu. You can choose to create a custom name for
this command if you wish or you can choose to use the default. You may also customize a message to
remind users that all self-elevated actions are audited, as is seen here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/rules/apply/self_elevation_rules_3.webp)

The final screen requires you to name the policy. You can also require justification text and/or
re-authentication to Windows (which works with Windows Hello, etc.)

Users must then input an explanation as to why they want to run the given application and/or
re-authenticate before the application is launched.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/rules/apply/self_elevation_rules_4.webp)

So in this scenario, let us say that EastSalesUser1 operating as a standard user wants to run
Procmon, which requires local admin rights. While they cannot run the application normally, they can
right-click on the application and select **Run Self Elevated with Endpoint Policy Manager**.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/rules/apply/self_elevation_rules_5.webp)

Here you can see the Endpoint Policy Manager Self Elevation prompt that the user will see. The
customized message created earlier appears here. Because justification text was required, the user
must type a reason for why they wish to access this application. Once the user clicks **OK** the
application will open.

![A screenshot of a computer error Description automatically generated](/images/endpointpolicymanager/leastprivilege/rules/apply/self_elevation_rules_6.webp)

If Force Reauthentication is selected, the behavior is like what is seen here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/rules/apply/self_elevation_rules_7.webp)

Self-elevated application requests are audited in Windows Event Viewer. There are two Event IDs
associated with Endpoint Policy Manager Self Elevation. Note that the username and application are
included in the log information.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/rules/apply/self_elevation_rules_8.webp)



