---
title: "Examining Lockouts"
description: "Examining Lockouts"
sidebar_position: 20
---

# Examining Lockouts

To start using **Netwrix Account Lockout Examiner**, download it from Netwrix web site. Once the
download completes, run the executable from your browser menu or from your **Downloads** folder.

To find out why an Active Directory account was locked out, perform the following steps:

1. Set up the auditing as described in
   [Planning and Preparation](/docs/auditor/10.6/accountlockoutexaminer/configure.md)
   section.
2. Download the application onto a computer within the domain where lockouts happen.
3. Run the application. When prompted, accept the end-user license agreement.
4. If you wish, select to participate in Netwrix Customer Experience Improvement program. You can
   later change your preference using the product settings (see the next section for details).

![ale_usage_stats](/images/auditor/10.6/accountlockoutexaminer/ale_usage_stats.webp)

5. In the main window, supply the name of the account that was locked out.
6. Specify examiner credentials – the user account that will be used to run the examination, access
   domain controllers, and so on. The account must be a member of the **Domain Admins** group.
7. Click **Examine**.

![ale_new_start](/images/auditor/10.6/accountlockoutexaminer/ale_new_start.webp)

Once the examination completes, you will be presented with a list of reasons why the account you
supplied is being locked out.

## Modifying product settings

After you click **Settings** in the main window, you can apply the following options:

| Option                                                       | Description                                                                                                                                                                                                                  | Default  |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **Examining**                                                |                                                                                                                                                                                                                              |          |
| Skip unresolved IP addresses                                 | For safety reasons, Netwrix Account Lockout Examiner by default does not connect to the unknown and potentially dangerous IP addresses. See [this Knowledge Base article](https://kb.netwrix.com/5810) for more information. | Enabled  |
| Examine all domain controllers                               | Select this option if you want to examine all domain controllers to detect potential lockout reason.                                                                                                                         | Disabled |
| **Usage statistics**                                         |                                                                                                                                                                                                                              |          |
| Take part in Netwrix Customer Experience Improvement program | Select this option to participate in the program. See [this Knowledge Base article](https://kb.netwrix.com/5820) for more information on the program.                                                                        |          |

![ale_settings](/images/auditor/10.6/accountlockoutexaminer/ale_settings.webp)

## Troubleshooting

Log files of Netwrix Account Lockout Examiner can be found in the _%ProgramData%\Netwrix Account
Lockout Examiner\Logs_ folder.

| Symptom                                                                                                                     | Cause                                                                                                                                                                                                                                                          | Solution                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| In the environments with root/child domains, you may receive the “_Could not query ComputerName. Access is denied_.” error. | The account used to run Netwrix Account Lockout Examiner is not a member of the local **Administrators** group on the workstations in both root and child domains. Administrative rights are required to access the Security Event logs on these workstations. | Make sure this account is included in the local **Administrators** group.                                                                                                                                                                                                                                                                                              |
| **Issues encountered during examination** section is shown in the examination results.                                      | Most probably this means that **Netwrix Account Lockout Examiner** cannot reach some of the data sources it needs.                                                                                                                                             | - Check that you have configured the audit settings in the target domain as described in [Required audit settings](/docs/auditor/10.6/accountlockoutexaminer/configure.md#required-audit-settings) section. - Check that network connectivity between the Account Lockout Examiner machine and the domain controllers in your domain works properly. |

![ale_new_results](/images/auditor/10.6/accountlockoutexaminer/ale_new_results.webp)

We welcome any feedback and ideas you might have. Please take a minute to check in on
[Netwrix page at Spiceworks](https://community.spiceworks.com/pages/NetWrix?tab=353) or submit
direct feedback via
[this link](https://community.spiceworks.com/products/47099-netwrix-account-lockout-examiner).
