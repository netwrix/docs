---
title: "Configure Advanced Audit Policies"
description: "Configure Advanced Audit Policies"
sidebar_position: 40
---

# Configure Advanced Audit Policies

Configure advanced audit policies to limit the range of events tracked and recorded by the product,
thus preventing your AuditArchive and the Security event log from overfilling. Perform the following
procedures instead of those discussed in the [Configure Local Audit Policies](/docs/1secure/configuration/computer/localpolicy.md) topic.

## Enforce Advanced Policies Over Local Policies

Setting up both basic and advanced audit policies leads to incorrect audit reporting. To force basic
audit policies to be ignored and prevent conflicts, enable the _Audit: Force audit policy
subcategory settings_ policy.

**To enforce advanced policies:**

**Step 1 –** On the audited server, open the Local Security Policy snap-in and navigate to Start >
Windows Administrative Tools > Local Security Policy.

**Step 2 –** Navigate to Security Settings > Local Policies > Security Options and locate the Audit:
Force audit policy subcategory settings policy.

![Local Security Policy snap-in ](/images/1secure/configuration/computer/manualconfig_fileserver_graudit_secpol2016.webp)

**Step 3 –** Double-click the policy and enable it.

## Configure Advanced Audit Policy on Windows Server 2016 / Windows 12 and Above

In Windows Server 2016 and above, advanced audit policies are integrated with Group Policies, so
they can be applied via Group Policy Object or Local Security Policies. The following procedure
describes how to apply advanced policies via Local Security Policy console.

**Step 1 –** On the audited server, open the **Local Security Policy** snap-in and navigate to
Start > Windows Administrative Tools > Local Security Policy.

**Step 2 –** In the left pane, navigate to Security Settings > Advanced Audit Policy Configuration >
System Audit Policies.

**Step 3 –** Configure the following audit policies.

       <table>
            <thead>
                <tr>
                    <th>
                        <p>Policy Subnode</p>
                    </th>
                    <th>
                        <p>Policy Name</p>
                    </th>
                    <th>
                        <p>Audit Events</p>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="3">
                        <p>Object Access</p>
                    </td>
                    <td>
                        <ul>
                            <li>Audit File System</li>
                            <li>Audit Handle Manipulation</li>
                        </ul>
                    </td>
                    <td>
                        <p>"Success" and/or "Failure" depending on the type of events you want to track.</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>Audit Detailed File Share</li>
                        </ul>
                    </td>
                    <td>
                        <p>"Failure"</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>
                                <p>Audit File Share</p>
                            </li>
                        </ul>
                    </td>
                    <td>
                        <p>"Success"</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Policy Change</p>
                    </td>
                    <td>
                        <ul>
                            <li>Audit Policy Change</li>
                        </ul>
                    </td>
                    <td>
                        <p>"Success"</p>
                    </td>
                </tr>
                <tr>
                    <td rowspan="2">
                        <p>Logon/Logoff</p>
                    </td>
                    <td>
                        <ul>
                            <li>Logon</li>
                        </ul>
                    </td>
                    <td>
                        <p>"Success"</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>Logoff</li>
                        </ul>
                    </td>
                    <td>
                        <p>"Success"</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>System</p>
                    </td>
                    <td>
                        <ul>
                            <li>Security State Change</li>
                        </ul>
                    </td>
                    <td>
                        <p>"Success"</p>
                    </td>
                </tr>
            </tbody>
        </table>
