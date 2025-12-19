---
title: "Configure Advanced Audit Policies"
description: "Configure Advanced Audit Policies"
sidebar_position: 10
---

# Configure Advanced Audit Policies

You can configure advanced audit policies instead of basic domain policies to collect Logon Activity
changes with more granularity.

Follow the steps to configure security options.

Using both basic and advanced audit policies settings may lead to incorrect audit reporting. To
force basic audit policies to be ignored and prevent conflicts, enable the Audit: Force audit policy
subcategory settings to override audit policy category settings option.

**Step 1 –** Open the **Group Policy Management** console on any domain controller in the target
domain: navigate to Start > Windows Administrative Tools> **Group Policy Management.**

**Step 2 –** In the left pane, navigate to **Forest: `<forest_name>` > Domains > `<domain_name>` >
Domain Controllers**. Right-click the effective domain controllers policy (by default, it is the
**Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.

**Step 3 –** In the Group Policy Management Editor dialog, expand the Computer Configuration node on
the left and navigate to Policies > Windows Settings > Security Settings > Local Policies > Security
Options.

**Step 4 –** Locate the Audit: Force audit policy subcategory settings to override audit policy
category settings and make sure that policy setting is set to _"Enabled"_.

![manualconfig_ad_nla_audit_force_winserver2016](/images/1secure/configuration/ad/manualconfig_ad_nla_audit_force_winserver2016.webp)

**Step 5 –** Navigate to **Start** > **Run** and type _"cmd"_. Input the `gpupdate /force` command
and press **Enter**. The group policy will be updated.

Follow the steps to configure advanced audit policies.

**Step 6 –** Open the **Group Policy Management** console on any domain controller in the target
domain: navigate to Start > Windows Administrative Tools> **Group Policy Management.**

**Step 7 –** In the left pane, navigate to **Forest: `<forest_name>`** > **Domains** >
**`<domain_name>`** > **Domain Controllers**. Right-click the effective domain controllers policy
(by default, it is the **Default Domain Controllers Policy**), and select **Edit** from the pop-up
menu.

**Step 8 –** In the Group Policy Management Editor dialog, expand the Computer Configuration node on
the left and navigate to Policies > Windows Settings > Security Settings > Advanced Audit Policy
Configuration > Audit Policies .

**Step 9 –** Configure the following audit policies.

 <table>
            <thead>
                <tr>
                    <th>Policy Subnode</th>
                    <th>Policy Name</th>
                    <th>Audit Events</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="2">
                        <p><span>Account Logon</span></p>
                        <p>&#160;</p>
                    </td>
                    <td>
                        <ul>
                            <li><span>Audit Kerberos Service Ticket Operations</span></li>
                            <li><span>Audit Kerberos Authentication Service</span></li>
                            <li><span>Audit Credential Validation</span></li>
                        </ul>
                    </td>
                    <td>
                        <p><i>"Success"</i> and <i>"Failure"</i></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li><span>Audit Other Account Logon Events</span></li>
                        </ul>
                    </td>
                    <td>
                        <p><i>"Success"</i> and <i>"Failure"</i></p>
                    </td>
                </tr>
                <tr>
                    <td rowspan="2">
                        <p rowspan="2"><span>Logon/Logoff</span></p>
                    </td>
                    <td>
                        <ul>
                            <li><span>Audit Logoff</span></li>
                            <li><span>Audit Other Logon/Logoff Events</span></li>
                        </ul>
                    </td>
                    <td><p><i>"Success"</i></p></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li><span>Audit Logon</span></li>
                        </ul>
                    </td>
                    <td>
                        <p><i>"Success"</i> and <i>"Failure"</i></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p><span>System</span></p>
                    </td>
                    <td>
                        <ul>
                            <li><span>Audit Security State Change</span></li>
                        </ul>
                    </td>
                    <td>
                        <p><i>"Success"</i></p>
                    </td>
                </tr>
            </tbody>
        </table>




![manualconfig_nla_advpol2016](/images/1secure/configuration/logonactivity/manualconfig_nla_advpol2016.webp)

**Step 10 –** Set the following advanced audit policies to _"Success"_ and _"Failure"_:

- Audit Kerberos Service Ticket Operations
- Audit Kerberos Authentication Service
- Audit Credential Validation

**Step 11 –** Set the Audit Security State Change advanced audit policy to "_Success_".

**Step 12 –** Navigate to **Start** > **Run** and type _"cmd"_. Input the `gpupdate /force` command
and press **Enter**. The group policy will be updated.
