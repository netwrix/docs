---
title: "Configure IT Infrastructure for Auditing and Monitoring"
description: "Configure IT Infrastructure for Auditing and Monitoring"
sidebar_position: 60
---

# Configure IT Infrastructure for Auditing and Monitoring

You can configure your IT Infrastructure for monitoring in one of the following ways:

- Automatically when creating an organization. This is a recommended method.
- Manually. The table below lists the native audit settings that must be adjusted manually to ensure
  collecting comprehensive and reliable audit data. You can enable Netwrix 1Secure to continually
  enforce the relevant audit policies or configure them manually.
                                                                                                           


        <table>
            <thead>
                <tr>
                    <th>Data source</th>
                    <th>Provided connectors</th>
                    <th>Required configuration</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <p>Active Directory </p>
                    </td>
                    <td><span>Active Directory Activity</span></td>
                    <td>
                        <p>In the audited environment:</p>
                        <p>See Domain for Monitoring Active Directory for related settings and procedures.</p>
                        <p>On the computer where Netwrix Cloud Agent is installed:</p>
                        <ul>
                            <li>
                                <p>If you have enabled automatic log backup for the Security log of your domain controller, you can instruct to clear the old backups automatically. For that, use the <b>CleanAutoBackupLogs</b> registry key</p>
                                <p>It is recommended that you adjust retention period for the backup files accordingly (default is <b>50</b> hours). </p>
                            </li>
                            <li>To provide for event data collection, the <span>Secondary Logon</span> service must be up and running . Open <b>Administrative Tools</b><span>→</span><b>Services</b>, right-click the <b>Secondary Logon</b> service and on the <b>General</b> tab make sure that <b>Startup type</b> for this service is other than <i>Disabled</i>.</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Active Directory</p>
                    </td>
                    <td>
                        <p><span>Active Directory Logons</span></p>
                    </td>
                    <td>
                        <p>In the audited environment:</p>
                        <ul>
                            <li>
                                <p>The following policies must be set to  <i>"Success"</i> and <i>"Failure"</i> for the effective domain controllers policy:</p>
                                <ul>
                                    <li><span>Audit Logon Events</span></li>
                                    <li><span class="semibold">Audit Account Logon Events</span></li>
                                </ul>
                            </li>
                            <li>The <span>Audit system events</span> policy must be set to <i>"Success"</i> for the effective domain controllers policy.</li>
                            <li>The Advanced audit policy settings can be configured instead of basic.</li>
                            <li>
                                <p>The <span>Maximum Security event log</span> size  must be set to  4GB. The retention method of the <span>Security event log</span> must be set to <i>“Overwrite events as needed”</i> or <i>"Archive the log when full"</i>.</p>
                            </li>
                            <li>
                                <p>The following Windows Firewall inbound rules must be enabled:</p>
                                <ul>
                                    <li>Remote Event Log Management (NP-In)</li>
                                    <li>Remote Event Log Management (RPC)</li>
                                    <li>Remote Event Log Management (RPC-EPMAP)</li>
                                </ul>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Azure AD</p>
                    </td>
                    <td>
					<span>Azure AD Activity</span>
                        <p><span>Azure AD Logons</span></p>
                    </td>
                    <td>
                        <p>No special settings are required. Remember to do the following:</p>
                        <p>Configure Azure AD app  as described in App Registration and Configuration in Microsoft Entra ID section.</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Computer</p>
                    </td>
                    <td>
                        <p>File Server Activity </p>
                    </td>
                    <td>
                        <p><b>In the audited environment</b></p>
                        <ul>
                            <li>
                                <p>For a security principal (e.g., <span>Everyone</span>), the following options must be configured in the <span>Advanced Security <span>→</span> Auditing</span> settings for the audited shared folders:</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>List Folder / Read Data (Files only)</td>
                                            <td><i>"Success"</i> and <i>"Fail"</i></td>
                                        </tr>
                                        <tr>
                                            <td>List Folder / Read Data (This folder, subfolders and files)</td>
                                            <td><i>"Fail"</i></td>
                                        </tr>
                                        <tr>
                                            <td>Create Files / Write Data*</td>
                                            <td><i>"Success"</i> and <i>"Fail"</i></td>
                                        </tr>
                                        <tr>
                                            <td>Create Folders / Append Data*</td>
                                            <td><i>"Success"</i> and <i>"Fail"</i></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>Write Extended Attributes*</p>
                                            </td>
                                            <td><i>"Success"</i> and <i>"Fail"</i></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>Delete Subfolders and Files*</p>
                                            </td>
                                            <td><i>"Success"</i> and <i>"Fail"</i></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>	Delete*</p>
                                            </td>
                                            <td><i>"Success"</i> and <i>"Fail"</i></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>Change Permissions*</p>
                                            </td>
                                            <td><i>"Success"</i> and <i>"Fail"</i></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>Take Ownership*</p>
                                            </td>
                                            <td><i>"Success"</i> and <i>"Fail"</i></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>Select <i>"Fail</i>" only if you want to track failure events, it is not required for success events monitoring. </p>
                                <p>If you want to get only state-in-time snapshots of your system configuration, limit your settings to the permissions marked with * and set it to <i>"Success"</i> (Apply onto: This folder, subfolders and files).</p>
                            </li>
                            <li>
                                <p>The following <span>Advanced audit policy</span> settings must be configured:</p>
                                <ul>
                                    <li>
                                        <p>The <span>Audit: Force audit policy subcategory settings (Windows 7 or later)</span> security option must be enabled.</p>
                                    </li>
                                    <li>
                                        <p>Depending on your OS version, configure the categories as follows:</p>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td colspan="2"><span>Windows Server 2008</span></td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2"><span>Object Access</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Audit File Share</span></td>
                                                    <td><i>"Success"</i> </td>
                                                </tr>
                                                <tr>
                                                    <td><span>Audit File System</span></td>
                                                    <td><i>"Success"</i> and <i>"Failure"</i></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Audit Handle Manipulation</span></td>
                                                    <td><i>"Success"</i> and <i>"Failure"</i></td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2"><span>Logon/Logoff</span></td>
                                                </tr>
                                                <tr>
                                                    <td>Logon</td>
                                                    <td><i>"Success"</i></td>
                                                </tr>
                                                <tr>
                                                    <td>Logoff</td>
                                                    <td><i>"Success"</i></td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2"><span>Policy Change</span></td>
                                                </tr>
                                                <tr>
                                                    <td>Audit Audit Policy Change</td>
                                                    <td><i>"Success"</i></td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2"><span>System</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Security State Change</span></td>
                                                    <td><i>"Success"</i></td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2"><span>Windows Server 2008 R2 / Windows 7 and above</span></td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2"><span>Object Access</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Audit File Share</span></td>
                                                    <td><i>"Success"</i></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Audit File System</span></td>
                                                    <td><i>"Success"</i> and <i>"Failure"</i></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Audit Handle Manipulation</span></td>
                                                    <td><i>"Success"</i> and <i>"Failure"</i></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Audit Detailed file share</span></td>
                                                    <td><i>"Failure"</i></td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2"><span>Logon/Logoff</span></td>
                                                </tr>
                                                <tr>
                                                    <td>Logon</td>
                                                    <td><i>"Success"</i></td>
                                                </tr>
                                                <tr>
                                                    <td>Logoff</td>
                                                    <td><i>"Success"</i></td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2"><span>Policy Change</span></td>
                                                </tr>
                                                <tr>
                                                    <td>Audit Audit Policy Change</td>
                                                    <td><i>"Success"</i></td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2"><span>System</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Security State Change</span></td>
                                                    <td><i>"Success"</i></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p>If you want to get only state-in-time snapshots of your system configuration, limit your audit settings to the following  policies:</p>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td colspan="2">
                                                        <p colspan="2"><span>Object Access</span></p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>Audit File System</p>
                                                    </td>
                                                    <td>
                                                        <p><i>"Success"</i></p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>Audit Handle Manipulation</p>
                                                    </td>
                                                    <td>"Success"</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>Audit File Share</p>
                                                    </td>
                                                    <td>"Success"</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <p colspan="2"><span>Policy Change</span></p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p>Audit Audit Policy Change</p>
                                                    </td>
                                                    <td>
                                                        <p>"Success"</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>The following legacy policies can be configured instead of advanced:</p>
                                <ul>
                                    <li><span>Audit object access</span> policy  must set to <i>"Success"</i> and <i>"Failure"</i>.</li>
                                    <li>
                                        <p><span>Audit logon events</span> policy must be set to <i>"Success"</i>.</p>
                                    </li>
                                    <li>
                                        <p><span>Audit system events</span> policy must be set to <i>"Success"</i>.</p>
                                    </li>
                                    <li><span>Audit policy change</span> must be set to <i>"Success"</i>.</li>
                                </ul>
                            </li>
                            <li>
                                <p>The <span> Security event log maximum size</span>  must be set to 4GB. The retention method of the <span>Security event log</span> must be set to <i>“Overwrite events as needed”</i>.</p>
                            </li>
                            <li>The Remote Registry service must be started</li>
                            <li>
                            The following inbound Firewall rules must be enabled:
                            <ul>
                            <li>Remote Event Log Management (NP-In)* </li>
                            <li>Remote Event Log Management (RPC)* </li>
                            <li>Remote Event Log Management (RPC-EPMAP)* </li>
                            <li>Windows Management Instrumentation (ASync-In)</li>
                            <li>Windows Management Instrumentation (DCOM-In)</li>
                            <li>Windows Management Instrumentation (WMI-In)</li>
                            <li>Network Discovery (NB-Name-In)</li>
                            <li>File and Printer Sharing (NB-Name-In)</li>
                            <li>File and Printer Sharing (Echo Request - ICMPv4-In)</li>
                            <li>File and Printer Sharing (Echo Request - ICMPv6-In)</li>
                            </ul>
                            </li>
                            </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>SharePoint Online</p>
                    </td>
                    <td>
                        <p>SharePoint Online Activity</p>
                    </td>
                    <td>
                        <p>No special settings are required. Remember to do the following:</p>
                        <p>Configure Azure AD app  as described in App Registration and Configuration in Microsoft Entra ID</p>
                    </td>
                </tr>
            </tbody>
        </table>
                                                                                                                                                                                                                                                                                                                                                                     
